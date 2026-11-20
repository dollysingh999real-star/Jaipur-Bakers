import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildOrderPrefill,
  formatINR,
  normalizeIndianPhone,
  validateQuoteEnquiry,
} from './quoteForm';

test('formatINR formats Indian rupee amounts cleanly', () => {
  assert.equal(formatINR(350), '₹350');
  assert.equal(formatINR(800), '₹800');
  assert.equal(formatINR(1300), '₹1,300');
});

test('normalizeIndianPhone handles +91, 0 prefix, and spaces', () => {
  assert.equal(normalizeIndianPhone('+91 77105 35455'), '7710535455');
  assert.equal(normalizeIndianPhone('09829012345'), '9829012345');
  assert.equal(normalizeIndianPhone('98290-12345'), '9829012345');
});

test('validateQuoteEnquiry catches empty required fields without silent fallbacks', () => {
  const result = validateQuoteEnquiry({
    name: '',
    phone: '',
    occasion: 'Birthday',
    dateNeeded: '',
    message: '',
  });
  assert.equal(result.valid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.dateNeeded);
});

test('validateQuoteEnquiry passes with valid Indian phone, name, and date', () => {
  const result = validateQuoteEnquiry({
    name: 'Rahul Sharma',
    phone: '+91 98290 12345',
    occasion: 'Wedding',
    dateNeeded: '2026-12-10',
    message: 'Three-tier vanilla floral cake',
  });
  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});
  assert.equal(result.normalizedPhone, '9829012345');
});

test('buildOrderPrefill generates an accurate message with exact cake weight and price', () => {
  const prefill = buildOrderPrefill('Hazelnut Mousse Cake', '2 Pound', 1300);
  assert.equal(prefill.occasion, 'Birthday');
  assert.match(prefill.message, /Hazelnut Mousse Cake/);
  assert.match(prefill.message, /2 Pound/);
  assert.match(prefill.message, /₹1,300/);
});
