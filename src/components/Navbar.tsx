import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/quoteForm';

const NAV_LINKS = [
  { label: 'Bestsellers', target: 'bestsellers' },
  { label: 'Occasions', target: 'occasions' },
  { label: 'Reviews', target: 'reviews' },
  { label: 'Branches', target: 'branches' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (target: string) => {
    setMobileOpen(false);
    scrollToSection(target);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#FFF7ED]/95 backdrop-blur-md border-b border-[#2B1A12]/10'
          : 'bg-[#FFF7ED]/90 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Lockup */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C68B3C] rounded-md"
        >
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#2B1A12] text-[#D4A853] font-serif text-base font-semibold tracking-tight border border-[#D4A853]/40"
          >
            jb
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-[#2B1A12]">
            Jaipur Bakers
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2B1A12]/80"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.target);
              }}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#2B1A12] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-[#C68B3C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C68B3C]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('custom-cake')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#2B1A12] text-[#FFF7ED] text-sm font-medium whitespace-nowrap shrink-0 hover:bg-[#3F271B] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C68B3C]"
          >
            Order a custom cake
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#2B1A12]/15 text-[#2B1A12] hover:bg-[#F5E1D3]/60 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Compact mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#2B1A12]/10 bg-[#FFF7ED] px-5 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.target);
              }}
              className="block py-2.5 text-base font-medium text-[#2B1A12] hover:text-[#8B5A1B] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick('custom-cake')}
            className="w-full mt-2 py-3 px-5 rounded-full bg-[#2B1A12] text-[#FFF7ED] text-sm font-medium text-center hover:bg-[#3F271B] transition-colors cursor-pointer"
          >
            Order a custom cake
          </button>
        </div>
      )}
    </header>
  );
}
