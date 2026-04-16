# drgore.com SEO Audit & Redirect Map
**Date:** April 15, 2026

## Technology History

drgore.com has gone through 5 distinct technology eras:

1. **Static HTML on A+.net** (late 1990s-2004): FrontPage, `.htm` files
2. **PHP CMS on A+.net** (2004-2013): Directory-based `/about/index.php` structure
3. **WordPress on A+.net** (2013-2020): Blog posts, SEO slugs, tags, categories
4. **Lovable React SPA** (2024-2026): Client-side rendered, poor SEO
5. **Astro on Vercel** (2026-present): Static HTML, proper SEO

## Current State (as of April 15, 2026)

- **Domain still points to Lovable/Cloudflare** (not yet cut over to Vercel)
- **Google has ~10 old WordPress URLs indexed** (e.g., `/contact_psychologist_atlanta_ga/`, `/enabling-versus-caring/`, `/atlanta-therapist/`)
- **Live sitemap is broken** — pointing to Lovable URLs via Supabase edge function
- **www vs non-www**: www.drgore.com 302-redirects to apex (should be 301)

## Redirect Map

A comprehensive `vercel.json` was created with ~170 301 redirects covering:

- **Core pages**: `/about/`, `/biography/`, `/contact/`, `/FAQs/`, `/links/`, `/store/`, `/articles/`
- **Old PHP paths**: `/about/index.php`, `/biography/index.php`, etc.
- **Old .htm files**: `/faq.htm`, `/drGore_bio.htm`, `/addiction_defined.htm`, etc.
- **WordPress article slugs** → new `/articles/[slug]` paths
- **Location/SEO pages**: `/atlanta-psychologist/`, `/atlanta-therapist/`, `/sandy-springs-psychologist/`, etc.
- **WordPress infrastructure**: `/wp-content/`, `/wp-admin/`, `/xmlrpc.php`, date archives, tags, categories, feeds
- **Blog posts** without current equivalents → `/blog`
- **Old content pages** without current equivalents → `/articles`

## Old Content Not in Current Site (~25 pages)

These pages existed in the WordPress era but have no direct equivalent in the Astro site:

### Articles/Content
- `/autobiography-in-five-short-short-chapters/`
- `/a-childs-bill-of-rights/`
- `/fifty-two-free-fun-facts-from-a-marriage-counselor/`
- `/why-taking-xanax-for-anxiety-is-really-really-stupid/`
- `/why-are-women-medicated-at-nearly-twice-the-rate-of-men/`
- `/signs-of-unhealthy-boundaries/`
- `/taking-the-time-out-to-be-a-couple/`
- `/why-we-have-lousy-relationships/`
- `/procrastination/`
- `/surrender/`
- `/adhd-a-fair-and-balanced-view/`

### Blog Posts
- `/happy-mothers-day/`
- `/the-ongoing-struggle/`
- `/books-i-am-not-writing/`
- `/the-living-museum/`
- `/he_learned_a_lesson/`
- `/something-you-dont-see-in-a-newspaper-every-day/`
- `/my-nine-year-old-boy-celebrates-his-grandmas-birthday/`
- `/new-pixar-movie-excites-this-psychologist/`
- `/score-one-for-good-fathering-and-spontaneity/`
- `/the-stages-of-being-in-a-car/`
- `/this-girl-just-runs-and-runs/`
- `/there-is-an-app-for-that/`
- `/big-news-for-the-modern-age/`
- `/if-youve-got-the-issues-ive-got-the-tissues/`

All currently redirect to `/articles` or `/blog` as catch-alls. Content could be recovered from Wayback Machine if Dave wants to restore them.

## Voice/Personality Recovery

Old site content was extracted and compared. Key personality that was restored:

1. **Gore Store**: Per-product popup responses ("Sold Out!", "Back Order", "Coming Soon", "Supply chain issues", "Waiting for download") instead of generic toast
2. **Biography**: "Goes to California to find self / Couldn't find self", Room Mom election, Sopranos finale cutoff joke
3. **FAQs**: "What makes your practice unique?", Phipps Plaza reference, adult individual clients question
4. **About page**: Couples therapy section, "I Hate Everything" bumper sticker teen anecdote

## Recommended Next Steps for Launch

1. Cut DNS from Lovable/Cloudflare to Vercel
2. Ensure www-to-apex redirect is 301 (not 302)
3. Submit new sitemap in Google Search Console immediately after cutover
4. Request indexing of key pages through GSC
5. Consider recovering high-value lost content from Wayback Machine
6. Add JSON-LD LocalBusiness schema beyond homepage
