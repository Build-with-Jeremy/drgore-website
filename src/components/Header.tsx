import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Biography', path: '/biography' },
  { label: 'About My Practice', path: '/about' },
  { label: 'FAQ', path: '/faqs' },
  { label: 'Links', path: '/links' },
  { label: 'Blog', path: '/blog' },
  { label: 'Store', path: '/store' },
  { label: 'Contact', path: '/contact' },
];

interface HeaderProps {
  currentPath: string;
}

export default function Header({ currentPath }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container flex h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-3 relative">
          <img
            src="/assets/logo.png"
            alt="Dr. Gore Therapy - Atlanta Family Therapist"
            className="h-28 w-auto absolute -top-4 left-0 drop-shadow-lg"
          />
          <div className="leading-tight ml-32">
            <span className="font-display text-lg sm:text-2xl font-bold text-foreground">
              Dr. David Karol Gore
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted hover:text-foreground ${
                currentPath === link.path
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="ml-2 px-4 py-2 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm transition-colors"
          >
            Schedule a Consultation
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-3 text-sm font-medium rounded-md transition-colors hover:bg-muted ${
                currentPath === link.path
                  ? 'text-primary font-semibold bg-muted'
                  : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block w-full text-center px-4 py-2 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm transition-colors"
          >
            Schedule a Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
