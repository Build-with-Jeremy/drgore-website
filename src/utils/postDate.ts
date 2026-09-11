import type { BlogPost } from '../data/blogPosts';

// Posts migrated off WordPress kept a full "Month D, YYYY" date. A handful
// arrived with only a year, and we do not invent the missing day — a made-up
// date on a dated essay is worse than an honest year. So sort keys are exact
// where we know the day, and fall back to Jan 1 of the year, which lands those
// posts at the bottom of their own year rather than anywhere misleading.
export function sortKey(date: string): number {
  const yearOnly = /^\d{4}$/.test(date.trim());
  if (yearOnly) return new Date(`${date.trim()}-01-01T00:00:00Z`).getTime();

  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function hasFullDate(date: string): boolean {
  return !/^\d{4}$/.test(date.trim()) && !Number.isNaN(Date.parse(date));
}

// Newest first, the convention a reader expects from a blog index.
export function byNewestFirst(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => sortKey(b.date) - sortKey(a.date));
}
