# SC Software Consultancy — Design System

A dark, premium, enterprise-grade design system for **SC Software Consultancy**, an Oracle Fusion Cloud implementation partner operating across Saudi Arabia, Jordan, and the GCC.

---

## Company context

SC Software Consultancy is an enterprise technology consultancy and **Oracle Fusion Cloud implementation partner**. It holds an Oracle partnership and a subcontracting relationship with **Deloitte Middle East** for government Oracle Fusion delivery (UAE / Abu Dhabi), and co-exhibits with Oracle at regional events including **LEAP**.

**What SC does**
- Oracle Fusion Cloud implementation — ERP, SCM, HCM, EPM, CX, PPM
- Managed services and post-go-live support
- Oracle localization for KSA regulatory compliance — **ZATCA, GOSI, Mudad**
- Enterprise transformation for government and private-sector clients
- Operates across **19 industries**

**Positioning.** SC is not a generic IT firm. It is a high-trust, regionally embedded Oracle specialist that competes on **depth of expertise, regulatory know-how, and enterprise credibility**. The brand voice is precision, authority, and transformation.

### Sources provided
- `uploads/SC Full Color Black Text.jpg` — official SC logo (light background). Source of exact color extraction and the cube motif.
- `uploads/2.png`–`uploads/6.png` — **tonal references only** (Nexus AI, GCore, Paramount Zone, TeKnowledge, Apogee). Not to be replicated. Used to calibrate the dark/editorial/enterprise mood.

No codebase or Figma file was provided — this system is built from the brand brief, the logo, and the colour palette extracted from it.

---

## Brand foundations at a glance

**Colour** (extracted from the logo cube cluster)

| Role | Name | Hex |
|---|---|---|
| Primary Dark | Charcoal | `#1C2127` |
| Primary Accent | Crimson | `#A92E2E` |
| Neutral Mid | Steel Grey | `#68727C` |
| Neutral Light | Silver Grey | `#C2C5C9` |
| Light base | Off-white | `#F4F5F6` |

The system is **dark-first**: charcoal `#1C2127` is the base surface, crimson is the hero accent used with restraint, steel and silver carry the neutral text scale.

**Type** — the brand's own licensed faces (self-hosted in `fonts/`)
- **Display:** **Manuka** — a tall, condensed grotesque used for headlines. Bold, structural, high-impact; echoes the vertical edges of the cube motif.
- **Editorial serif:** **FK Roman Standard** — used *italic* for the one accented word in a headline and for pull quotes. The serif/sans tension is the brand's editorial signature.
- **Body & UI:** **PolySans** (Neutral 400 / Median 500 / Bulky 700) — clean, neutral, highly legible.
- **Mono:** **PolySans Mono** — eyebrows, technical labels, regulatory codes (ZATCA, GOSI, Mudad).

> ⚠️ The uploaded files are **Trial** cuts (Manuka, FK Roman Standard, PolySans). License the retail versions before production use.

**Motif.** The logo is a 3D isometric cube cluster with one crimson focal cube. Geometry — cubes, isometric edges, modular grids, edge-lit structure — is the recurring visual device across the system.

---

## CONTENT FUNDAMENTALS

How SC writes.

- **Voice:** authoritative, precise, calm. SC is the expert in the room. No hype, no exclamation marks, no startup breathlessness.
- **Person:** addresses the client as **"you" / "your enterprise"**; refers to itself as **"we" / "SC"**. Avoids "I".
- **Casing:** Sentence case for body and most headlines. Mono eyebrows and labels are UPPERCASE with wide tracking (e.g. `ORACLE FUSION CLOUD`, `KSA LOCALIZATION`). Title Case reserved for proper nouns and product pillars (ERP, HCM, SCM, EPM).
- **Sentence rhythm:** short, declarative. Lead with the capability, follow with the proof. *"We implement Oracle Fusion. Deloitte trusts us to deliver it for government."*
- **Proof over adjectives:** credibility comes from named facts — Oracle Partner, Deloitte subcontractor, 19 industries, ZATCA/GOSI/Mudad localization, LEAP — not from words like "best" or "leading".
- **Numbers as authority:** use specific figures (19 industries, 6 Oracle pillars, 3 markets). Avoid invented statistics or vanity metrics.
- **Emoji:** never. Unicode symbols only where functional (arrows →, bullets).
- **Regional resonance:** GCC-aware. Comfortable naming KSA / UAE / Jordan and local regulators. English-first, formal register suited to government and enterprise buyers.

**Example copy**
- Eyebrow: `ORACLE FUSION CLOUD · GCC`
- Hero headline: *"Oracle Fusion, delivered with regional precision."*
- Hero subtext: *"We implement and run Oracle Fusion Cloud for enterprise and government across Saudi Arabia, the UAE and Jordan — localized for ZATCA, GOSI and Mudad from day one."*
- CTA: *"Talk to an Expert"* / *"View Our Services"*
- Trust line: *"Trusted by enterprise across KSA, UAE and Jordan."*

---

## VISUAL FOUNDATIONS

**Mood.** Dark, premium, structural. Think a precision-engineered enterprise product — depth and restraint, not flash. Edge-lit geometry against deep charcoal voids.

**Colour usage.**
- Base surface is charcoal `#1C2127` (`--ink-800`); the deepest void is `#14171C`. Cards step *up* in lightness (`--ink-700` / `--ink-600`), never down.
- Crimson is a **focal accent only** — one red cube in a field of grey. Used for: primary CTAs, the single highlighted word in a headline, active states, key data points, hairline accent glows. Never large crimson fills or crimson backgrounds behind body text.
- Text is a steel→silver→off-white scale, never pure `#FFFFFF` (caps at `#EEF0F2`) and never pure black.

