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
  name: "Fierro's key's",
  tagline: 'Cerrajería automotor — normal y urgencias.',
  description:
    'Cerrajería automotor en Zona Oeste (Castelar y alrededores). Apertura de autos, llaves codificadas y programación. Urgencias hasta las 19:00.',
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
    // Dark metallic palette (matched to the hero logo)
    // Neutrals: gunmetal / graphite
    // Accents: copper / ember
    primary:      '#c8733d', // copper highlight (buttons/links)
    primaryLight: '#e2a37a',
    primaryFg:    '#0b0f14',

  accent:       '#8e9aa8', // steel accent (pills, secondary highlights)
  accentFg:     '#0b0f14',

    background:   '#070a0e', // near-black with a hint of blue
    surface:      '#0c1117', // graphite surface
    border:       '#1a232e',

    text:         '#e7ecef', // cool off-white
    textMuted:    '#aab3bd',

    dark:         '#05070a',
    darkSurface:  '#0a0f14',
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
