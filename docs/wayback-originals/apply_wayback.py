#!/usr/bin/env python3
"""
Apply Wayback Machine originals to articles.ts and blogPosts.ts.
- Saves Lovable backups first
- Replaces content[] with verbatim Wayback text
- Converts markdown → ArticleSection[] TypeScript (for articles.ts)
- Converts markdown → string[] (for blogPosts.ts)
"""

import os
import re
import json

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(BASE_DIR, "..", ".."))
ARTICLES_TS = os.path.join(REPO_ROOT, "src", "data", "articles.ts")
BLOG_TS = os.path.join(REPO_ROOT, "src", "data", "blogPosts.ts")
WAYBACK_ARTICLES_DIR = os.path.join(BASE_DIR, "articles")
WAYBACK_BLOG_DIR = os.path.join(BASE_DIR, "blog")
LOVABLE_ARTICLES_DIR = os.path.join(os.path.dirname(BASE_DIR), "lovable-originals", "articles")
LOVABLE_BLOG_DIR = os.path.join(os.path.dirname(BASE_DIR), "lovable-originals", "blog")


def read_wayback(path):
    """Read wayback markdown file, return body content (after frontmatter)."""
    if not os.path.exists(path):
        return None
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    # Strip frontmatter
    if text.startswith("---"):
        end = text.find("---", 3)
        if end >= 0:
            text = text[end+3:].lstrip()
    # Remove the # Title line
    lines = text.split("\n")
    if lines and lines[0].startswith("# "):
        lines = lines[1:]
    return "\n".join(lines).strip()


def escape_ts(s):
    """Escape a string for TypeScript template literal / double-quoted string."""
    s = s.replace("\\", "\\\\")
    s = s.replace('"', '\\"')
    s = s.replace("\n", "\\n")
    return s


def parse_markdown_to_article_sections(md):
    """
    Parse markdown body into ArticleSection[] TypeScript code.
    Returns a list of ArticleSection dicts.
    """
    sections = []
    lines = md.split("\n")
    i = 0

    def flush_list(items, numbered=False):
        if items:
            kind = "numbered-list" if numbered else "list"
            sections.append({"type": kind, "items": list(items)})
            items.clear()

    current_list_items = []
    current_numbered = False

    while i < len(lines):
        line = lines[i].rstrip()

        # Blank line — flush any pending list
        if not line.strip():
            flush_list(current_list_items, current_numbered)
            i += 1
            continue

        # H2 heading
        if line.startswith("## "):
            flush_list(current_list_items, current_numbered)
            text = line[3:].strip()
            # First heading in article = heading, subsequent = subheading
            has_heading = any(s["type"] == "heading" for s in sections)
            sections.append({"type": "subheading" if has_heading else "heading", "text": text})
            i += 1
            continue

        # H3 subheading
        if line.startswith("### "):
            flush_list(current_list_items, current_numbered)
            sections.append({"type": "subheading", "text": line[4:].strip()})
            i += 1
            continue

        # H4
        if line.startswith("#### "):
            flush_list(current_list_items, current_numbered)
            sections.append({"type": "subheading", "text": line[5:].strip()})
            i += 1
            continue

        # Blockquote
        if line.startswith("> "):
            flush_list(current_list_items, current_numbered)
            quote_lines = []
            while i < len(lines) and lines[i].startswith("> "):
                quote_lines.append(lines[i][2:].strip())
                i += 1
            text = " ".join(quote_lines)
            sections.append({"type": "quote", "text": text})
            continue

        # Bullet list item
        if line.startswith("- "):
            # If switching from numbered to bullet, flush first
            if current_list_items and current_numbered:
                flush_list(current_list_items, True)
            current_numbered = False
            current_list_items.append(line[2:].strip())
            i += 1
            continue

        # Numbered list item (1. 2. etc)
        num_match = re.match(r"^(\d+)\.\s+(.+)$", line)
        if num_match:
            if current_list_items and not current_numbered:
                flush_list(current_list_items, False)
            current_numbered = True
            current_list_items.append(num_match.group(2).strip())
            i += 1
            continue

        # Markdown table → comparison section
        if "|" in line and i + 1 < len(lines) and re.match(r"^\|[-| :]+\|", lines[i + 1]):
            flush_list(current_list_items, current_numbered)
            # Parse header row
            headers = [c.strip() for c in line.strip("|").split("|")]
            i += 2  # skip header + separator rows
            left_col, right_col = [], []
            while i < len(lines) and "|" in lines[i] and lines[i].strip():
                cells = [c.strip() for c in lines[i].strip("|").split("|")]
                if len(cells) >= 2:
                    left_col.append(cells[0])
                    right_col.append(cells[1])
                i += 1
            if left_col:
                sections.append({"type": "comparison", "columns": {"left": left_col, "right": right_col}})
            continue

        # Regular paragraph — accumulate until blank or structural element
        flush_list(current_list_items, current_numbered)
        para_lines = []
        while i < len(lines):
            l = lines[i].rstrip()
            if not l.strip():
                break
            if l.startswith("## ") or l.startswith("### ") or l.startswith("#### "):
                break
            if l.startswith("> "):
                break
            if l.startswith("- ") or re.match(r"^\d+\.\s", l):
                break
            if "|" in l and i + 1 < len(lines) and re.match(r"^\|[-| :]+\|", lines[i + 1] if i + 1 < len(lines) else ""):
                break
            para_lines.append(l)
            i += 1
        text = " ".join(para_lines).strip()
        # Normalize multiple spaces
        text = re.sub(r"  +", " ", text)
        if text:
            sections.append({"type": "paragraph", "text": text})
        continue

    flush_list(current_list_items, current_numbered)
    return sections