**Typography.** Manuka condensed display set near-solid (line-height ~0.96, letter-spacing ~-0.01em) at large sizes for editorial impact. The single accented word in a hero headline is set in **FK Roman Standard italic** crimson — a serif note against the condensed sans. Mono (PolySans Mono) eyebrows sit above headlines with `0.22em` tracking. Body is PolySans Neutral at 1.6 line-height for long-form legibility. Buttons and nav use PolySans (not the condensed display) for legibility at small sizes.

**Backgrounds.** Flat charcoal with *subtle* devices: a faint isometric grid texture, a single radial crimson glow behind the hero (low opacity, like the GCore edge-light adapted to crimson), and floating cube geometry. No photographic full-bleed backgrounds, no busy gradients. At most one soft radial per section.

**Geometry / motif.** Cubes and isometric edges recur: the logo mark, decorative corner cubes, modular card grids, a 3px crimson edge on a focal card. Layouts are grid-disciplined and structured — strong columns, generous gutters, clear alignment.

**Spacing & layout.** 4px base scale. Generous vertical rhythm between sections (96–128px). Content max-width ~1200px, centered, with comfortable gutters. Fixed translucent top nav (blurred). Section eyebrows label every band.

**Borders.** Hairline borders are translucent silver (`rgba(194,197,201,0.10–0.28)`), never solid. The focal card may carry a 1px crimson border + glow.

**Corner radius.** Restrained and architectural: 10px (`--r-md`) for cards, 6px for inputs/buttons, pill only for tags/eyebrow chips. Nothing overly rounded — the brand is geometric.

**Shadows / elevation.** Dark, soft, large-radius drop shadows for raised surfaces (`0 8px 24px rgba(0,0,0,.45)`). The signature elevation is the **crimson glow** — `0 0 0 1px rgba(169,46,46,.4), 0 8px 40px crimson` — reserved for the hero visual and primary CTA hover.

**Transparency & blur.** Used for the fixed nav (backdrop-blur over translucent charcoal) and for layered glass cards over the hero glow. Sparingly elsewhere.

**Imagery vibe.** Cool, dark, desaturated, structural — isometric renders, wireframe geometry, dashboard previews. If photography is used: low-key, blue-cool, high-contrast. Crimson is the only warm note. Avoid stocky people shots; favour product/data/geometry.

**Animation.** Purposeful and restrained. `--ease-out` (cubic-bezier(0.16,1,0.3,1)) for entrances. Hero text reveals in a **staggered upward fade**. Cubes drift/parallax subtly. No bounces, no infinite decorative loops on content. Hover: lighten surface one step + crimson hairline. Press: slight scale-down (0.98) + darker crimson. Respect `prefers-reduced-motion`.

**Hover / press states.**
- Buttons (primary): hover → crimson lightens (`--accent-hover`) + glow; press → darker crimson + scale 0.98.
- Cards: hover → surface steps up (`--ink-600`), border brightens, optional crimson edge.
- Links: hover → text goes from `--fg2` to `--fg1`, crimson underline grows.

---

## ICONOGRAPHY

SC has no proprietary icon set. The system uses **[Lucide](https://lucide.dev)** (loaded from CDN) as the icon language — its thin, geometric, 2px-stroke line style matches the structural/engineered brand feel and pairs cleanly with Manuka. **This is a substitution** — flagged for the user; swap for a bespoke set if SC develops one.

- **Style:** line icons, 2px stroke, square-ish geometry, no fills. Sized 20–24px inline, up to 32px in feature cards. Stroke colour follows the text scale (`--fg2`); active/featured icons use crimson.
- **The cube mark** (`assets/sc-cube-mark.png`, transparent PNG) is the one brand "icon" — used as a favicon-scale mark, bullet, and decorative motif. Do not redraw it; copy the asset.
- **Emoji:** never used.
- **Unicode:** functional glyphs only — arrows (→ ↗), middot separators (·) in eyebrows.

Load Lucide: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`.

---

## Assets

- `assets/sc-logo-full-light.jpg` — official full logo, **for light backgrounds only**.
- `assets/sc-cube-mark.png` — cube cluster mark, **transparent**, for dark surfaces. Extracted from the logo.
- On dark backgrounds, pair `sc-cube-mark.png` with a CSS-rendered "Software Consultancy" wordmark (Manuka) — see the landing UI kit. The provided JPG logo's grey text disappears on dark, so it is not used on dark surfaces.
- `fonts/` — self-hosted brand typefaces (Manuka, FK Roman Standard, PolySans + PolySans Mono), wired via `@font-face` in `colors_and_type.css`.

---

## Index — what's in this system

| Path | What it is |
|---|---|
| `README.md` | This file — context, content & visual foundations, iconography |
| `colors_and_type.css` | Colour + type + spacing + motion tokens (CSS custom properties) |
| `SKILL.md` | Agent Skill manifest (for use in Claude Code) |
| `assets/` | Logo, transparent cube mark |
| `fonts/` | Self-hosted brand typefaces (Manuka, FK Roman, PolySans) |
| `preview/` | Design System tab cards (colours, type, spacing, components) |
| `ui_kits/landing/` | Landing-page UI kit — full dark hero → services → why SC → industries → trust → CTA, built from reusable JSX components |

Start with `colors_and_type.css` for tokens and `ui_kits/landing/index.html` for the brand applied end-to-end.
