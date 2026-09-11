export type Segment =
  | { type: 'text'; value: string }
  | { type: 'link'; value: string; href: string };

// Post content is a plain string[], so links have to travel inside the text.
// Two forms are supported:
//   [label](https://example.com)  - preferred, keeps the author's own wording
//   https://example.com           - bare URLs, carried over verbatim by the
//                                   WordPress scrape, which used to render as
//                                   dead plain text
const LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(\bhttps?:\/\/[^\s<>"')\]]+)/g;

export function linkify(paragraph: string): Segment[] {
  const segments: Segment[] = [];
  let cursor = 0;

  for (const match of paragraph.matchAll(LINK_RE)) {
    const [matched, label, labelledHref, bareUrl] = match;
    const start = match.index ?? 0;

    if (start > cursor) {
      segments.push({ type: 'text', value: paragraph.slice(cursor, start) });
    }

    if (label && labelledHref) {
      segments.push({ type: 'link', value: label, href: labelledHref });
      cursor = start + matched.length;
    } else {
      // Trailing sentence punctuation belongs to the prose, not the URL.
      const href = (bareUrl ?? '').replace(/[.,;:!?]+$/, '');
      segments.push({ type: 'link', value: displayUrl(href), href });
      cursor = start + href.length;
    }
  }

  if (cursor < paragraph.length) {
    segments.push({ type: 'text', value: paragraph.slice(cursor) });
  }

  return segments;
}

// A 90-character URL as anchor text wraps badly on mobile and reads as noise.
function displayUrl(href: string): string {
  const withoutScheme = href.replace(/^https?:\/\//, '').replace(/\/$/, '');
  return withoutScheme.length > 48 ? `${withoutScheme.slice(0, 45)}…` : withoutScheme;
}