def sections_to_ts(sections, indent="      "):
    """Convert list of ArticleSection dicts to TypeScript array content."""
    parts = []
    for s in sections:
        t = s["type"]
        if t in ("paragraph", "heading", "subheading", "quote", "note"):
            text = escape_ts(s.get("text", ""))
            parts.append(f'{indent}{{ type: "{t}", text: "{text}" }}')
        elif t in ("list", "numbered-list"):
            items = s.get("items", [])
            item_strs = ",\n".join(f'{indent}  "{escape_ts(item)}"' for item in items)
            parts.append(f'{indent}{{ type: "{t}", items: [\n{item_strs},\n{indent}] }}')
        elif t == "comparison":
            left = s.get("columns", {}).get("left", [])
            right = s.get("columns", {}).get("right", [])
            left_str = ",\n".join(f'{indent}    "{escape_ts(x)}"' for x in left)
            right_str = ",\n".join(f'{indent}    "{escape_ts(x)}"' for x in right)
            parts.append(
                f'{indent}{{ type: "comparison", columns: {{\n'
                f'{indent}  left: [\n{left_str},\n{indent}  ],\n'
                f'{indent}  right: [\n{right_str},\n{indent}  ]\n'
                f'{indent}}} }}'
            )
    return ",\n".join(parts)


def parse_markdown_to_blog_paragraphs(md):
    """
    Parse markdown body into string[] for blogPosts.ts.
    Returns list of paragraph strings.
    """
    paragraphs = []
    blocks = re.split(r"\n{2,}", md)
    for block in blocks:
        block = block.strip()
        if not block:
            continue
        # Remove heading markers
        block = re.sub(r"^#{1,4}\s+", "", block)
        # Remove blockquote markers but keep text
        block = re.sub(r"^>\s+", "", block, flags=re.MULTILINE)
        # Normalize line breaks within paragraph (keep intentional \n)
        # For blog posts, preserve multi-line blocks as single strings with \n
        block = block.strip()
        if block:
            paragraphs.append(block)
    return paragraphs


def blog_paragraphs_to_ts(paragraphs, indent="    "):
    """Convert string[] to TypeScript array content for blogPosts.ts."""
    parts = []
    for p in paragraphs:
        escaped = escape_ts(p)
        parts.append(f'{indent}"{escaped}"')
    return ",\n".join(parts)


def extract_content_block(ts_text, slug):
    """
    Find the content: [...] block for a given slug in TypeScript source.
    Returns (start_index, end_index) of the entire content: [...] span.
    Returns None if not found.
    """
    # Find the slug
    slug_pattern = re.compile(r'slug:\s*"' + re.escape(slug) + r'"')
    slug_match = slug_pattern.search(ts_text)
    if not slug_match:
        return None

    # From the slug position, find "content: ["
    search_start = slug_match.start()
    content_pattern = re.compile(r'\bcontent:\s*\[')
    content_match = content_pattern.search(ts_text, search_start)
    if not content_match:
        return None

    # Now find the matching closing bracket
    start = content_match.start()
    bracket_start = content_match.end() - 1  # position of '['
    depth = 0
    pos = bracket_start
    while pos < len(ts_text):
        c = ts_text[pos]
        if c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                end = pos + 1
                return (start, end)
        pos += 1
    return None


