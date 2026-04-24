#!/usr/bin/env python3
"""
Wayback Machine scraper for drgore.com articles + blog posts.
Target date: June 22, 2025 (last consistent WordPress snapshot before Lovable migration).
"""

import json
import time
import re
import os
import urllib.request
import urllib.error
from html.parser import HTMLParser

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ARTICLES_DIR = os.path.join(BASE_DIR, "articles")
BLOG_DIR = os.path.join(BASE_DIR, "blog")

# Old WordPress URL -> new slug mapping
ARTICLES = {
    "attention-teenagers-and-parents": "/attention-teenagers-and-parents/",
    "overcoming-depression": "/a-quick-primer-on-overcoming-depression/",
    "intimate-vs-dysfunctional-relationships": "/relationships-intimate-vs-dysfunctional/",
    "the-invitation": "/the-invitation/",
    "hitting-bottom-in-addiction": "/hitting-bottom-in-addiction-the-only-way-to-go-is-down/",
    "addiction-defined": "/addiction-defined/",
    "to-let-go": "/toletgo/",
    "what-is-perfection": "/what-is-perfection/",
    "how-to-raise-a-juvenile-delinquent": "/how-to-raise-a-juvenile-delinquent/",
    "checklist-for-hidden-anger": "/checklist-for-hidden-anger/",
    "on-feelings": "/feelings-a-beginners-guide-to-owning-them-and-talking-about-feelings/",
    "passive-assertive-aggressive-behavior": "/passive-assertive-aggressive-behavior/",
    "eleven-simple-words": "/eleven-simple-words-to-teach-your-children-or-eleven-simple-words-to-teach-yourself/",
    "chasing-misery": "/chasing-misery/",
    "why-play-therapy-is-stupid": "/why-play-therapy-is-stupid/",
    "child-psychology": "/child-psychology/",
    "premarital-counseling-faqs": "/premarital-counseling-faqs/",
    "does-my-child-have-bipolar-disorder": "/doctor-does-my-child-have-bipolar-disorder/",
    "enabling-versus-caring": "/enabling-versus-caring/",
    "loved-one-drugs-alcohol": "/when-a-loved-one-has-a-problem-with-drugs-or-alcohol-what-works-and-what-doesnt/",
    "intervention": "/intervention-an-option-for-helping-alcoholics-and-addicts/",
    "messed-up-28-year-old": "/doc-i-think-i-may-have-messed-up-with-my-28-year-old-child/",
    "list-of-lists": "/list-of-lists-in-no-particular-order-unless-stated-otherwise/",
    "adhd-fair-and-balanced": "/adhd-a-fair-and-balanced-view/",
    "fifty-two-fun-facts-marriage": "/fifty-two-free-fun-facts-from-a-marriage-counselor/",
    "xanax-for-anxiety": "/why-taking-xanax-for-anxiety-is-really-really-stupid/",
    "taking-time-to-be-a-couple": "/taking-the-time-out-to-be-a-couple/",
    "childs-bill-of-rights": "/a-childs-bill-of-rights/",
    "on-forgiveness": "/something-you-dont-see-in-a-newspaper-every-day/",
}

BLOG_POSTS = {
    "i-am-green-but-not-this-kind-of-green": "/i-am-green-but-not-this-kind-of-green/",
    "just-showing-up-is-enough": "/showing-up-for-people-is-a-skill-98-of-us-dont-have-2/",
    "this-was-written-in-2012": "/this-was-written-in-2012-and-things-are-somehow-not-improving/",
    "issues-and-tissues": "/if-youve-got-the-issues-ive-got-the-tissues/",
    "stages-of-being-in-a-car": "/the-stages-of-being-in-a-car/",
    "books-i-am-not-writing": "/books-i-am-not-writing/",
    "he-learned-a-lesson": "/he-learned-a-lesson/",
    "the-living-museum": "/the-living-museum/",
    "score-one-for-fathering": "/score-one-for-good-fathering-and-spontaneity/",
    "procrastination": "/procrastination/",
    "autobiography-five-chapters": "/autobiography-in-five-short-short-chapters/",
    "the-ongoing-struggle": "/the-ongoing-struggle/",
    "surrender": "/surrender/",
    "happy-mothers-day": "/happy-mothers-day/",
    "grandmas-birthday-card": "/my-nine-year-old-boy-celebrates-his-grandmas-birthday/",
    "women-medicated-twice-rate": "/why-are-women-medicated-at-nearly-twice-the-rate-of-men/",
    "why-lousy-relationships": "/why-we-have-lousy-relationships/",
    "pixar-inside-out": "/new-pixar-movie-excites-this-psychologist/",
    "girl-who-runs": "/this-girl-just-runs-and-runs/",
    "big-news-social-media": "/big-news-for-the-modern-age/",
}

