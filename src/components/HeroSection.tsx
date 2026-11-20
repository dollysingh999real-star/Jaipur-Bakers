import { motion } from 'motion/react';
import { ArrowDown, MapPin, Star, Sunrise } from 'lucide-react';
import { HERO_ASSETS } from '../data/bakeryData';
import { scrollToSection } from '../utils/quoteForm';
import { CakeImage } from './CakeImage';

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#FFF7ED] pt-8 pb-14 sm:pt-10 sm:pb-16 lg:min-h-[calc(100svh-7.5rem)] lg:flex lg:items-center"
    >
      {/* Subtle warm radial ambient tint behind the hero composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[560px] h-[560px] rounded-full bg-[#F5E1D3]/70 blur-3xl opacity-80"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base font-medium text-[#8B5A1B] tracking-wide"
            >
              A name Jaipur has trusted for cakes and bakes for years
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(2.75rem,5.4vw,4.75rem)] leading-[1.03] tracking-[-0.02em] font-semibold text-[#2B1A12] text-balance"
            >
              Cakes Jaipur celebrates with.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-[#2B1A12]/80 max-w-xl leading-relaxed"
            >
              Freshly baked every morning <span className="mx-1 text-[#8B5A1B]">·</span> 11 outlets across Jaipur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <button
                type="button"
                onClick={() => scrollToSection('bestsellers')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2B1A12] text-[#FFF7ED] text-base font-medium whitespace-nowrap shrink-0 shadow-[0_10px_28px_-8px_rgba(43,26,18,0.4)] hover:bg-[#3E271C] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C68B3C]"
              >
                <span>See the menu</span>
                <ArrowDown className="w-4 h-4 text-[#D4A853]" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('custom-cake')}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#2B1A12]/25 bg-transparent text-[#2B1A12] text-base font-medium whitespace-nowrap shrink-0 hover:bg-[#F5E1D3]/70 hover:border-[#2B1A12]/40 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C68B3C]"
              >
                Order a custom cake
              </button>
            </motion.div>
          </div>

          {/* Hero Cake Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center items-center py-4 sm:py-8"
          >
            <div className="relative w-full max-w-[490px] mx-auto">
              {/* Soft warm pedestal shadow beneath floating cake */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -bottom-5 left-1/2 -translate-x-1/2 w-4/5 h-10 rounded-full bg-[#2B1A12]/15 blur-xl"
              />

              {/* Floating hero cake frame */}
              <div className="animate-jb-float relative rounded-[2rem] overflow-hidden border border-[#C68B3C]/25 bg-[#F5E1D3] shadow-[0_28px_60px_-20px_rgba(43,26,18,0.28)]">
                <CakeImage
                  src={HERO_ASSETS.image}
                  alt={HERO_ASSETS.imageAlt}
                  className="w-full aspect-square object-cover"
                  fallbackLabel="Signature Chocolate Hazelnut Cake"
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5 sm:block sm:mt-0">
                {/* Floating Badge 1: Google Rating */}
                <motion.div
                  initial={{ opacity: 0, x: -16, y: 8 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="sm:absolute sm:-top-4 sm:-left-6 bg-[#FFF7ED]/95 backdrop-blur-md border border-[#C68B3C]/30 rounded-2xl px-4 py-2.5 sm:py-3 shadow-[0_14px_30px_-10px_rgba(43,26,18,0.18)] inline-flex items-center gap-2.5"
                >
                  <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D4A853]/25 text-[#8B5A1B]">
                    <Star className="w-4 h-4 fill-[#D4A853] text-[#8B5A1B]" aria-hidden="true" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#2B1A12] tabular-nums whitespace-nowrap">
                    4.4★ · 1,800+ Google reviews
                  </span>
                </motion.div>

                {/* Floating Badge 2: Baked fresh daily */}
                <motion.div
                  initial={{ opacity: 0, x: 16, y: -8 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                  className="sm:absolute sm:top-1/4 sm:-right-7 bg-[#2B1A12] text-[#FFF7ED] border border-[#D4A853]/35 rounded-2xl px-4 py-2.5 shadow-[0_14px_30px_-10px_rgba(43,26,18,0.3)] inline-flex items-center gap-2"
                >
                  <Sunrise className="w-4 h-4 text-[#D4A853]" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Baked fresh daily</span>
                </motion.div>

                {/* Floating Badge 3: 11 outlets */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
                  className="sm:absolute sm:-bottom-4 sm:right-6 bg-[#FFF7ED]/95 backdrop-blur-md border border-[#C68B3C]/30 rounded-2xl px-4 py-2.5 shadow-[0_14px_30px_-10px_rgba(43,26,18,0.18)] inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#8B5A1B]" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-medium text-[#2B1A12] whitespace-nowrap">
                    11 outlets
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
