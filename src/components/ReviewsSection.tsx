import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { JUSTDIAL_RATING, REVIEWS } from '../data/bakeryData';

export function ReviewsSection() {
  const smitaReview = REVIEWS[0];

  return (
    <section
      id="reviews"
      className="bg-[#F5E1D3] pt-12 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-20 border-y border-[#2B1A12]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Rating Proof Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-4"
          >
            <p className="text-sm font-medium text-[#8B5A1B] tracking-wide">
              Community Trust
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[#2B1A12] text-balance">
              Jaipur loves us.
            </h2>

            <div className="pt-4">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-6xl sm:text-7xl font-bold text-[#2B1A12] tabular-nums tracking-tight">
                  4.4
                </span>
                <Star
                  className="w-10 h-10 sm:w-11 sm:h-11 fill-[#D4A853] text-[#8B5A1B] translate-y-[-4px]"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 text-base font-medium text-[#2B1A12]/80 tabular-nums">
                1,800+ Google reviews
              </p>
            </div>
          </motion.div>

          {/* Smita Yadav Testimonial + JustDial Ratings Card */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: 0,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between bg-[#FFF7ED] rounded-2xl border border-[#2B1A12]/10 p-7 sm:p-8 shadow-[0_16px_38px_-22px_rgba(43,26,18,0.16)]"
            >
              <div>
                <div className="flex items-center gap-1 mb-5" aria-label="Rated 5 stars">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-4 h-4 fill-[#D4A853] text-[#8B5A1B]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="font-serif text-xl sm:text-2xl leading-snug text-[#2B1A12]">
                  &ldquo;{smitaReview.quote}&rdquo;
                </p>
              </div>

              <footer className="mt-7 pt-4 border-t border-[#2B1A12]/10">
                <p className="text-base font-semibold text-[#2B1A12]">
                  {smitaReview.author}
                </p>
                <p className="text-sm text-[#8B5A1B]">{smitaReview.context}</p>
              </footer>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between bg-[#FFF7ED] rounded-2xl border border-[#2B1A12]/10 p-7 sm:p-8 shadow-[0_16px_38px_-22px_rgba(43,26,18,0.16)]"
            >
              <div>
                <div className="flex items-center gap-1 mb-5" aria-label="Rated 4.3 out of 5 stars on JustDial">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className={`w-4 h-4 ${
                        starIdx < 4
                          ? 'fill-[#D4A853] text-[#8B5A1B]'
                          : 'fill-[#D4A853]/45 text-[#8B5A1B]'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-[#2B1A12] tabular-nums tracking-tight">
                  {JUSTDIAL_RATING.score} on {JUSTDIAL_RATING.platform}
                </p>
                <p className="mt-3 text-lg font-medium text-[#2B1A12]/80 tabular-nums">
                  {JUSTDIAL_RATING.countLabel}
                </p>
              </div>

              <div className="mt-7 pt-4 border-t border-[#2B1A12]/10">
                <p className="text-base font-semibold text-[#2B1A12]">
                  {JUSTDIAL_RATING.summary}
                </p>
                <p className="text-sm text-[#8B5A1B]">Verified Customer Ratings</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
