import { useMemo, useState } from 'react';
import {
  goreProducts,
  productCategories,
  type ProductCategory,
} from '../data/goreProducts';
import { addItem } from '../stores/cartStore';

type CategoryFilter = 'All' | ProductCategory;
type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'new';

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'new', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

export default function GoreStore() {
  const [category, setCategory] = useState<CategoryFilter>('All');
  const [sort, setSort] = useState<SortKey>('featured');

  const visible = useMemo(() => {
    const filtered =
      category === 'All'
        ? [...goreProducts]
        : goreProducts.filter((p) => p.category === category);

    const tagRank = (tag?: string) =>
      tag === 'BESTSELLER' ? 0 : tag === 'NEW' ? 1 : tag === 'LIMITED' ? 2 : 3;

    switch (sort) {
      case 'price-asc':
        return filtered.sort((a, b) => a.priceValue - b.priceValue);
      case 'price-desc':
        return filtered.sort((a, b) => b.priceValue - a.priceValue);
      case 'new':
        return filtered.sort((a, b) => {
          const aNew = a.tag === 'NEW' ? 0 : 1;
          const bNew = b.tag === 'NEW' ? 0 : 1;
          return aNew - bNew;
        });
      case 'featured':
      default:
        return filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return tagRank(a.tag) - tagRank(b.tag);
        });
    }
  }, [category, sort]);

  return (
    <div>
      {/* Filter + sort bar */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {(['All', ...productCategories] as CategoryFilter[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors border ${
                category === cat
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-background text-foreground border-border hover:bg-muted'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <label
            htmlFor="gore-store-sort"
            className="text-sm text-muted-foreground"
          >
            Sort:
          </label>
          <select
            id="gore-store-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-md border border-border bg-background text-sm px-3 py-1.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="text-xs text-muted-foreground italic mb-8">
        Showing {visible.length} of {goreProducts.length} products.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((product) => (
          <div
            key={product.slug}
            className="group flex flex-col overflow-hidden border rounded-lg bg-card transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {product.tag && (
                <span
                  className={`absolute top-3 right-3 text-[0.7rem] font-bold tracking-wider px-2.5 py-1 rounded shadow-md ${
                    product.tag === 'NEW'
                      ? 'bg-accent text-accent-foreground'
                      : product.tag === 'LIMITED'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-foreground text-background'
                  }`}
                >
                  {product.tag}
                </span>
              )}
              <span className="absolute bottom-3 left-3 bg-background/90 backdrop-blur text-[0.65rem] uppercase tracking-wider font-semibold text-muted-foreground px-2 py-0.5 rounded">
                {product.category}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="font-display text-lg font-bold text-foreground leading-snug mb-2">
                {product.title}
              </h2>
              <p className="text-xl font-bold text-primary mb-3">
                {product.price}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {product.description}
              </p>
              {product.extras && (
                <p className="text-xs text-muted-foreground/70 italic mt-2">
                  {product.extras}
                </p>
              )}
              <button
                type="button"
                onClick={() => addItem(product.slug)}
                className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-2.5 rounded-md transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
