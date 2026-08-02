# Design Document — yurosenagar.com

| | |
|---|---|
| **Product** | yurosenagar.com |
| **Design owner** | Yurose Nagar |
| **Status** | v1.0 live |
| **Last updated** | August 2026 |

---

## 1. Design principles

1. **Clarity over cleverness.** A visitor should understand what this person does before they scroll.
2. **Confident typography, generous space.** One typeface, big headlines, restrained everything else.
3. **One accent colour.** Blue carries every action, link and emphasis. Colour means something.
4. **Systematic, not decorative.** Spacing, colour and radii come from tokens — nothing is hand-picked per section.
5. **The design must survive an empty portfolio.** With two projects it should look intentional, not unfinished.
6. **Motion is a garnish.** Subtle reveals only, and always switched off for users who ask for reduced motion.

## 2. Brand expression

| Attribute | Expression |
|---|---|
| Personality | Considered, calm, technically credible |
| Voice | Direct, first-person, no jargon or hype |
| Visual tone | Editorial whitespace with a product-UI accent colour |
| Signature elements | Availability pill with pulsing dot, numbered section indexes (`01 / SELECTED WORK`), the blue contact band |

## 3. Colour system

Colours are defined once as CSS custom properties in `assets/css/tokens.css`. Nothing else in the codebase contains a raw colour except intentional pure white/black on the blue band.

### Light theme (default)

| Token | Value | Role |
|---|---|---|
| `--page` | `#ffffff` | Page background |
| `--surface` | `#ffffff` | Cards, navbar |
| `--soft` | `#f6f8fc` | Alternate section bands, chips |
| `--line` | `#dce4ef` | Borders and dividers |
| `--navy` | `#0f1f3d` | Headings |
| `--text` | `#26374d` | Body copy |
| `--muted` | `#64748b` | Secondary copy |
| `--blue` | `#2563eb` | Primary accent — buttons, links, indexes |
| `--blue-dark` | `#1d4ed8` | Hover state for primary |
| `--green` | `#22c55e` | Availability status dot |
| `--shadow` | `0 24px 70px rgba(30,64,175,.13)` | Card elevation |

### Dark theme

Activated by `data-theme="dark"` on `<html>`. Backgrounds shift to dark **navy-blue** rather than neutral black, keeping the brand's blue cast:

| Token | Value | Role |
|---|---|---|
| `--page` | `#0b1730` | Page background |
| `--surface` | `#122344` | Cards |
| `--soft` | `#0e1c38` | Alternate bands |
| `--line` | `#2a3f63` | Borders |
| `--navy` | `#f8fafc` | Headings (inverted) |
| `--text` | `#d4deec` | Body copy |
| `--muted` | `#9dacbf` | Secondary copy |

The blue accent stays constant across both themes so brand recognition survives the switch.

### Contrast

All text/background pairs are intended to meet WCAG AA (4.5:1 body, 3:1 large text). This is asserted, not yet audited — verification is a Phase 4 task.

## 4. Typography

**One family: Space Grotesk** (400/500/600/700), loaded from Google Fonts, with `system-ui, sans-serif` as fallback. Hierarchy comes from size, weight and colour — never from a second typeface.

| Element | Size | Weight | Notes |
|---|---|---|---|
| Hero line 1 | `clamp(3rem, 6vw, 5.6rem)` | 700 | Navy, tight tracking (`-.05em`) |
| Hero line 2 | `clamp(2.6rem, 5.4vw, 5rem)` | 500 | Muted — creates the two-tone headline |
| Section `h2` | `clamp(2.45rem, 4.6vw, 4.1rem)` | 700 | Navy |
| Card `h3` | `1.55rem` | 700 | Navy |
| Body | `1rem`–`1.08rem` | 400 | Line height 1.65 |
| Section index | `.72rem` | 700 | Blue, uppercase, `.13em` tracking |
| Chips / tags | `.68rem` | 600 | On `--soft` background |

Fluid `clamp()` sizing means no separate mobile type scale is needed.

## 5. Spacing scale

Defined as tokens (`--space-1` … `--space-9`): **4, 8, 12, 16, 20, 24, 32, 48, 64px**. New spacing values should be chosen from this scale rather than invented.

| Context | Value |
|---|---|
| Section vertical padding (desktop) | 100px |
| Section vertical padding (mobile) | 60px |
| Section heading → content | 52px |
| Card interior | 28–30px |
| Content width | `min(1180px, 100% - 48px)` |

