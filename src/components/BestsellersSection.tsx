import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { BESTSELLER_CAKES, CakeItem } from '../data/bakeryData';
import { formatINR } from '../utils/quoteForm';
import { CakeImage } from './CakeImage';

interface BestsellersSectionProps {
  onOrderCake: (cake: CakeItem) => void;
}

export function BestsellersSection({ onOrderCake }: BestsellersSectionProps) {
  return (
    <section
      id="bestsellers"
      className="bg-[#FFF7ED] py-20 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-14"
        >
          <div>
            <p className="text-sm font-medium text-[#8B5A1B] tracking-wide mb-2">
              Signature Bestsellers
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[#2B1A12] text-balance">
              Most loved this week.
            </h2>
          </div>
          <p className="text-base text-[#2B1A12]/75 max-w-sm">
            Hand-frosted every morning across Jaipur with real dairy cream and roasted nuts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {BESTSELLER_CAKES.map((cake, index) => (
            <motion.article
              key={cake.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col bg-[#FFFBF5] rounded-2xl border border-[#2B1A12]/10 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-18px_rgba(43,26,18,0.22)]"
            >
              {/* Gold highlight badge strictly on Hazelnut Mousse */}
              {cake.featuredBadge && (
                <div className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full bg-[#D4A853] text-[#2B1A12] text-xs font-semibold tracking-wide shadow-sm">
                  {cake.featuredBadge}
                </div>
              )}

              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5E1D3]">
                <CakeImage
                  src={cake.image}
                  alt={cake.imageAlt}
                  fallbackLabel={cake.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 justify-between p-5 sm:p-6">
                <div>
                  <p className="text-xs font-medium text-[#8B5A1B] tracking-wide mb-1.5">
                    {cake.weight}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-[#2B1A12] leading-snug">
                    {cake.name}
                  </h3>
                  <p className="text-sm text-[#2B1A12]/70 mt-2 leading-relaxed">
                    {cake.note}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2B1A12]/10 flex items-center justify-between gap-3">
                  <span className="font-serif text-2xl sm:text-[1.75rem] font-bold text-[#2B1A12] tabular-nums tracking-tight">
                    {formatINR(cake.price)}
                  </span>

                  <button
                    type="button"
                    aria-label={`Order ${cake.name}`}
                    onClick={() => onOrderCake(cake)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2B1A12] text-[#FFF7ED] text-sm font-medium whitespace-nowrap shrink-0 hover:bg-[#8B5A1B] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C68B3C]"
                  >
                    <span>Order</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center text-sm sm:text-base font-medium text-[#2B1A12]/75"
        >
          Pastries from ₹80 <span className="mx-1.5 text-[#8B5A1B]">·</span> 150+ cakes, bakes &amp; more.
        </motion.p>
      </div>
    </section>
  );
}
