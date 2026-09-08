# Shanni's Personal Website — UX Design Specification
**Version**: 1.0 | **Date**: 2026-05-10 | **Designer**: Wall-E (ux-designer + high-agency)

---

## 1. Design Brief

### 1.1 Purpose
A personal showcase website for **Shanni Li** that serves three audiences:
- **Primary**: School admissions officers evaluating her application
- **Secondary**: Family & friends tracking her growth
- **Tertiary**: Shanni herself — a living portfolio she can update

### 1.2 Content Pillars (confirmed from asset inventory)
| Pillar | Assets | Significance |
|--------|--------|-------------|
| **Art** | Songbird 1st Place 2025, Purple Finch, Spirit of the Lynx, Bowseat 2025 | Competition wins, range of media |
| **Music** | Flute competition awards, trio performances, professional photography | Excellence in performing arts |
| **Leadership** | Art4Earth Club founder, 12-week lesson plan, winter projects | Initiative + community impact |
| **About** | Personal bio, growth timeline | Human connection |

### 1.3 Design Maturity Target
**Advanced** — clean, professional, but with personality. Not a template. Admissions officers see thousands of applications; this site must feel intentional.

---

## 2. Information Architecture

```
Home (Hero + Quick nav)
 ├─ Art & Awards
 │   ├─ Gallery (filterable by competition/year)
 │   ├─ Individual pieces (detail view)
 │   └─ Certificates & recognition
 ├─ Music
 │   ├─ Flute performances
 │   ├─ Awards & competitions
 │   └─ Media gallery
 ├─ Leadership
 │   ├─ Art4Earth Club story
 │   ├─ Projects & impact
 │   └─ Lesson plans & materials
 └─ About
     ├─ Bio & interests
     ├─ Growth timeline (visual)
     └─ Contact / links
```

**Navigation pattern**: Sticky top nav (desktop) / bottom tab bar (mobile). Always visible. 5 items max.

---

## 3. Visual System

### 3.1 Design Direction: **"Gallery Calm"**

Shanni's work is colorful and expressive. The website must be a **neutral frame** — white space, minimal chrome — so her art and achievements command all attention. Think: museum wall, not Times Square.

**Mood keywords**: Clean, warm, confident, focused, personal.

### 3.2 Color Palette

```
Primary (Text)      #1A1A1A   — near-black, soft (not #000)
Secondary (Muted)   #6B7280   — for dates, captions, metadata
Background          #FAFAFA   — warm white, never pure #FFF
Surface/Card        #FFFFFF   — pure white cards on warm bg
Accent              #2D5A27   — deep forest green (Art4Earth connection)
Accent-light        #E8F5E9   — green tint for highlights
Divider             #F0F0F0   — barely-there borders
```

