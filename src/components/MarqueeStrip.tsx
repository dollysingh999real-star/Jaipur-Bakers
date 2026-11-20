import { MARQUEE_ITEMS } from '../data/bakeryData';

function MarqueeSequence() {
  return (
    <div className="flex items-center shrink-0">
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="inline-flex items-center">
          <span className="font-serif italic text-lg sm:text-xl tracking-wide text-[#FFF7ED] px-5 sm:px-7 whitespace-nowrap">
            {item}
          </span>
          <span
            aria-hidden="true"
            className="text-[#D4A853] text-sm select-none"
          >
            •
          </span>
        </span>
      ))}
    </div>
  );
}

export function MarqueeStrip() {
  return (
    <div
      aria-label="Signature offerings"
      className="w-full overflow-hidden bg-[#2B1A12] text-[#FFF7ED] border-y border-[#D4A853]/25 py-4 select-none"
    >
      <div className="animate-jb-marquee">
        <MarqueeSequence />
        <MarqueeSequence />
        <MarqueeSequence />
        <MarqueeSequence />
      </div>
    </div>
  );
}
