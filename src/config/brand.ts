/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Single file to edit when adapting the theme for a new client.
 *
 * Colors flow into  → src/styles/theme.css  (CSS custom properties)
 * Fonts flow into   → astro.config.mjs      (Astro 6 built-in font optimizer)
 * Meta flows into   → src/layouts/BaseLayout.astro
 *
 * Color format: use hex (#1a1a2e) or CSS color values.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: 'Small Business Starter',
  tagline: 'Professional service you can trust.',
  description:
    'A fast, mobile-first small-business website template built with Astro 6 and Tailwind v4. Fully customisable for any trade or service business.',
  url: 'https://example.com',
  locale: 'en_US',

  // ── Fonts ──────────────────────────────────────────────────────────────────
  // To swap fonts: change the `name` values here AND update astro.config.mjs
  // to match (both must stay in sync so Astro can optimise the correct files).
  fonts: {
    body: 'Inter',
    display: 'Oswald',
  },

  // ── Colour Palette ─────────────────────────────────────────────────────────
  // These values are written to CSS custom properties in theme.css.
  // Tailwind v4 @theme picks them up automatically.
  colors: {
    // Dark theme palette
    primary:      '#0ea5a4', // teal - used for buttons and highlights
    primaryLight: '#34d8d3',
    primaryFg:    '#021015',

    accent:       '#06b6d4', // cyan accent for CTAs
    accentFg:     '#021015',

    background:   '#0b1220', // main page background
    surface:      '#0f1724', // cards and surfaces
    border:       '#1f2a37',

    text:         '#e6eef6', // primary text on dark bg
    textMuted:    '#a8b4bf',

    dark:         '#071018',
    darkSurface:  '#0b1520',
  },

  // ── Border radius ──────────────────────────────────────────────────────────
  radius: {
    sm:   '0.375rem',
    md:   '0.625rem',
    lg:   '1rem',
    full: '9999px',
  },
} as const;

export type Brand = typeof brand;
