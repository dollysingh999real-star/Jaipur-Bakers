import { BAKERY_CONTACT } from '../data/bakeryData';

export function Footer() {
  return (
    <footer className="bg-[#2B1A12] text-[#FFF7ED] border-t border-[#D4A853]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FFF7ED]/12">
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FFF7ED]/10 text-[#D4A853] font-serif text-lg font-semibold border border-[#D4A853]/40"
              >
                {BAKERY_CONTACT.mark}
              </span>
              <span className="font-serif text-2xl font-semibold text-[#FFF7ED]">
                {BAKERY_CONTACT.brand}
              </span>
            </div>
            <p className="text-base text-[#FFF7ED]/75 max-w-sm leading-relaxed">
              {BAKERY_CONTACT.tagline}
            </p>
            <p className="text-sm font-medium text-[#D4A853]">
              {BAKERY_CONTACT.hours}
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="font-serif text-base font-semibold text-[#FFF7ED]">
              Direct Contact
            </h3>
            <ul className="space-y-2 text-sm text-[#FFF7ED]/80">
              <li>
                <a
                  href={`mailto:${BAKERY_CONTACT.email}`}
                  className="hover:text-[#D4A853] transition-colors"
                >
                  {BAKERY_CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href="tel:+917710535455"
                  className="hover:text-[#D4A853] transition-colors tabular-nums"
                >
                  {BAKERY_CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="font-serif text-base font-semibold text-[#FFF7ED]">
              Jhotwara Flagship
            </h3>
            <p className="text-sm text-[#FFF7ED]/80 leading-relaxed">
              {BAKERY_CONTACT.flagshipAddress}
            </p>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FFF7ED]/60">
          <p>© {new Date().getFullYear()} {BAKERY_CONTACT.brand}. Freshly baked in Jaipur.</p>
          <p>11 outlets across Jaipur · Rated 4.4★ on Google</p>
        </div>
      </div>
    </footer>
  );
}