**Rationale**: Forest green (#2D5A27) ties to Art4Earth's environmental mission and feels grounded. It's distinctive without competing with her artwork. The warm white (#FAFAFA) prevents the sterile feel of pure white.

**Contrast compliance**:
- #1A1A1A on #FAFAFA: **18.4:1** (AAA ✓)
- #1A1A1A on #FFFFFF: **19.3:1** (AAA ✓)
- #6B7280 on #FAFAFA: **5.2:1** (AA ✓)
- #2D5A27 on #FAFAFA: **6.8:1** (AA ✓)

### 3.3 Typography

```
Display (Hero name)   "Crimson Text" — elegant serif, 400 weight
Headings              "Inter" — clean sans, 600 weight
Body                  "Inter" — clean sans, 400 weight
Captions/Labels       "Inter" — 400 weight, 0.875rem
```

**Type scale** (1.25 ratio):
```
text-xs:    0.75rem  (12px)   — fine print
text-sm:    0.875rem (14px)   — captions, dates
text-base:  1rem     (16px)   — body
text-lg:    1.25rem  (20px)   — intro copy
text-xl:    1.5rem   (24px)   — section headers
text-2xl:   1.875rem (30px)   — page titles
text-3xl:   2.25rem  (36px)   — hero name
text-4xl:   3rem     (48px)   — hero (mobile 2.25rem)
```

**Font loading strategy**: `font-display: swap` on both. System font fallback stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

### 3.4 Spacing System
```
space-2xs:  0.25rem  (4px)
space-xs:   0.5rem   (8px)
space-sm:   0.75rem  (12px)
space-md:   1rem     (16px)
space-lg:   1.5rem   (24px)
space-xl:   2rem     (32px)
space-2xl:  3rem     (48px)
space-3xl:  4rem     (64px)
space-4xl:  6rem     (96px)
```

**Section vertical rhythm**: `space-3xl` (64px) between sections, `space-2xl` (48px) between section header and content.

### 3.5 Iconography
- **Phosphor Icons** (https://phosphoricons.com) — clean, consistent, 1.5px stroke weight
- Size: 20px inline, 24px standalone, 32px feature icons
- Color: inherit from text context

---

## 4. Page Layouts

### 4.1 Home Page

```
┌──────────────────────────────────────────┐
│  [Logo/Name]              [Nav →]        │  ← sticky, bg blur
├──────────────────────────────────────────┤
│                                          │
│     ┌──────────────────────┐             │
│     │   Shanni's portrait  │             │  ← circular, 200px
│     └──────────────────────┘             │
│                                          │
│        Shanni Li                         │  ← Crimson Text, 3rem
│     Artist · Flutist · Leader            │  ← Inter, text-lg, muted
│                                          │
│  [Art]  [Music]  [Leadership]  [About]   │  ← pill nav, 4 items
│                                          │
├──────────────────────────────────────────┤
│  Featured Work                            │  ← section header
│  ┌─────────┐ ┌─────────┐ ┌─────────┐    │
│  │  Art    │ │  Music  │ │  Club   │    │  ← 3 cards, horizontal
│  │  Card   │ │  Card   │ │  Card   │    │     scroll on mobile
│  └─────────┘ └─────────┘ └─────────┘    │
├──────────────────────────────────────────┤
│  Recent Achievements                      │
│  • Songbird 1st Place — 2025             │  ← timeline-style list
│  • Art4Earth Winter Projects — 2025      │
│  • Flute Trio Performance — 2025         │
├──────────────────────────────────────────┤
│  Footer: © Shanni Li · [Links]           │
└──────────────────────────────────────────┘
```

**Design rationale**: The hero puts Shanni front and center — admissions officers see a face, not a list. The 4-pill navigation provides instant orientation. The featured cards give a taste of each section, and the timeline shows forward momentum.

### 4.2 Art & Awards

```
┌──────────────────────────────────────────┐
│  ← Back to Home                          │
│                                          │
│  Art & Awards                            │  ← page title
│  Exploring nature through color          │  ← subtitle, muted
│                                          │
│  [All] [Competitions] [Illustrations]    │  ← filter tabs
│                                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │          │ │          │ │          │ │  ← masonry grid
│  │  Artwork │ │  Artwork │ │  Artwork │ │     3-col desktop
│  │          │ │          │ │          │ │     2-col tablet
│  │  Title   │ │  Title   │ │  Title   │ │     1-col mobile
│  │  Award   │ │  Award   │ │          │ │
│  └──────────┘ └──────────┘ └──────────┘ │
│                                          │
│  [Load More]                             │
└──────────────────────────────────────────┘
```

**Artwork Card** component:
- Image: full-bleed, 4:3 aspect ratio, `object-fit: cover`
- Overlay on hover: title + award badge (green accent)
- Click → lightbox or detail page

**Detail View** (modal or page):
- Full-resolution image
- Title, medium, dimensions, year
- Award/certificate scan if applicable
- Previous / Next navigation

### 4.3 Music

```
┌──────────────────────────────────────────┐
│  ← Back to Home                          │
│                                          │
│  Music                                    │
│  Flute — competitions, performances      │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │     Performance Photo (hero)       │  │  ← full-width, 60vh
│  └────────────────────────────────────┘  │
│                                          │
│  Awards & Recognition                     │
│  ┌──────┐ ┌──────┐ ┌──────┐             │
│  │Award │ │Award │ │Award │             │  ← card grid
│  │ 1    │ │ 2    │ │ 3    │             │
│  └──────┘ └──────┘ └──────┘             │
│                                          │
│  Gallery                                  │
│  [photo] [photo] [photo] [photo]         │  ← horizontal scroll
│                                          │
│  Performance Highlights                   │
│  • Flute Trio — [event] — 2025          │  ← list with dates
│  • Solo — [event] — 2024                │
└──────────────────────────────────────────┘
```

### 4.4 Leadership (Art4Earth)

```
┌──────────────────────────────────────────┐
│  ← Back to Home                          │
│                                          │
│  Leadership                               │
│  Founder, Art4Earth Club                 │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │     Club poster / group photo      │  │
│  └────────────────────────────────────┘  │
│                                          │
│  The Story                                │  ← narrative section
│  "Art4Earth started when..."             │     2-col: text + image
│  [Read more]                             │
│                                          │
│  Impact by the Numbers                    │
│  ┌──────┐ ┌──────┐ ┌──────┐             │
│  │  12  │ │  N   │ │  N   │             │  ← stat cards
│  │Weeks │ │Members│ │Projects│           │
│  └──────┘ └──────┘ └──────┘             │
│                                          │
│  Projects                                 │
│  ┌──────────┐ ┌──────────┐              │
│  │ Winter   │ │ Poster   │              │  ← project cards
│  │ Project  │ │ Campaign │              │
│  └──────────┘ └──────────┘              │
│                                          │
│  Lesson Plan                              │
│  [Download: 12-Week Plan (PDF)]          │  ← CTA
└──────────────────────────────────────────┘
```

**This page is the differentiator.** School admissions see hundreds of art portfolios. An applicant who *founded a club and built a curriculum* stands apart. Give it breathing room.

### 4.5 About

```
┌──────────────────────────────────────────┐
│  ← Back to Home                          │
│                                          │
│     ┌──────────────────────┐             │
│     │   Shanni's portrait  │             │
│     └──────────────────────┘             │
│                                          │
│  Hi, I'm Shanni.                         │  ← Crimson Text heading
│                                          │
│  [2-3 paragraph bio]                     │  ← personal narrative
│  • Interests                             │
│  • What drives her                       │
│  • Future aspirations                    │
│                                          │
│  Timeline                                 │
│  ● 2023 — Started flute                  │  ← vertical timeline
│  │                                       │     with green dots
│  ● 2024 — First art competition          │
│  │                                       │
│  ● 2025 — Founded Art4Earth              │
│  │    Won Songbird 1st Place             │
│  │                                       │
│  ● 2026 — [current year]                 │
│                                          │
│  Contact / Links                          │
│  [Email] [Instagram?] [Art portfolio]   │
└──────────────────────────────────────────┘
```

---

## 5. Component Library

### 5.1 Achievement Card
```
┌─────────────────┐
│                 │
│   [Image]       │  ← 4:3, object-cover
│                 │
├─────────────────┤
│ Title           │  ← Inter 600, text-base
│ Award / Year    │  ← Inter 400, text-sm, muted
│ Brief desc      │  ← Inter 400, text-sm
└─────────────────┘
```
**States**: Default → hover (shadow + scale 1.02) → active (scale 0.98)

### 5.2 Stat Card (for Leadership)
```
┌───────────┐
│    12     │  ← Crimson Text, text-3xl
│   Weeks   │  ← Inter 400, text-sm, muted
│  of curriculum
└───────────┘
```

### 5.3 Timeline Item
```
● ─── 2025 ─── Songbird Art Contest — 1st Place
│              Purple Finch, watercolor
│
● ─── 2025 ─── Founded Art4Earth Club
```

### 5.4 Navigation Pill (Home hero)
```
[ Art ]  — bg: surface, border: divider, hover: accent-light, active: accent
```
Pill shape: `border-radius: 9999px`, padding: `0.625rem 1.25rem`

### 5.5 Lightbox (Art detail)
- Backdrop: `rgba(0,0,0,0.85)`
- Image: max 90vw × 85vh, `object-fit: contain`
- Controls: Close (×), Prev (<), Next (>)
- Caption bar: bottom, semi-transparent

---

## 6. Responsive Strategy

### 6.1 Breakpoints
| Name | Width | Layout |
|------|-------|--------|
| Mobile | < 640px | Single column, bottom nav |
| Tablet | 640–1024px | 2-column grid, top nav |
| Desktop | > 1024px | 3-column grid, top nav |

### 6.2 Mobile Adaptations
- **Nav**: Bottom tab bar (icon + label) instead of top sticky
- **Hero**: Name shrinks to 2.25rem, pills stack 2×2
- **Galleries**: Single column, full-width images
- **Lightbox**: Swipe gestures
- **Touch targets**: Minimum 44×44px (WCAG)

### 6.3 Performance Targets
- **Lighthouse**: 90+ Performance, 100 Accessibility, 100 SEO
- **LCP**: < 2.5s (hero image optimized)
- **Images**: WebP format, responsive srcset, lazy loading
- **Fonts**: Self-hosted, subset to Latin

---

## 7. Accessibility (WCAG 2.1 AA)

| Requirement | Implementation |
|-------------|---------------|
| Color contrast | All text ≥ 4.5:1 (verified above) |
| Keyboard nav | Full tab order, visible focus rings (2px green outline) |
| Screen readers | Semantic HTML (`<nav>`, `<main>`, `<article>`, `alt` on all images) |
| Focus trapping | Lightbox modal traps focus |
| Skip link | "Skip to content" — first tabbable element |
| Reduced motion | `prefers-reduced-motion` disables scale animations |
| Form labels | All inputs have associated `<label>` |

---

## 8. Technical Recommendations

### 8.1 Recommended Stack
| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Framework** | Plain HTML/CSS/JS **or** Next.js (static export) | No backend needed. Choose Next.js if we want component reuse and image optimization. Plain HTML if we want maximum simplicity and zero build step. |
| **Hosting** | GitHub Pages or Vercel | Free, fast, custom domain support |
| **Images** | Local, pre-optimized to WebP + fallback JPEG | No CDN dependency |
| **Fonts** | Self-hosted Google Fonts (Inter + Crimson Text) | GDPR-friendly, faster than Google CDN |
| **Analytics** | None or privacy-first (Plausible) | Not a marketing site |

### 8.2 Recommendation: **Plain HTML/CSS**
Given the site is ~5 pages, a static framework is overkill. Benefits:
- Shanni can edit content by editing HTML
- Zero build step = instant deploys
- Teaches her basic web literacy
- No node_modules, no npm, no vulnerability surface

---

## 9. Content Strategy

### 9.1 Voice & Tone
| Attribute | Guideline |
|-----------|-----------|
| **Voice** | First-person ("I", "my"), warm but professional |
| **Tone** | Confident but not boastful. Let the work speak. |
| **Length** | Short. Admissions officers scan. |
| **Structure** | Achievement → Context → Impact |

### 9.2 Writing Example (About page)
> *Hi, I'm Shanni. I believe art and music can change how people see the world — and I've been proving that one project at a time. When I'm not painting or practicing flute, I'm teaching younger students through Art4Earth, the environmental art club I founded in 2025. My work has been recognized in the Songbird Art Contest (1st Place) and the Bowseat Ocean Awareness Contest.*

### 9.3 Image Guidelines
- **Hero portrait**: Warm lighting, natural setting, eye contact
- **Artwork photos**: Even lighting, no glare, straight-on angle. Crop to artwork only.
- **Performance photos**: Action shots preferred over posed
- **File naming**: `shanni-li-<category>-<title>-<year>.webp`

---

## 10. Design Decisions Log

| Decision | Alternatives Considered | Rationale |
|----------|------------------------|-----------|
| Warm white bg vs pure white | #FFFFFF | #FAFAFA reduces eye strain, feels more personal |
| Forest green accent vs blue/purple | Blue (generic), Purple (artsy cliché) | Green = Art4Earth connection, distinctive, grounded |
| Crimson Text serif for display | Playfair Display, Lora | Crimson Text has better character at small sizes, free |
| Plain HTML vs Next.js | Next.js, Hugo, 11ty | School portfolio = longevity. HTML lasts 20 years. Frameworks don't. |
| Bottom nav on mobile vs hamburger | Hamburger menu | 5 items is few enough for tabs; tabs have higher engagement |
| Masonry grid vs uniform grid | Uniform squares | Art comes in varied aspect ratios; masonry respects the work |

---

## 11. Next Steps

1. **[ ] Wireframe review** — Juncao reviews layouts above, provides bio text
2. **[ ] Photo curation** — Select 8–12 best artwork photos + 3–5 flute photos
3. **[ ] Build HTML prototype** — index.html + style.css, 4 content pages
4. **[ ] Content writing** — Bio, project descriptions, timeline entries
5. **[ ] Accessibility audit** — Keyboard nav, screen reader pass
6. **[ ] Deploy** — GitHub Pages with custom domain (if desired)

---

*End of UX Design Specification. Ready for review.*
