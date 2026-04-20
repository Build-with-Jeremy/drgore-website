import { useEffect, useState } from 'react';
import {
  subscribe,
  getItems,
  getUi,
  getCount,
  getSubtotal,
  getProductForItem,
  removeItem,
  openDrawer,
  closeDrawer,
  openCheckout,
  closeCheckout,
  clearCart,
  type CartItem,
} from '../stores/cartStore';

function formatUsd(n: number) {
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export default function GoreCart() {
  const [items, setItems] = useState<CartItem[]>(getItems());
  const [ui, setUi] = useState(getUi());
  const [toastVisible, setToastVisible] = useState(false);
  const [lastAddedSlug, setLastAddedSlug] = useState<string | null>(null);
  const [isStorePage, setIsStorePage] = useState(false);

  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, '');
    setIsStorePage(path === '/store');
  }, []);

  useEffect(() => {
    const unsub = subscribe((nextItems, nextUi) => {
      setItems(nextItems);
      setUi(nextUi);
      if (nextUi.lastAddedSlug && nextUi.lastAddedSlug !== lastAddedSlug) {
        setLastAddedSlug(nextUi.lastAddedSlug);
        setToastVisible(true);
        window.setTimeout(() => setToastVisible(false), 3000);
      }
    });
    return unsub;
  }, [lastAddedSlug]);

  useEffect(() => {
    if (ui.drawerOpen || ui.checkoutOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [ui.drawerOpen, ui.checkoutOpen]);

  const count = getCount();
  const subtotal = getSubtotal();
  const lastAddedProduct = lastAddedSlug
    ? getProductForItem({ slug: lastAddedSlug, qty: 1 })
    : null;

  return (
    <>
      {/* Floating cart button — store page only */}
      {isStorePage && (
      <button
        type="button"
        onClick={openDrawer}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 shadow-2xl hover:bg-foreground/90 transition-all font-semibold"
        aria-label={`Open cart (${count} item${count === 1 ? '' : 's'})`}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <span className="text-sm">Cart</span>
        {count > 0 && (
          <span className="inline-flex items-center justify-center min-w-[1.4rem] h-6 px-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold">
            {count}
          </span>
        )}
      </button>
      )}

      {/* Add-to-cart toast */}
      {toastVisible && lastAddedProduct && (
        <div
          className="fixed bottom-24 right-6 z-50 max-w-xs rounded-lg bg-foreground text-background px-5 py-3 shadow-xl animate-fade-in"
          role="alert"
        >
          <p className="font-semibold text-sm mb-0.5">
            Added to cart: {lastAddedProduct.soldResponse}
          </p>
          <p className="text-xs opacity-80 line-clamp-2">
            "{lastAddedProduct.title}"
          </p>
        </div>
      )}

      {/* Drawer overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity ${
          ui.drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!ui.drawerOpen}
      >
        <div
          className="absolute inset-0 bg-foreground/60"
          onClick={closeDrawer}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl flex flex-col transition-transform duration-300 ${
            ui.drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-label="Shopping cart"
        >
          <header className="flex items-center justify-between border-b border-border px-6 py-5">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Your Cart
              </h2>
              <p className="text-xs text-muted-foreground italic">
                Supplies are extremely limited. (Nonexistent, actually.)
              </p>
            </div>
            <button
              type="button"
              onClick={closeDrawer}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close cart"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>
          </header>

          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center px-8 py-16">
                <svg className="h-14 w-14 text-muted-foreground/40 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                <p className="font-display text-lg font-semibold text-foreground mb-1">
                  Cart's empty.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Which, honestly, is a healthier outcome. But if you insist,
                  <a href="/store" className="text-primary underline ml-1">browse the store</a>.
                </p>
              </div>
            ) : (
              <ul className="divide-y divide-border">
                {items.map((item) => {
                  const product = getProductForItem(item);
                  if (!product) return null;
                  return (
                    <li key={item.slug} className="flex gap-4 p-5">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-semibold text-sm text-foreground leading-snug line-clamp-2">
                          {product.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Qty {item.qty} · {formatUsd(product.priceValue * item.qty)}
                        </p>
                        <p className="text-xs italic text-muted-foreground/70 mt-1">
                          Status: {product.soldResponse}
                        </p>
                        <button
                          type="button"
                          onClick={() => removeItem(item.slug)}
                          className="text-xs text-primary hover:underline mt-2"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <footer className="border-t border-border p-6 space-y-4 bg-card">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-display text-xl font-bold text-foreground">
                  {formatUsd(subtotal)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground/80 italic leading-snug">
                Shipping, handling, and regret calculated at checkout.
              </p>
              <button
                type="button"
                onClick={openCheckout}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold py-3 rounded-md transition-colors"
              >
                Checkout →
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear cart
              </button>
            </footer>
          )}
        </aside>
      </div>

      {/* Joke checkout modal */}
      {ui.checkoutOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-foreground/70"
            onClick={closeCheckout}
          />
          <div
            className="relative bg-background rounded-xl shadow-2xl max-w-lg w-full p-8 md:p-10 text-center animate-fade-in-up"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={closeCheckout}
              className="absolute top-4 right-4 p-1.5 text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>

            <div className="mb-5 mx-auto w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thank you for your order.
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed mb-8">
              <p>
                Your credit card has been declined by The Universe.
              </p>
              <p>
                A therapist will call you shortly to discuss whatever made you think any of this
                would actually help.
              </p>
              <p className="text-xs italic text-muted-foreground/70">
                Order #{Math.floor(100000 + Math.random() * 900000)} · Tracking
                number will not be provided.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Actually schedule a real call →
              </a>
              <button
                type="button"
                onClick={() => {
                  clearCart();
                  closeCheckout();
                }}
                className="inline-flex items-center justify-center border border-border text-foreground hover:bg-muted font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Keep shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
