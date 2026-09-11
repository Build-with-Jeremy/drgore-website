import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// 17 of 20 blog posts once shipped pointing at thumbnails that were never created.
// Both templates carry an onerror handler that hides a broken image, so the site
// looked fine to us and looked empty to the client, for months. The browser
// fallback stays (a visitor should never see a broken-image icon) — this makes the
// same failure loud at build time instead, which is where we can still fix it.
export function assertThumbnails(
  posts: { slug: string; thumbnail: string }[],
  kind = 'blog post',
): void {
  const publicDir = fileURLToPath(new URL('../../public', import.meta.url));
  const missing = posts
    .filter((post) => !existsSync(`${publicDir}${post.thumbnail}`))
    .map((post) => `  ${post.slug} -> ${post.thumbnail}`);

  if (missing.length > 0) {
    throw new Error(
      `${missing.length} ${kind}(s) reference an image that does not exist in public/:\n`
        + `${missing.join('\n')}\n`
        + 'Create the image, or remove the reference. Do not ship a phantom path.',
    );
  }
}

// Articles carry a thumbnail and can also place an image in the body. A body
// image is the content itself, not decoration, so a missing one has to fail the
// build too rather than render as an empty figure.
export function assertArticleImages(
  articles: { slug: string; thumbnail: string; content: { type: string; href?: string }[] }[],
): void {
  assertThumbnails(articles, 'article');
  const inline = articles.flatMap((article) =>
    article.content
      .filter((section) => section.type === 'image' && section.href)
      .map((section) => ({ slug: `${article.slug} (body image)`, thumbnail: section.href as string })),
  );
  assertThumbnails(inline, 'article body image');
}
