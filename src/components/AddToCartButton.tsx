import { addItem } from '../stores/cartStore';

interface Props {
  slug: string;
  label?: string;
  variant?: 'primary' | 'ghost' | 'mini';
  className?: string;
}

export default function AddToCartButton({
  slug,
  label = 'Add to cart',
  variant = 'primary',
  className = '',
}: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-colors';
  const variants: Record<NonNullable<Props['variant']>, string> = {
    primary: 'bg-accent text-accent-foreground hover:bg-accent/90 px-5 py-2.5 text-sm',
    ghost:
      'border border-border text-foreground hover:bg-muted px-5 py-2.5 text-sm',
    mini: 'bg-accent text-accent-foreground hover:bg-accent/90 px-3 py-1.5 text-xs',
  };

  return (
    <button
      type="button"
      onClick={() => addItem(slug)}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <svg
        className={variant === 'mini' ? 'h-3.5 w-3.5' : 'h-4 w-4'}
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
      {label}
    </button>
  );
}
