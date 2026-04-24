import { openDrawer } from '../stores/cartStore';

const collage = [
  { src: '/assets/store/anti-whining.jpg', rotate: -6, top: '4%', left: '2%' },
  { src: '/assets/store/ex-boyfriend-lotion.jpg', rotate: 5, top: '6%', left: '38%' },
  { src: '/assets/store/adult-child-fumigator.jpg', rotate: -3, top: '10%', left: '70%' },
  { src: '/assets/store/serenity-gel.jpg', rotate: 4, top: '48%', left: '8%' },
  { src: '/assets/store/breathspray.jpg', rotate: -5, top: '52%', left: '42%' },
  { src: '/assets/store/bambian.jpg', rotate: 7, top: '55%', left: '72%' },
];

export default function GoreStoreHero() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      {/* Faux "broadcast" texture stripes */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 4px)',
        }}
      />

      <div className="relative container max-w-6xl py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
              The Gore Store.
            </h1>
            <p className="text-base md:text-lg text-background/80 leading-relaxed max-w-xl mb-8">
              Dr. Gore's collection of premium therapeutic products. Browse by category and add to cart.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#gore-store-grid"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-7 py-3.5 rounded-md transition-colors text-sm uppercase tracking-wider"
              >
                Shop Now
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <button
                type="button"
                onClick={openDrawer}
                className="inline-flex items-center gap-2 border border-background/30 text-background hover:bg-background/10 font-semibold px-5 py-3 rounded-md transition-colors text-sm"
              >
                View cart
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-widest text-background/50">
              <span>Free shipping</span>
              <span>No refunds</span>
              <span>Act fast</span>
            </div>
          </div>

          {/* Right: polaroid collage */}
          <div className="relative h-[320px] md:h-[440px] hidden md:block" aria-hidden="true">
            {collage.map((p, i) => (
              <div
                key={p.src}
                className="absolute w-[42%] aspect-[4/5] bg-background p-2 pb-6 shadow-2xl"
                style={{
                  top: p.top,
                  left: p.left,
                  transform: `rotate(${p.rotate}deg)`,
                  zIndex: i,
                }}
              >
                <img
                  src={p.src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
