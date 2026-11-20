import { motion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';
import { BRANCHES } from '../data/bakeryData';

export function BranchesSection() {
  const flagship = BRANCHES.find((b) => b.isFlagship);
  const neighbourhoodBranches = BRANCHES.filter((b) => !b.isFlagship);

  return (
    <section id="branches" className="bg-[#FFF7ED] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-sm font-medium text-[#8B5A1B] tracking-wide mb-2">
              Across The Pink City
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[#2B1A12] text-balance">
              Find us near you.
            </h2>
          </div>
          <p className="text-base font-medium text-[#2B1A12]/75">
            11 outlets across Jaipur — order from your nearest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Flagship Jhotwara Outlet Card */}
          {flagship && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 bg-[#2B1A12] text-[#FFF7ED] rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-[#D4A853]/30"
            >
              <div>
                <span className="inline-block text-xs font-semibold tracking-wide text-[#D4A853] mb-3">
                  Flagship Outlet
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FFF7ED]">
                  {flagship.name}
                </h3>
                <p className="mt-3 text-base text-[#FFF7ED]/80 leading-relaxed">
                  {flagship.address}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#FFF7ED]/15 flex items-center gap-2 text-sm text-[#D4A853]">
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Open every day till 11:30 pm</span>
              </div>
            </motion.div>
          )}

          {/* Remaining 10 Jaipur Outlets Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {neighbourhoodBranches.map((branch, index) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#FFFBF5] rounded-2xl border border-[#2B1A12]/10 p-5 sm:p-6 flex flex-col justify-between gap-4 hover:border-[#C68B3C]/50 hover:bg-[#F5E1D3]/35 transition-colors duration-200"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#8B5A1B] shrink-0" aria-hidden="true" />
                    <h3 className="font-serif text-lg font-semibold text-[#2B1A12] leading-snug">
                      {branch.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[#2B1A12]/75 leading-relaxed">
                    {branch.address}
                  </p>
                </div>

                {branch.phone && (
                  <div className="pt-3 border-t border-[#2B1A12]/10">
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                      aria-label={`Call ${branch.name} outlet at ${branch.phone}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#8B5A1B] hover:text-[#2B1A12] transition-colors tabular-nums"
                    >
                      <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{branch.phone}</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
