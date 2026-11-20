import { useState } from 'react';
import { CakeSlice } from 'lucide-react';

interface CakeImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackLabel?: string;
}

export function CakeImage({
  src,
  alt,
  className = '',
  loading = 'eager',
  fallbackLabel = 'Jaipur Bakers',
}: CakeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F5E1D3] via-[#FFF7ED] to-[#E8CEB8] text-[#2B1A12]/70 p-6 text-center ${className}`}
      >
        <CakeSlice className="w-10 h-10 text-[#C68B3C] mb-2" strokeWidth={1.5} />
        <span className="font-serif text-sm font-medium">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
