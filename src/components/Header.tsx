import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavChild {
  label: string;
  path: string;
}

interface NavLink {
  label: string;
  path: string;
  children?: NavChild[];
}

const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About My Practice', path: '/about' },
      { label: 'Biography', path: '/biography' },
    ],
  },
  {
    label: 'Resources',
    path: '/resources',
    children: [
      { label: 'FAQs', path: '/faqs' },
      { label: 'Articles', path: '/articles' },
      { label: 'Links', path: '/links' },
      { label: 'Blog', path: '/blog' },
      { label: 'Videos', path: '/videos' },
    ],
  },
  { label: 'Store', path: '/store' },
  { label: 'Contact', path: '/contact' },
];

interface HeaderProps {
  currentPath: string;
}

function isActive(link: NavLink, currentPath: string): boolean {
  if (link.path === '/') return currentPath === '/';
  if (currentPath === link.path || currentPath.startsWith(link.path + '/')) return true;
  return link.children?.some((child) => currentPath === child.path) ?? false;
}

export default function Header({ currentPath }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
            <div key={link.path} className="relative group">
              <a
                href={link.path}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted hover:text-foreground ${
                  isActive(link, currentPath)
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground'
                }`}
              >
                {link.label}
                {link.children && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                )}
              </a>
              {link.children && (
                <div className="absolute top-full left-0 mt-1 hidden group-hover:block min-w-[200px] rounded-lg border bg-background shadow-lg py-1 z-50">
                  {link.children.map((child) => (
                    <a
                      key={child.path}
                      href={child.path}
                      className={`block px-4 py-2.5 text-sm hover:bg-muted transition-colors ${
                        currentPath === child.path
                          ? 'text-primary font-semibold'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
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
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.path}>
                <div className="flex items-center">
                  <a
                    href={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex-1 px-3 py-3 text-sm font-medium rounded-md transition-colors hover:bg-muted ${
                      isActive(link, currentPath)
                        ? 'text-primary font-semibold'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                  </a>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.path ? null : link.path)
                    }
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Toggle ${link.label} submenu`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openDropdown === link.path ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
                {openDropdown === link.path && (
                  <div className="ml-4 border-l border-border pl-3 py-1 mb-1">
                    {link.children.map((child) => (
                      <a
                        key={child.path}
                        href={child.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-2.5 text-sm rounded-md transition-colors hover:bg-muted ${
                          currentPath === child.path
                            ? 'text-primary font-semibold'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-3 text-sm font-medium rounded-md transition-colors hover:bg-muted ${
                  isActive(link, currentPath)
                    ? 'text-primary font-semibold bg-muted'
                    : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </a>
            )
          )}
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
