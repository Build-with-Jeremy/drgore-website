# Adding videos to /videos

The `/videos` page is driven by `src/data/videos.ts`. To add a video, append a new entry to the `videos` array and rebuild.

## Required fields

- `slug` — kebab-case, unique. Used as the URL path (`/videos/{slug}`) when a transcript is present.
- `youtubeId` — the 11-character ID from the YouTube URL. Example: `https://youtube.com/shorts/AbC123XyZ00` → `AbC123XyZ00`. Works for both standard videos and Shorts.
- `title` — short, punchy. Appears on the card and as the page title.
- `date` — `"2025"` or `"2025-03"`. Free-form string for now; matches the blog convention.
- `summary` — one or two sentences. Used for the card hover overlay and the page meta description.
- `tags` — array of tag strings. Pick from the established vocabulary below. 1–3 tags per video is ideal.

## Optional fields

- `durationSec` — integer seconds. Renders as a `0:47`-style badge on the card.
- `orientation` — `"vertical"` (default for Shorts) or `"horizontal"` (for standard 16:9 videos).
- `transcript` — array of `TranscriptBlock` objects. **Presence of this field is what creates a dedicated `/videos/{slug}` page.** Without a transcript, the video plays in a modal from the grid.
- `relatedBlogSlug` — optional cross-link to a blog post (`blogPosts.ts` slug) that pairs thematically.

## Transcript format

A transcript is an ordered array of blocks. Three block types are supported:

```ts
{ type: "paragraph", text: "Body copy. Use for sentences and paragraphs." }
{ type: "heading",   text: "Section Break" }  // optional, for splitting long transcripts
{ type: "quote",     text: "A pull quote. Use sparingly." }
```

Suggested arc for a short video:

1. Paragraph (the setup — what prompts the video)
2. Heading (optional, e.g. "The Point")
3. Paragraph(s) (the body)
4. Quote (the line worth highlighting)
5. Paragraph (the takeaway)

Keep it verbatim-ish but clean — remove filler ("um", "you know"), tighten false starts.

## Tag vocabulary (starter set)

Keep this tight. Prefer reusing tags over adding new ones — otherwise filters fragment.

- `Anxiety`
- `Parenting`
- `Relationships`
- `Marriage`
- `Humor`
- `Boundaries`
- `Grief`
- `Addiction`
- `Self-Growth`

Canonical list lives in `VIDEO_TAGS` inside `videos.ts`. Add to that array when introducing a new tag.

## Thumbnails

Thumbnails are pulled automatically from YouTube at `https://i.ytimg.com/vi/{youtubeId}/maxresdefault.jpg`. There's a runtime fallback to `hqdefault.jpg` if `maxresdefault` is missing. No asset management needed.
