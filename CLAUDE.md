# drgore.com (Astro, Vercel on push to main)

**A scheduled SEO agent works in this repo.** `gore-seo-daily` (client-seo-agent skill) runs weekdays at 08:05 and edits, branches and commits here. Other sessions may be working in the same tree at the same time.

Before you commit:

- Run `git fetch && git status --short` first. If you see changes you did not make, stop and ask. Do not commit, stash or discard them.
- **Never `git add -A` or `git add .`** Add the paths you changed, by name. A blanket add is how an unreviewed, high-risk credentials change went live inside an unrelated commit on 2026-09-11.
- Do not commit while the daily run is mid-run (check its runs before committing between 08:05 and about 09:00 on weekdays).
- Push to main deploys to production.

Client rules that apply to every change: Dave Gore is a licensed psychologist, **not board certified**. Never write "board certified" anywhere. No Roswell references (he no longer has that office). SEO agent config and risk policy: `../seo/config.json`.