## 6. Layout

- **Shell** — every section's content sits inside `.shell`, giving one consistent measure across the site.
- **Section heading** — two-column grid (title left, supporting line right) that collapses to one column on mobile.
- **Project cards** — full-width cards: visual panel on top, metadata grid below (title/number left, description + role + tags + link right).
- **Alternating bands** — plain `--page` sections alternate with `--soft` bands (philosophy) and the solid blue contact band, giving rhythm without dividers.

## 7. Components

| Component | Description |
|---|---|
| **Navbar** | Fixed, floating pill; blurred translucent background; brand with blue dot; links + CTA + theme toggle. Collapses to a hamburger dropdown below 760px. |
| **Availability pill** | Green-bordered rounded chip with a pulsing dot — used for "AVAILABLE FOR NEW PROJECTS" and section eyebrows. |
| **Buttons** | 9px radius, 49px min height. Primary = solid blue/white; ghost = bordered surface. |
| **Project card** | Bordered card, 18px radius; lifts 4px with a blue border and shadow on hover. |
| **Chips/tags** | 6px radius, soft background, bordered — used for tech tags and skills. |
| **Ticker** | Full-bleed marquee on the soft band; duplicated track for a seamless loop; masked at both edges. |
| **Timeline** | Year · dot · text rows with a bottom rule; the "NEXT" row uses the green dot and pulses. |
| **CTA band** | Soft panel with heading, supporting line and a button, right-aligned on desktop and stacked on mobile. |
| **Contact band** | Solid blue, white type, underlined email link, outlined social pills that invert on hover. |
| **Footer** | Three-column meta row; centre column hides on mobile. |

## 8. Theming behaviour

- Light is the default for first-time visitors.
- The visitor's choice is saved in `localStorage` under `yurose-theme` and reapplied on return.
- The theme script runs synchronously in `<head>` so the correct theme is applied **before first paint** — no white flash for dark-mode users.
- The browser chrome colour (`<meta name="theme-color">`) updates with the theme.
- Toggle is a 38px circular button in the navbar; on mobile it moves inside the dropdown at full width.

## 9. Responsive design

Single major breakpoint at **760px**, with a secondary tablet adjustment at 1100px.

| Below 760px | Change |
|---|---|
| Navigation | Hamburger → dropdown panel; theme toggle full-width inside it |
| Hero | Single column; type scales down via `clamp()` |
| Sections | Padding 100px → 60px |
| Project cards | Metadata stacks to one column; visual height reduced |
| Services / skills | Three columns → one |
| CTA bands | Stack, button goes full-width |
| Timeline | Narrower year column, tighter rows |
| Footer | Centre column hidden |

Minimum supported width: **320px**.

## 10. Motion

| Effect | Detail |
|---|---|
| Scroll reveal | Opacity 0→1, translateY 24px→0, 0.8s ease; staggered by up to 240ms; triggered by IntersectionObserver at 12% visibility |
| Ticker | 34s linear infinite translate |
| Status dot | 2s pulse |
| Hover | Cards lift 4px; buttons darken; 0.2–0.3s ease |
| Reduced motion | All animations and transitions cut to 0.01ms; ticker frozen; smooth scroll disabled |

## 11. Accessibility

**In place:** semantic landmarks (`header`/`main`/`footer`/`section`), one `h1` per page, `aria-label`s on nav and toggle, `aria-current="page"` on the active link, `aria-expanded` on the hamburger, visible 3px focus ring, decorative elements marked `aria-hidden`, reduced-motion support, 42–49px touch targets.

**To verify (Phase 4):** measured contrast ratios in both themes, full keyboard-only pass, screen-reader pass, focus trapping in the mobile menu.

## 12. Design decisions & rationale

| Decision | Why |
|---|---|
| Light theme as default | Reads as professional and client-safe; dark is opt-in |
| Single typeface | Cheaper to load, harder to get wrong, more distinctive |
| Dark mode = navy, not black | Keeps the blue brand identity in both themes |
| Concept work labelled honestly | Trust is worth more than the appearance of a full client list |
| No hero illustration or photo | Typography carries the impression; avoids stock-image generic-ness |
| Labs kept visually separate | Signals a different contract with the viewer: workshop, not showroom |

## 13. Future design work

- Real project screenshots replacing the CSS-drawn mockups
- Branded Open Graph preview image (1200×630)
- Labs restyled onto the current token system
- Case-study page template
- Considered: subtle page-transition treatment, once content justifies it
