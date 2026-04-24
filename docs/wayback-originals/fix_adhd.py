#!/usr/bin/env python3
"""
Restore full ADHD Q&A article from recovered-content-review.md.
The Wayback scrape was truncated. This uses the full content from
docs/recovered-content-review.md which was itself scraped from Wayback
in the April 15 session.
"""
import os
import re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(BASE_DIR, "..", ".."))
ARTICLES_TS = os.path.join(REPO_ROOT, "src", "data", "articles.ts")
RECOVERED_MD = os.path.join(os.path.dirname(BASE_DIR), "recovered-content-review.md")


def escape_ts(s):
    s = s.replace("\\", "\\\\")
    s = s.replace('"', '\\"')
    s = s.replace("\n", "\\n")
    return s


def extract_adhd_from_recovered():
    """Extract ADHD section text from recovered-content-review.md."""
    with open(RECOVERED_MD, "r", encoding="utf-8") as f:
        text = f.read()
    # Find the ADHD section
    start_marker = "### 3. ADHD: A Fair and Balanced View"
    end_marker = "\n---\n"
    start = text.find(start_marker)
    if start < 0:
        raise ValueError("ADHD section not found")
    # Find the content start (after the header + recommendation line)
    content_start = text.find("\n\n", text.find("**Recommendation:**", start)) + 2
    end = text.find(end_marker, content_start)
    if end < 0:
        end = len(text)
    return text[content_start:end].strip()


def parse_qa_to_sections(md):
    """Parse ADHD Q&A markdown into ArticleSection[]."""
    sections = []
    lines = md.split("\n")
    i = 0
    current_list = []
    current_numbered = False

    def flush_list():
        if current_list:
            kind = "numbered-list" if current_numbered else "list"
            sections.append({"type": kind, "items": list(current_list)})
            current_list.clear()

    while i < len(lines):
        line = lines[i].rstrip()

        if not line.strip():
            flush_list()
            i += 1
            continue

        # Bold question: **Q: ...**
        q_match = re.match(r"^\*\*Q:\s*(.*?)\*\*$", line)
        if q_match:
            flush_list()
            q_text = q_match.group(1).strip()
            sections.append({"type": "subheading", "text": f"Q: {q_text}"})
            i += 1
            continue

        # Answer: A: ...
        if line.startswith("A: "):
            flush_list()
            # Collect multi-line answer
            answer_lines = [line[3:].strip()]
            j = i + 1
            while j < len(lines):
                next_line = lines[j].rstrip()
                if not next_line.strip():
                    break
                if next_line.startswith("**Q:") or next_line.startswith("A: "):
                    break
                if re.match(r"^\d+\.", next_line):
                    break
                answer_lines.append(next_line)
                j += 1
            text = " ".join(answer_lines).strip()
            if text:
                sections.append({"type": "paragraph", "text": text})
            i += 1
            continue

        # Numbered list item
        num_match = re.match(r"^(\d+)\.\s+(.+)$", line)
        if num_match:
            current_list.append(num_match.group(2).strip())
            current_numbered = True
            i += 1
            continue

        # Bullet list item
        if line.startswith("- "):
            current_list.append(line[2:].strip())
            current_numbered = False
            i += 1
            continue

        # Regular paragraph
        flush_list()
        para_lines = [line]
        j = i + 1
        while j < len(lines):
            l = lines[j].rstrip()
            if not l.strip():
                break
            if l.startswith("**Q:") or l.startswith("A: "):
                break
            if re.match(r"^\d+\.", l) or l.startswith("- "):
                break
            para_lines.append(l)
            j += 1
        text = " ".join(para_lines).strip()
        if text:
            sections.append({"type": "paragraph", "text": text})
        i += j - i
        continue

    flush_list()
    return sections


def sections_to_ts(sections, indent="      "):
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
    return ",\n".join(parts)


def extract_content_block(ts_text, slug):
    slug_pattern = re.compile(r'slug:\s*"' + re.escape(slug) + r'"')
    slug_match = slug_pattern.search(ts_text)
    if not slug_match:
        return None
    search_start = slug_match.start()
    content_pattern = re.compile(r'\bcontent:\s*\[')
    content_match = content_pattern.search(ts_text, search_start)
    if not content_match:
        return None
    start = content_match.start()
    bracket_start = content_match.end() - 1
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


if __name__ == "__main__":
    print("Extracting ADHD content from recovered-content-review.md...")
    md = extract_adhd_from_recovered()
    print(f"  Got {len(md)} chars")

    print("Parsing Q&A sections...")
    sections = parse_qa_to_sections(md)
    print(f"  Parsed {len(sections)} sections")

    print("Reading articles.ts...")
    with open(ARTICLES_TS, "r", encoding="utf-8") as f:
        ts_text = f.read()

    span = extract_content_block(ts_text, "adhd-fair-and-balanced")
    if not span:
        print("ERROR: adhd-fair-and-balanced not found in articles.ts")
        exit(1)

    start, end = span
    new_content_inner = sections_to_ts(sections)
    new_content_block = f"content: [\n{new_content_inner},\n    ]"

    ts_text = ts_text[:start] + new_content_block + ts_text[end:]

    with open(ARTICLES_TS, "w", encoding="utf-8") as f:
        f.write(ts_text)

    print(f"Done! ADHD article restored with {len(sections)} sections.")
