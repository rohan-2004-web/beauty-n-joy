# Design Brief — Beauty N Joy

## Direction
Beauty N Joy — Premium luxury beauty parlour website with refined, elegant, feminine aesthetic using soft pastels and gold accents.

## Tone
Refined femininity meets modern minimalism: high-end beauty brand aesthetic (Charlotte Tilbury, Estée Lauder) with generous whitespace and intentional pacing.

## Differentiation
Gold gradient accent details on hero text + hand-crafted scroll reveal animations create a signature luxe experience distinct from generic salon sites.

## Color Palette

| Token           | OKLCH             | Role                                        |
|-----------------|-------------------|---------------------------------------------|
| background      | 0.98 0.008 40     | Light cream primary background              |
| foreground      | 0.18 0.02 40      | Dark brown primary text                     |
| card            | 0.99 0.004 40     | Pure white elevated surfaces                |
| primary         | 0.52 0.18 330     | Soft pink (#F8B4C8-adjacent) for CTAs       |
| accent          | 0.62 0.16 75      | Warm gold (#D4AF37 family) highlights       |
| muted           | 0.92 0.008 50     | Beige/nude subtle backgrounds               |
| secondary       | 0.95 0.008 50     | Off-white section backgrounds               |
| destructive     | 0.55 0.22 25      | Red for alerts/errors                       |

## Typography

- Display: Fraunces — elegant serif for headings, hero text, and brand moments (luxury aesthetic)
- Body: General Sans — clean modern sans for readability across body copy and UI labels
- Scale: Hero `text-5xl md:text-7xl font-bold tracking-tight`, H2 `text-3xl md:text-5xl font-bold`, Body `text-base leading-relaxed`

## Elevation & Depth

Subtle layered shadows (shadow-card: 2px offset, shadow-elegant: 4px offset) create surface hierarchy without visual heaviness; light mode favors gentle elevation.

## Structural Zones

| Zone     | Background           | Border                  | Notes                                      |
|----------|----------------------|-------------------------|--------------------------------------------|  
| Header   | 0.98 0.008 40        | border-b / 0.88 0.008  | Sticky navbar with logo, nav, CTA button   |
| Hero     | Gradient overlay     | —                       | Featured image + text overlay              |
| Content  | Alternating white/beige | —                      | White cards (primary), beige sections      |
| Footer   | Dark charcoal        | border-t / gold accent  | Dark footer with gold text accents         |

## Spacing & Rhythm

Sections spaced 4rem–6rem apart; content cards grouped with 2rem gaps; micro-spacing (text, buttons) at 0.5rem–1rem scale creates spacious, uncluttered rhythm.

## Component Patterns

- Buttons: Pink primary with white text, rounded-lg, gold hover glow effect, transition-smooth
- Cards: White background, shadow-card, rounded-lg, hover-lift (gentle -translate-y-1)
- Badges: Gold background with dark text, rounded-full, uppercase tracking-widest

## Motion

- Entrance: Fade + subtle scale-up on scroll reveal (0.4s ease-out)
- Hover: Lift effect (cards), color fade (buttons), glow accent on text (0.35s smooth)
- Decorative: Floating elements on hero, pulse on testimonial ratings

## Constraints

- Mobile-first responsive (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- Light mode primary; dark mode optional for future
- No raw hex colors; all OKLCH tokens via Tailwind theme
- Playfair + Lato rejected in favor of Fraunces + General Sans for more distinctive luxury aesthetic
- Maximum shadow opacity 0.06 to maintain elegance

## Signature Detail
Gold gradient text accent on hero heading + hand-crafted scroll reveal animations using Intersection Observer (visual category: typographic + motion choreography).