# HTML content parser
class ContentExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_entry_content = False
        self.in_post_title = False
        self.depth = 0
        self.entry_depth = 0
        self.content_parts = []
        self.title = ""
        self.date = ""
        self.current_tag = ""
        self.skip_tags = {"script", "style", "nav", "header", "footer", "aside"}
        self.current_text = []
        self.classes_stack = []

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        classes = attrs_dict.get("class", "").split()
        self.classes_stack.append((tag, classes))

        if tag in self.skip_tags:
            return

        # Detect entry content div
        content_classes = {"entry-content", "post-content", "article-content", "single-content", "the-content", "content"}
        if tag in ("div", "article", "section") and any(c in content_classes for c in classes):
            self.in_entry_content = True
            self.entry_depth = self.depth

        # Detect title
        title_classes = {"entry-title", "post-title", "page-title"}
        if tag in ("h1", "h2") and any(c in title_classes for c in classes):
            self.in_post_title = True

        # Detect date
        if tag == "time":
            dt = attrs_dict.get("datetime", "")
            if dt and not self.date:
                self.date = dt[:10]

        if self.in_entry_content:
            if tag in ("p", "h1", "h2", "h3", "h4", "li", "blockquote"):
                self.current_text = []
            elif tag == "br":
                if self.current_text:
                    self.current_text.append("\n")

        self.depth += 1

    def handle_endtag(self, tag):
        self.depth -= 1
        if self.classes_stack:
            self.classes_stack.pop()

        if self.in_post_title and tag in ("h1", "h2"):
            self.in_post_title = False

        if self.in_entry_content:
            if tag in ("p", "h2", "h3", "h4", "blockquote"):
                text = "".join(self.current_text).strip()
                if text:
                    if tag in ("h2", "h3"):
                        self.content_parts.append(f"## {text}")
                    elif tag == "h4":
                        self.content_parts.append(f"### {text}")
                    elif tag == "blockquote":
                        self.content_parts.append(f"> {text}")
                    else:
                        self.content_parts.append(text)
                self.current_text = []
            elif tag == "li":
                text = "".join(self.current_text).strip()
                if text:
                    self.content_parts.append(f"- {text}")
                self.current_text = []

        # Check if we've left the entry content
        if self.in_entry_content and self.depth <= self.entry_depth:
            self.in_entry_content = False

    def handle_data(self, data):
        if self.in_post_title:
            self.title += data
        if self.in_entry_content and data.strip():
            self.current_text.append(data)

    def get_content(self):
        return "\n\n".join(p for p in self.content_parts if p.strip())


def fetch_url(url, max_retries=3):
    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; drgore-content-recovery/1.0)"
    }
    for attempt in range(max_retries):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=30) as resp:
                return resp.read().decode("utf-8", errors="replace")
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            if attempt < max_retries - 1:
                time.sleep(2 ** attempt)
        except Exception as e:
            if attempt < max_retries - 1:
                time.sleep(2 ** attempt)
            else:
                print(f"  ERROR fetching {url}: {e}")
    return None


def find_wayback_snapshot(old_path, target_date="20250622"):
    """Use CDX API to find the closest snapshot to the target date."""
    base_url = "https://drgore.com" + old_path
    cdx_url = (
        f"https://web.archive.org/cdx/search/cdx"
        f"?url={urllib.parse.quote(base_url, safe=':/')}"
        f"&output=json&limit=1&fl=timestamp,original&filter=statuscode:200"
        f"&from=20130101&to={target_date}"
    )
    try:
        data = fetch_url(cdx_url)
        if data:
            rows = json.loads(data)
            # rows[0] is header ["timestamp","original"], rows[1:] are results
            if len(rows) > 1:
                timestamp, original = rows[-1]
                return timestamp, original
    except Exception as e:
        print(f"  CDX error for {old_path}: {e}")
    return None, None


