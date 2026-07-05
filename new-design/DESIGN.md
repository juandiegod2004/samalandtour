---
name: Imperial Sovereign
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#3f4940'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#6f7a70'
  outline-variant: '#becabe'
  surface-tint: '#006d3b'
  primary: '#00532c'
  on-primary: '#ffffff'
  primary-container: '#006e3c'
  on-primary-container: '#92edae'
  inverse-primary: '#7fd99c'
  secondary: '#765a00'
  on-secondary: '#ffffff'
  secondary-container: '#ffcb36'
  on-secondary-container: '#705600'
  tertiary: '#4d4831'
  on-tertiary: '#ffffff'
  tertiary-container: '#665f47'
  on-tertiary-container: '#e3dabb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9bf6b7'
  primary-fixed-dim: '#7fd99c'
  on-primary-fixed: '#00210e'
  on-primary-fixed-variant: '#00522b'
  secondary-fixed: '#ffdf95'
  secondary-fixed-dim: '#f2c02a'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#594400'
  tertiary-fixed: '#ece2c4'
  tertiary-fixed-dim: '#cfc6a9'
  on-tertiary-fixed: '#201b09'
  on-tertiary-fixed-variant: '#4c4730'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
  deep-emerald: '#006E3C'
  imperial-gold: '#FFCB36'
  champagne-silk: '#F6ECCD'
  onyx-black: '#000000'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 64px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '300'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  caption:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-gap: 120px
---

## Brand & Style

This design system embodies the "Imperial Sovereign" aesthetic—a high-end, luxury real estate identity that balances heritage with modern precision. It is designed to evoke feelings of exclusivity, permanence, and effortless sophistication.

The design style is **Minimalist with Tactile Accents**. It relies on expansive whitespace and a rigorous grid to communicate authority, while utilizing metallic gold accents and deep emerald tones to signify wealth and botanical lushness. Every element is intentional, avoiding unnecessary decoration in favor of structural clarity and premium material feel. The target audience includes high-net-worth investors and luxury home seekers who value discretion and architectural excellence.

## Colors

The palette is rooted in a "Regal Naturalist" theme. 

- **Primary (Deep Emerald):** Used for primary brand moments, interactive states, and to represent the lush landscapes associated with premium estates.
- **Secondary (Imperial Gold):** Reserved for high-value highlights, call-to-action buttons, and fine-line borders to signal luxury.
- **Tertiary (Champagne Silk):** Used as a sophisticated alternative to pure white for section backgrounds and card containers, adding warmth and a "parchment" quality.
- **Neutral (Onyx Black):** Employed for high-contrast typography and structural borders, ensuring the layout remains grounded and authoritative.

The default mode is Light, utilizing a primarily white and Champagne Silk canvas to maintain a sense of airiness and space.

## Typography

The typography uses **Outfit** exclusively, leveraging its geometric clarity and modern proportions. 

- **Hierarchy through Weight:** Use lighter weights (300) for large display headlines to create an editorial, "fashion-magazine" feel. Medium weights (500-600) are reserved for UI labels and sub-navigation.
- **Leading & Tracking:** Display styles use tighter letter-spacing for a sophisticated look, while labels use generous tracking (0.1em) and uppercase transformation to evoke a sense of architectural labeling.
- **Responsive Scaling:** Headline sizes drop significantly on mobile to maintain readability without excessive wrapping, ensuring the "luxury" feel is not lost to clutter.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to create a sense of contained, intentional composition, transitioning to a fluid model on mobile devices.

- **The Power of the Void:** Large vertical gaps (120px+) between major sections are required to communicate that the brand is not "rushed" and has space to breathe.
- **Desktop:** 12-column grid with an 80px outer margin. Content should ideally be centered with a max-width of 1440px.
- **Mobile:** 4-column grid with 20px margins. 
- **Rhythm:** All spacing (padding, margins) must be increments of the 8px base unit. Consistent use of generous padding within cards (min 32px) is essential to maintain the high-end aesthetic.

## Elevation & Depth

This design system avoids heavy shadows in favor of **Tonal Layers** and **Refined Outlines**.

- **Surface Strategy:** Depth is created by layering "Champagne Silk" surfaces over "White" backgrounds. 
- **Low-Contrast Outlines:** Instead of drop shadows, use 1px solid borders in very light grays or Champagne Silk (#F6ECCD) to define card boundaries.
- **Interactive Elevation:** Only use shadows on hover states for primary buttons or property cards. These shadows should be "Ambient"—extremely diffused (20px-40px blur), low opacity (5-10%), and slightly tinted with the Deep Emerald primary color to feel natural.
- **Glassmorphism:** Use subtle backdrop blurs (10px-15px) on sticky navigation bars to maintain context of the high-resolution property imagery beneath.

## Shapes

The shape language is **Soft** and architectural. 

Corners are slightly rounded (4px to 12px) to prevent the UI from feeling "sharp" or aggressive, but they stop short of being playful. This subtle rounding mimics high-end interior design where edges are "eased."

- **Primary Elements:** Buttons and small input fields use a 4px radius.
- **Secondary Elements:** Large property cards and image containers use an 8px or 12px radius to feel more approachable.
- **Strictly No Pill Shapes:** Buttons must remain rectangular with slight rounding to maintain a professional, corporate stance.

## Components

- **Buttons:** Primary buttons use a Deep Emerald background with White text. Secondary buttons use an "Imperial Gold" 1px border with Gold text. All buttons feature high horizontal padding (min 32px) and use `label-md` typography.
- **Input Fields:** Use a minimal "underline" style or a very light Champagne Silk background with a 1px bottom border. Focus states should transition the border color to Imperial Gold.
- **Property Cards:** Feature full-bleed high-resolution imagery. Typography should be overlaid using a subtle gradient scrim or placed on a Champagne Silk "drawer" at the bottom of the card.
- **Chips/Badges:** Used for status (e.g., "For Sale"). These should be Onyx Black with White text, using square corners or 2px rounding to look like high-end retail tags.
- **Lists:** Real estate feature lists (e.g., "4 Beds, 3 Baths") should use custom hairline icons in Imperial Gold paired with `body-md` text.
- **Navigation:** The header should be minimalist, featuring the logo centered or far-left, with navigation items using the `label-md` style for a clean, sophisticated look.