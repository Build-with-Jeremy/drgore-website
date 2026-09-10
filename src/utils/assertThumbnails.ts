import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// 17 of 20 blog posts once shipped pointing at thumbnails that were never created.
// Both templates carry an onerror handler that hides a broken image, so the site
// looked fine to us and looked empty to the client, for months. The browser
// fallback stays (a visitor should never see a broken-image icon) — this makes the
// same failure loud at build time instead, which is where we can still fix it.
export function assertThumbnails(posts: { slug: string; thumbnail: string }[]): void {
  const publicDir = fileURLToPath(new URL('../../public', import.meta.url));
  const missing = posts
    .filter((post) => !existsSync(`${publicDir}${post.thumbnail}`))
    .map((post) => `  ${post.slug} -> ${post.thumbnail}`);

  if (missing.length > 0) {
    throw new Error(
      `${missing.length} blog post(s) reference a thumbnail that does not exist in public/:\n`
        + `${missing.join('\n')}\n`
        + 'Create the image, or remove the reference. Do not ship a phantom path.',
    );
  }
}
