import { FormEvent, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import {
  OccasionOption,
  QuoteFormErrors,
  QuoteFormInput,
  validateQuoteEnquiry,
} from '../utils/quoteForm';

export interface FormPrefillPayload {
  occasion: OccasionOption;
  message: string;
  nonce: number;
}

interface CustomCakeSectionProps {
  prefill: FormPrefillPayload | null;
}

interface SubmittedEnquiry extends QuoteFormInput {
  referenceCode: string;
}

export function CustomCakeSection({ prefill }: CustomCakeSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [occasion, setOccasion] = useState<OccasionOption>('Birthday');
  const [dateNeeded, setDateNeeded] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [submitted, setSubmitted] = useState<SubmittedEnquiry | null>(null);

  useEffect(() => {
    if (!prefill) return;
    setOccasion(prefill.occasion);
    setMessage(prefill.message);
    setSubmitted(null);
    setErrors({});
    const timer = window.setTimeout(() => {
      const nameInput = document.getElementById('quote-name');
      nameInput?.focus({ preventScroll: true });
    }, 350);
    return () => window.clearTimeout(timer);
  }, [prefill]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload: QuoteFormInput = {
      name,
      phone,
      occasion,
      dateNeeded,
      message,
    };

    const result = validateQuoteEnquiry(payload);
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmitted({
      ...payload,
      name: name.trim(),
      phone: result.normalizedPhone,
      message: message.trim(),
      referenceCode: `JB-${result.normalizedPhone.slice(-4)}`,
    });
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setOccasion('Birthday');
    setDateNeeded('');
    setMessage('');
    setErrors({});
    setSubmitted(null);
  };

  return (
    <section
      id="custom-cake"
      className="bg-[#FFF7ED] py-12 sm:py-14 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-sm font-medium text-[#8B5A1B] tracking-wide">
              Custom Orders
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[#2B1A12] text-balance">
              A cake made for your day.
            </h2>
            <p className="text-base sm:text-lg text-[#2B1A12]/80 leading-relaxed">
              Weddings, birthdays, big celebrations — tell us what you want and we&apos;ll bake it.
            </p>

            <div className="pt-4 border-t border-[#2B1A12]/10 space-y-4 text-sm sm:text-base text-[#2B1A12]/80">
              <div className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-[#8B5A1B] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-[#2B1A12]">Direct callback from our bakery</p>
                  <p className="text-sm text-[#2B1A12]/70">
                    Share your flavour, weight, and date — our team confirms pricing and nearest branch pickup or delivery.
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#8B5A1B] font-medium">
                Prefer to call directly? +91 7710535455
              </p>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-[#FFFBF5] rounded-[1.75rem] border border-[#2B1A12]/12 p-6 sm:p-10 shadow-[0_24px_60px_-28px_rgba(43,26,18,0.16)]">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-4 space-y-6"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D4A853]/25 text-[#2B1A12]">
                    <CheckCircle2 className="w-6 h-6 text-[#8B5A1B]" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-[#8B5A1B]">
                      Enquiry received · Ref {submitted.referenceCode}
                    </p>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2B1A12]">
                      Thank you, {submitted.name}.
                    </h3>
                    <p className="text-base text-[#2B1A12]/80 leading-relaxed">
                      We have your {submitted.occasion.toLowerCase()} cake request for{' '}
                      <span className="font-medium text-[#2B1A12] tabular-nums">
                        {submitted.dateNeeded}
                      </span>{' '}
                      and will call you back on{' '}
                      <span className="font-medium text-[#2B1A12] tabular-nums">
                        +91 {submitted.phone}
                      </span>
                      .
                    </p>
                  </div>

                  {submitted.message && (
                    <div className="rounded-xl bg-[#F5E1D3]/55 border border-[#2B1A12]/10 p-4 text-sm text-[#2B1A12]/80">
                      <span className="font-medium text-[#2B1A12] block mb-1">Your note:</span>
                      {submitted.message}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#2B1A12]/20 text-sm font-medium text-[#2B1A12] hover:bg-[#F5E1D3]/60 transition-colors cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="quote-name"
                        className="block text-sm font-medium text-[#2B1A12] mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        id="quote-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'quote-name-error' : undefined}
                        className={`w-full rounded-xl bg-[#FFF7ED] px-4 py-3 text-base text-[#2B1A12] placeholder:text-[#2B1A12]/40 border transition-colors focus:outline-none focus:ring-2 focus:ring-[#C68B3C]/40 ${
                          errors.name
                            ? 'border-[#9B2C2C]'
                            : 'border-[#2B1A12]/15 focus:border-[#C68B3C]'
                        }`}
                      />
                      {errors.name && (
                        <p id="quote-name-error" className="mt-1.5 text-xs font-medium text-[#9B2C2C]">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block text-sm font-medium text-[#2B1A12] mb-1.5"
                      >
                        Phone
                      </label>
                      <input
                        id="quote-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="10-digit mobile number"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                        }}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'quote-phone-error' : undefined}
                        className={`w-full rounded-xl bg-[#FFF7ED] px-4 py-3 text-base text-[#2B1A12] placeholder:text-[#2B1A12]/40 border transition-colors tabular-nums focus:outline-none focus:ring-2 focus:ring-[#C68B3C]/40 ${
                          errors.phone
                            ? 'border-[#9B2C2C]'
                            : 'border-[#2B1A12]/15 focus:border-[#C68B3C]'
                        }`}
                      />
                      {errors.phone && (
                        <p id="quote-phone-error" className="mt-1.5 text-xs font-medium text-[#9B2C2C]">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="quote-occasion"
                        className="block text-sm font-medium text-[#2B1A12] mb-1.5"
                      >
                        Occasion
                      </label>
                      <select
                        id="quote-occasion"
                        name="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value as OccasionOption)}
                        className="w-full rounded-xl bg-[#FFF7ED] px-4 py-3 text-base text-[#2B1A12] border border-[#2B1A12]/15 focus:border-[#C68B3C] focus:outline-none focus:ring-2 focus:ring-[#C68B3C]/40 transition-colors"
                      >
                        <option value="Birthday">Birthday</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="quote-date"
                        className="block text-sm font-medium text-[#2B1A12] mb-1.5"
                      >
                        Date needed
                      </label>
                      <input
                        id="quote-date"
                        name="dateNeeded"
                        type="date"
                        value={dateNeeded}
                        onChange={(e) => {
                          setDateNeeded(e.target.value);
                          if (errors.dateNeeded) {
                            setErrors((prev) => ({ ...prev, dateNeeded: undefined }));
                          }
                        }}
                        aria-invalid={Boolean(errors.dateNeeded)}
                        aria-describedby={errors.dateNeeded ? 'quote-date-error' : undefined}
                        className={`w-full rounded-xl bg-[#FFF7ED] px-4 py-3 text-base text-[#2B1A12] border transition-colors tabular-nums focus:outline-none focus:ring-2 focus:ring-[#C68B3C]/40 ${
                          errors.dateNeeded
                            ? 'border-[#9B2C2C]'
                            : 'border-[#2B1A12]/15 focus:border-[#C68B3C]'
                        }`}
                      />
                      {errors.dateNeeded && (
                        <p id="quote-date-error" className="mt-1.5 text-xs font-medium text-[#9B2C2C]">
                          {errors.dateNeeded}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-message"
                      className="block text-sm font-medium text-[#2B1A12] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="quote-message"
                      name="message"
                      rows={3}
                      placeholder="Flavour, approximate weight (e.g. 2 Pound), theme or text on the cake..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-xl bg-[#FFF7ED] px-4 py-3 text-base text-[#2B1A12] placeholder:text-[#2B1A12]/40 border border-[#2B1A12]/15 focus:border-[#C68B3C] focus:outline-none focus:ring-2 focus:ring-[#C68B3C]/40 transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-full bg-[#2B1A12] text-[#FFF7ED] text-base font-medium hover:bg-[#3E271C] shadow-[0_12px_28px_-10px_rgba(43,26,18,0.45)] transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C68B3C]"
                    >
                      Get my cake quote
                    </button>
                    <p className="text-center text-sm text-[#2B1A12]/70">
                      No account needed — we call you back.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
