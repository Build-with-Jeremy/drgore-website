import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    // lastmod stamps every URL with the static build time — a legitimate freshness
    // signal for a fully static site regenerated on each deploy. Per-page content
    // dates in the data files are too sparse/imprecise to be trustworthy, so the
    // build date is the honest, uniform signal to give Google.
    sitemap({ lastmod: new Date(), changefreq: 'monthly' }),
  ],
  site: 'https://drgore.com',
});
