export type Segment =
  | { type: 'text'; value: string }
  | { type: 'link'; value: string; href: string };

// Bare URLs were carried over verbatim in the WordPress scrape, so post content
// holds raw http(s) strings that used to render as dead plain text. Split a
// paragraph into text/link segments so the template can emit real anchors.
const URL_RE = /\bhttps?:\/\/[^\s<>"')\]]+/g;

export function linkify(paragraph: string): Segment[] {
  const segments: Segment[] = [];
  let cursor = 0;

  for (const match of paragraph.matchAll(URL_RE)) {
    const start = match.index ?? 0;
    // Trailing sentence punctuation belongs to the prose, not the URL.
    const raw = match[0].replace(/[.,;:!?]+$/, '');

    if (start > cursor) {
      segments.push({ type: 'text', value: paragraph.slice(cursor, start) });
    }
    segments.push({ type: 'link', value: displayUrl(raw), href: raw });
    cursor = start + raw.length;
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
