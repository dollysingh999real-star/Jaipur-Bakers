export type OccasionOption = 'Birthday' | 'Wedding' | 'Other';

export interface QuoteFormInput {
  name: string;
  phone: string;
  occasion: OccasionOption;
  dateNeeded: string;
  message: string;
}

export interface QuoteFormErrors {
  name?: string;
  phone?: string;
  dateNeeded?: string;
  message?: string;
}

export interface QuoteValidationResult {
  valid: boolean;
  errors: QuoteFormErrors;
  normalizedPhone: string;
}

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function normalizeIndianPhone(rawPhone: string): string {
  const digits = rawPhone.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return digits.slice(1);
  }
  return digits;
}

export function validateQuoteEnquiry(input: QuoteFormInput): QuoteValidationResult {
  const errors: QuoteFormErrors = {};
  const trimmedName = input.name.trim();
  const normalizedPhone = normalizeIndianPhone(input.phone);

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your name.';
  }

  if (normalizedPhone.length !== 10 || !/^[6-9]\d{9}$/.test(normalizedPhone)) {
    errors.phone = 'Please enter a valid 10-digit mobile number.';
  }

  if (!input.dateNeeded.trim()) {
    errors.dateNeeded = 'Please choose the date you need the cake.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    normalizedPhone,
  };
}

export function buildOrderPrefill(
  cakeName: string,
  weight: string,
  price: number,
): { occasion: OccasionOption; message: string } {
  return {
    occasion: 'Birthday',
    message: `I would like to order the ${cakeName} (${weight}, ${formatINR(price)}). Please call me to confirm flavour and delivery details.`,
  };
}

export function scrollToSection(sectionId: string): void {
  if (typeof document === 'undefined') {
    return;
  }
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