def save_lovable_backup(slug, ts_text, out_dir, content_start, content_end):
    """Save the current (Lovable) content as a markdown backup."""
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, f"{slug}.md")
    content_ts = ts_text[content_start:content_end]
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(f"# Lovable backup for: {slug}\n\n")
        f.write("```typescript\n")
        f.write(content_ts)
        f.write("\n```\n")


def process_articles():
    """Replace content[] in articles.ts with Wayback originals."""
    print("\n=== Processing articles.ts ===")
    with open(ARTICLES_TS, "r", encoding="utf-8") as f:
        ts_text = f.read()

    # Get all article slugs from wayback
    slugs = []
    for fname in sorted(os.listdir(WAYBACK_ARTICLES_DIR)):
        if fname.endswith(".md"):
            slugs.append(fname[:-3])

    changes = []
    for slug in slugs:
        wayback_path = os.path.join(WAYBACK_ARTICLES_DIR, f"{slug}.md")
        md_body = read_wayback(wayback_path)
        if not md_body or len(md_body.strip()) < 50:
            print(f"  SKIP {slug} — no/minimal wayback content")
            continue

        span = extract_content_block(ts_text, slug)
        if span is None:
            print(f"  SKIP {slug} — not found in articles.ts")
            continue

        content_start, content_end = span

        # Save Lovable backup
        save_lovable_backup(slug, ts_text, LOVABLE_ARTICLES_DIR, content_start, content_end)

        # Parse Wayback → sections
        sections = parse_markdown_to_article_sections(md_body)
        if not sections:
            print(f"  SKIP {slug} — parsed 0 sections")
            continue

        # Generate new content block
        new_content_inner = sections_to_ts(sections)
        new_content_block = f"content: [\n{new_content_inner},\n    ]"

        changes.append((slug, content_start, content_end, new_content_block))
        print(f"  OK   {slug} — {len(sections)} sections")

    # Apply changes in reverse order (so indices stay valid)
    changes.sort(key=lambda x: x[1], reverse=True)
    for slug, start, end, new_block in changes:
        ts_text = ts_text[:start] + new_block + ts_text[end:]

    with open(ARTICLES_TS, "w", encoding="utf-8") as f:
        f.write(ts_text)

    print(f"\nArticles updated: {len(changes)} slugs replaced")
    return len(changes)


def process_blog_posts():
    """Replace content[] in blogPosts.ts with Wayback originals."""
    print("\n=== Processing blogPosts.ts ===")
    with open(BLOG_TS, "r", encoding="utf-8") as f:
        ts_text = f.read()

    slugs = []
    for fname in sorted(os.listdir(WAYBACK_BLOG_DIR)):
        if fname.endswith(".md"):
            slugs.append(fname[:-3])

    changes = []
    for slug in slugs:
        wayback_path = os.path.join(WAYBACK_BLOG_DIR, f"{slug}.md")
        md_body = read_wayback(wayback_path)
        if not md_body or len(md_body.strip()) < 20:
            print(f"  SKIP {slug} — no/minimal wayback content")
            continue

        span = extract_content_block(ts_text, slug)
        if span is None:
            print(f"  SKIP {slug} — not found in blogPosts.ts")
            continue

        content_start, content_end = span

        # Save Lovable backup
        save_lovable_backup(slug, ts_text, LOVABLE_BLOG_DIR, content_start, content_end)

        # Parse Wayback → paragraphs
        paragraphs = parse_markdown_to_blog_paragraphs(md_body)
        if not paragraphs:
            print(f"  SKIP {slug} — parsed 0 paragraphs")
            continue

        # Generate new content block
        new_content_inner = blog_paragraphs_to_ts(paragraphs)
        new_content_block = f"content: [\n{new_content_inner},\n  ]"

        changes.append((slug, content_start, content_end, new_content_block))
        print(f"  OK   {slug} — {len(paragraphs)} paragraphs")

    # Apply changes in reverse order
    changes.sort(key=lambda x: x[1], reverse=True)
    for slug, start, end, new_block in changes:
        ts_text = ts_text[:start] + new_block + ts_text[end:]

    with open(BLOG_TS, "w", encoding="utf-8") as f:
        f.write(ts_text)

    print(f"\nBlog posts updated: {len(changes)} slugs replaced")
    return len(changes)


if __name__ == "__main__":
    os.makedirs(LOVABLE_ARTICLES_DIR, exist_ok=True)
    os.makedirs(LOVABLE_BLOG_DIR, exist_ok=True)
    a = process_articles()
    b = process_blog_posts()
    print(f"\n=== Done: {a} articles + {b} blog posts updated ===")
