import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { OCCASIONS, OccasionKey } from '../data/bakeryData';
import { OccasionOption } from '../utils/quoteForm';
import { CakeImage } from './CakeImage';

interface OccasionsSectionProps {
  onSelectOccasionForQuote: (occasion: OccasionOption, label: string) => void;
}

export function OccasionsSection({ onSelectOccasionForQuote }: OccasionsSectionProps) {
  const [activeKey, setActiveKey] = useState<OccasionKey>('birthday');
  const current = OCCASIONS.find((item) => item.key === activeKey) ?? OCCASIONS[0];

  return (
    <section
      id="occasions"
      className="bg-[#F5E1D3] pt-20 sm:pt-24 lg:pt-24 pb-12 sm:pb-14 lg:pb-16 border-y border-[#2B1A12]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header + Interactive Segmented Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-14"
        >
          <div>
            <p className="text-sm font-medium text-[#8B5A1B] tracking-wide mb-2">
              Bespoke Patisserie
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[#2B1A12] text-balance">
              Made for your moments.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Cake occasions"
            className="inline-flex items-center p-1.5 rounded-full bg-[#FFF7ED] border border-[#2B1A12]/10 self-start lg:self-auto"
          >
            {OCCASIONS.map((tab) => {
              const isSelected = tab.key === activeKey;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  id={`tab-${tab.key}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${tab.key}`}
                  onClick={() => setActiveKey(tab.key)}
                  className={`relative px-5 sm:px-6 py-2.5 rounded-full text-sm sm:text-base font-medium whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C68B3C] ${
                    isSelected
                      ? 'text-[#FFF7ED]'
                      : 'text-[#2B1A12]/75 hover:text-[#2B1A12]'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="occasion-tab-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-[#2B1A12] shadow-sm"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Interactive Showcase Panel */}
        <div
          role="tabpanel"
          id={`panel-${current.key}`}
          aria-labelledby={`tab-${current.key}`}
          className="bg-[#FFF7ED] rounded-[2rem] border border-[#2B1A12]/10 p-5 sm:p-8 lg:p-10 shadow-[0_24px_60px_-25px_rgba(43,26,18,0.14)]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <div className="lg:col-span-7 overflow-hidden rounded-[1.35rem] bg-[#F5E1D3] aspect-[4/3]">
                <CakeImage
                  src={current.image}
                  alt={current.imageAlt}
                  fallbackLabel={`${current.label} Cake`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-5 space-y-6 lg:pr-4">
                <p className="text-sm font-medium text-[#8B5A1B] tracking-wide">
                  {current.label} Cakes
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] font-semibold text-[#2B1A12] text-balance">
                  {current.headline}
                </h3>
                <p className="text-base sm:text-lg text-[#2B1A12]/80 leading-relaxed">
                  {current.description}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      onSelectOccasionForQuote(current.formOccasion, current.label)
                    }
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#2B1A12] text-[#FFF7ED] text-sm sm:text-base font-medium whitespace-nowrap shrink-0 hover:bg-[#8B5A1B] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C68B3C]"
                  >
                    <span>Plan your {current.label.toLowerCase()} cake</span>
                    <ArrowRight className="w-4 h-4 text-[#D4A853]" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
