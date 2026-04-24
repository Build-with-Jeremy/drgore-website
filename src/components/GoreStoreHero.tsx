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
            <div className="flex items-center gap-2 mb-6">
              <span className="relative inline-flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-400">
                ON AIR · Live Now
              </span>
            </div>

            <p className="font-display italic text-accent text-base md:text-lg mb-3">
              As Seen On Late-Night Therapy
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
              The Gore Store.
            </h1>
            <p className="text-base md:text-lg text-background/80 leading-relaxed max-w-xl mb-4">
              Premium therapeutic products that are{' '}
              <span className="font-semibold text-background">
                definitely, absolutely, 100% real.
              </span>{' '}
              <span className="italic text-background/60">
                (They're not. Not even a little.)
              </span>
            </p>
            <p className="text-sm text-background/60 italic mb-8">
              Operators are standing by. Results may vary. Side effects include clarity.
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
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.37 1.8.74 2.64a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.44-1.44a2 2 0 0 1 2.11-.45c.84.37 1.73.62 2.64.74A2 2 0 0 1 22 16.92z" />
                </svg>
                Call 1-800-NOT-REAL
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-widest text-background/50">
              <span>Free shipping*</span>
              <span>No refunds</span>
              <span>Act fast</span>
            </div>
            <p className="text-[0.65rem] text-background/40 mt-2">
              *Free shipping does not exist. Neither does this store, technically.
            </p>
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
