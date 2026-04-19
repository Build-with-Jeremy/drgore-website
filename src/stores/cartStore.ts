import { goreProducts, type GoreProduct } from '../data/goreProducts';

export interface CartItem {
  slug: string;
  qty: number;
}

type Listener = (items: CartItem[], ui: UiState) => void;

interface UiState {
  drawerOpen: boolean;
  checkoutOpen: boolean;
  lastAddedSlug: string | null;
  lastAddedAt: number;
}

const STORAGE_KEY = 'gore-cart-v1';

let items: CartItem[] = [];
let ui: UiState = {
  drawerOpen: false,
  checkoutOpen: false,
  lastAddedSlug: null,
  lastAddedAt: 0,
};
const listeners = new Set<Listener>();

function load() {
  if (typeof window === 'undefined') return;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) items = parsed;
    }
  } catch {
    // ignore corrupt state
  }
}

function persist() {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore quota errors
  }
}

function emit() {
  listeners.forEach((fn) => fn(items, ui));
}

load();

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      load();
      emit();
    }
  });
}

export function subscribe(fn: Listener) {
  listeners.add(fn);
  fn(items, ui);
  return () => {
    listeners.delete(fn);
  };
}

export function getItems(): CartItem[] {
  return items;
}

export function getUi(): UiState {
  return ui;
}

export function getCount(): number {
  return items.reduce((n, it) => n + it.qty, 0);
}

export function getSubtotal(): number {
  return items.reduce((sum, it) => {
    const product = goreProducts.find((p) => p.slug === it.slug);
    return sum + (product ? product.priceValue * it.qty : 0);
  }, 0);
}

export function addItem(slug: string) {
  const product = goreProducts.find((p) => p.slug === slug);
  if (!product) return;
  const existing = items.find((it) => it.slug === slug);
  if (existing) {
    items = items.map((it) =>
      it.slug === slug ? { ...it, qty: it.qty + 1 } : it
    );
  } else {
    items = [...items, { slug, qty: 1 }];
  }
  ui = {
    ...ui,
    drawerOpen: true,
    lastAddedSlug: slug,
    lastAddedAt: Date.now(),
  };
  persist();
  emit();
}

export function removeItem(slug: string) {
  items = items.filter((it) => it.slug !== slug);
  persist();
  emit();
}

export function clearCart() {
  items = [];
  persist();
  emit();
}

export function openDrawer() {
  ui = { ...ui, drawerOpen: true };
  emit();
}

export function closeDrawer() {
  ui = { ...ui, drawerOpen: false };
  emit();
}

export function openCheckout() {
  ui = { ...ui, drawerOpen: false, checkoutOpen: true };
  emit();
}

export function closeCheckout() {
  ui = { ...ui, checkoutOpen: false };
  emit();
}

export function getProductForItem(item: CartItem): GoreProduct | undefined {
  return goreProducts.find((p) => p.slug === item.slug);
}