def extract_content_from_html(html):
    parser = ContentExtractor()
    parser.feed(html)
    return parser.title.strip(), parser.date, parser.get_content()


def slugify(text):
    return re.sub(r"[^a-z0-9-]", "", re.sub(r"\s+", "-", text.lower()))


def save_markdown(filepath, title, date, wayback_url, capture_date, content):
    md = f"""---
title: {json.dumps(title)}
date: {json.dumps(date)}
wayback_url: {json.dumps(wayback_url)}
capture_date: {json.dumps(capture_date)}
---

# {title}

{content}
"""
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(md)


def process_items(items, output_dir, kind):
    import urllib.parse
    manifest = {}
    for new_slug, old_path in items.items():
        out_path = os.path.join(output_dir, f"{new_slug}.md")
        print(f"  [{kind}] {new_slug} <- {old_path}")

        timestamp, original = find_wayback_snapshot(old_path)
        time.sleep(0.5)  # be polite to Wayback CDX API

        if not timestamp:
            # Try alternate: just the new slug as the path
            alt_path = f"/{new_slug}/"
            if alt_path != old_path:
                timestamp, original = find_wayback_snapshot(alt_path)
                time.sleep(0.5)

        if not timestamp:
            print(f"    -> NO SNAPSHOT FOUND")
            manifest[new_slug] = {
                "old_path": old_path,
                "wayback_url": None,
                "capture_date": None,
                "status": "no_snapshot"
            }
            continue

        wayback_url = f"https://web.archive.org/web/{timestamp}/{original}"
        capture_date = f"{timestamp[:4]}-{timestamp[4:6]}-{timestamp[6:8]}"
        print(f"    -> {capture_date} {wayback_url}")

        html = fetch_url(wayback_url)
        time.sleep(1)

        if not html:
            print(f"    -> FETCH FAILED")
            manifest[new_slug] = {
                "old_path": old_path,
                "wayback_url": wayback_url,
                "capture_date": capture_date,
                "status": "fetch_failed"
            }
            continue

        title, date, content = extract_content_from_html(html)

        if not content or len(content) < 100:
            print(f"    -> LOW CONTENT ({len(content)} chars) — may be SPA/empty")
            manifest[new_slug] = {
                "old_path": old_path,
                "wayback_url": wayback_url,
                "capture_date": capture_date,
                "status": "low_content",
                "content_length": len(content)
            }
            # Still save what we got
            save_markdown(out_path, title or new_slug, date or "", wayback_url, capture_date, content)
        else:
            print(f"    -> OK ({len(content)} chars)")
            save_markdown(out_path, title or new_slug, date or "", wayback_url, capture_date, content)
            manifest[new_slug] = {
                "old_path": old_path,
                "wayback_url": wayback_url,
                "capture_date": capture_date,
                "status": "ok",
                "content_length": len(content)
            }

    return manifest


if __name__ == "__main__":
    import urllib.parse
    print("=== Scraping articles ===")
    articles_manifest = process_items(ARTICLES, ARTICLES_DIR, "article")

    print("\n=== Scraping blog posts ===")
    blog_manifest = process_items(BLOG_POSTS, BLOG_DIR, "blog")

    full_manifest = {
        "generated": "2026-04-24",
        "target_date": "2025-06-22",
        "articles": articles_manifest,
        "blog": blog_manifest,
    }

    index_path = os.path.join(BASE_DIR, "index.json")
    with open(index_path, "w", encoding="utf-8") as f:
        json.dump(full_manifest, f, indent=2)

    print(f"\n=== Manifest saved to {index_path} ===")
    ok_articles = sum(1 for v in articles_manifest.values() if v["status"] == "ok")
    ok_blog = sum(1 for v in blog_manifest.values() if v["status"] == "ok")
    print(f"Articles: {ok_articles}/{len(articles_manifest)} OK")
    print(f"Blog posts: {ok_blog}/{len(blog_manifest)} OK")
