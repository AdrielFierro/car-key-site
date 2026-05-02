/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: "Fierro's Keys",
  email: 'hello@fierroskeys.example',
  phoneForTel: '1154285092',
  phoneFormatted: '(11) 5428-5092',
  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: '',
  address: {
    lineOne: 'Los indios 2000',
    lineTwo: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    mapLink: '',
  },
  socials: {
    facebook: '',
    instagram: '',
    google: '',
  },
  domain: '',
} as const;

export type Client = typeof client;
