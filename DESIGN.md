---
name: shamah.dev
description: Personal portfolio for Shaddam Amru Hasibuan - Frontend Product Engineer
colors:
  bg-ink: "#100F0F"
  base: "#1C1B1A"
  surface: "#282726"
  overlay: "#343331"
  text-primary: "#CECDC3"
  text-secondary: "#6F6E6C"
  text-muted: "#878580"
  surface-glass: "#1C1B1A"
  glass-border: "#282726"
  paper: "#FFFCF0"
  text-on-paper: "#100F0F"
  accent-orange: "#DA702C"
  accent-blue: "#4385BE"
typography:
  display:
    fontFamily: Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif
    fontSize: clamp(2.5rem, 7vw, 4rem)
    fontWeight: 700
    lineHeight: 1
  headline:
    fontFamily: Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif
    fontSize: clamp(2rem, 5vw, 3rem)
    fontWeight: 700
    lineHeight: 1.1
  title:
    fontFamily: Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: Libre Baskerville, Georgia, ui-serif, serif
    fontSize: 1.5rem
    fontWeight: 400
    lineHeight: 1.4
  caption:
    fontFamily: Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 6px
  lg: 12px
  full: 9999px
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 64px
  xxxl: 96px
components:
  button-outline:
    backgroundColor: transparent
    textColor: "{text-primary}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
    border: 1px solid {text-primary}
  card-glass:
    backgroundColor: "{base}"
    textColor: "{text-primary}"
    rounded: "{rounded.lg}"
    padding: 24px 32px
  card-paper:
    backgroundColor: "{paper}"
    textColor: "{text-on-paper}"
    rounded: "{rounded.lg}"
    padding: 24px 32px
  carousel-dot:
    size: 8px
    rounded: "{rounded.full}"
---

# Design System: shamah.dev

## 1. Overview

**Creative North Star: "The Studio Wall"**

A personal portfolio that reads like a maker's wall: works pinned in progress, tools laid out, warm light over a dark room. The Studio Wall is confident in what it shows and warm in how it shows it.

The system uses the Flexoki palette — a warm, ink-on-paper color system built for readability. The dark canvas is proper ink-black (`#100F0F`), with layered surfaces stepping through Flexoki's base-surface-overlay scale. Content sits on tinted glass panes that catch light through backdrop blur. Color enters through Flexoki's accent palette: a warm orange, a crisp blue.

**Key Characteristics:**
- Flexoki dark palette as the foundation — warm ink tones, not cold grays
- Backdrop blur replaces shadow for depth
- Scroll-reveal animations that feel physical, not decorative
- Typography-led hierarchy with a sans-serif workhorse and serif accent
- Color chosen from the Flexoki accent set for coherence

## 2. Colors

The Flexoki dark palette provides the entire neutral scale. Every neutral on the site maps to a named Flexoki token. Accents are drawn from the Flexoki chromatic set.

### Primary
- **Flexoki Orange** (`#DA702C`): The accent. Used sparingly — currently in the Smeshub card gradient. Its rarity is intentional.

### Accent
- **Flexoki Blue** (`#4385BE`): Secondary accent for blue-tinted work experience cards.

### Neutral
- **Ink** (`#100F0F`): The canvas. Main background. Proper ink black, not dead `#000`.
- **Base** (`#1C1B1A`): Glass card backgrounds. One step above ink.
- **Surface** (`#282726`): Card borders. Defines edges on glass surfaces.
- **Overlay** (`#343331`): Hover states, elevated surfaces.
- **Text** (`#CECDC3`): Primary text on dark. Warm off-white.
- **Subtle** (`#6F6E6C`): Secondary text.
- **Muted** (`#878580`): Muted text, metadata.
- **Paper** (`#FFFCF0`): Light card surfaces. Flexoki's warm paper tone.

### Named Rules
**The Flexoki Rule.** Every neutral on the site must be one of the seven Flexoki dark neutrals (Ink, Base, Surface, Overlay, Text, Subtle, Muted). No arbitrary grays. Accents must be drawn from the Flexoki chromatic set (Red, Orange, Yellow, Green, Cyan, Blue, Purple, Magenta).

**The Glass-Over-Ink Rule.** Every surface is either tinted glass (Base background + backdrop-blur + Surface border) or Paper. No flat gray cards.

## 3. Typography

**Display & Body Font:** Plus Jakarta Sans Variable (with ui-sans-serif, system-ui fallback)
**Accent Font:** Libre Baskerville (with Georgia, ui-serif fallback)

**Character:** A warm, modern sans-serif carries the system — confident in weight contrast, precise in spacing. The serif accent adds editorial warmth for the tagline role.

### Hierarchy
- **Display** (700, clamp(2.5rem, 7vw, 4rem), 1): Name headline on the hero. Bold, one line only.
- **Headline** (700, clamp(2rem, 5vw, 3rem), 1.1): Page-level headings (blog index).
- **Title** (600, 1.125rem, 1.3): Section headings, card titles, project names.
- **Body** (400, 1rem, 1.75): Running text, descriptions. Max line length 75ch.
- **Label** (400, 1.5rem, 1.4, Libre Baskerville): Tagline text. Editorial warmth.
- **Caption** (400, 0.75rem, 1.5): Dates, years, metadata.

## 4. Elevation

No shadows. Depth is conveyed through backdrop blur and the Flexoki neutral scale — glass cards surface above ink by being visually translucent, not by casting shadows. The blur radius is consistent across all glass surfaces.

## 5. Components

### Buttons
- **Shape:** Gently rounded (6px). Thin border.
- **Outline (CTA):** Transparent bg, 1px solid Flexoki Text, Text-colored text. Hover dims via `filter: brightness(0.75)`. Padding: 8px 12px.
- **No filled variants.** CTAs are edges, not blocks.

### Cards / Containers
- **Corner:** Generous radius (12px).
- **Glass card:** Base (`#1C1B1A`) background, `backdrop-blur`, 1px Surface (`#282726`) border. Primary container.
- **Paper card:** Paper (`#FFFCF0`) background. For high-contrast content.
- **Internal Padding:** 24px 32px.
- **Hover (project cards only):** Background shift from Base to Surface, `transition-colors`.

### Links
- **Inline:** Underlined, Text color. External links use `lucide:external-link` icon.

### Carousel (Projects)
- **Dots:** 8px circles, Surface at rest, Text when current.

### Container
- **Max width:** 1280px, center-aligned.

### Motion
- **Scroll reveal:** `translateY` to `0` on scroll into view.
- **Easing:** `backInOut` (0.5s).
- **Respects `prefers-reduced-motion`.**

## 6. Do's and Don'ts

### Do:
- **Do** use Flexoki dark neutrals for all grays. No Tailwind neutral scale colors.
- **Do** use backdrop-blur and the Base/Surface/Overlay scale for depth.
- **Do** draw accents from the Flexoki chromatic set (Red, Orange, Yellow, Green, Cyan, Blue, Purple, Magenta).
- **Do** use the orange accent sparingly.

### Don't:
- **Don't** use arbitrary hex grays outside the Flexoki palette.
- **Don't** use box-shadow for elevation.
- **Don't** animate layout properties. Transforms only.
- **Don't** add filled buttons.
- **Don't** use card grids with identical icon + heading + text patterns.
