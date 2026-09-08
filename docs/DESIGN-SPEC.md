# Shanni Li — Personal Portfolio Website
## UX/UI Design Specification

**Design maturity target: World-class student portfolio.**

---

## 1. Information Architecture

```
HOME (Hero)
├─ Portrait + tagline
├─ Quick stats: 1st Place ×1 | Competitions ×4 | Club Founder
└─ Scroll-down narrative intro

ART (Primary showcase)
├─ Featured: Purple Finch — 2025 Songbird 1st Place
├─ Gallery: Haystack, SingBird, Rescue Respect Repeat, 2026 Songbird
├─ Behind the Scenes: Ocean drawing process (4-6 selected frames)
└─ Awards & Certificates

MUSIC
├─ Performance photos (flute, trio)
├─ Awards
└─ (Future: video/audio embeds)

LEADERSHIP — Art4Earth Club
├─ Club founding story
├─ Art4Earth Poster (her design)
├─ Club activity gallery (4-6 best photos)
└─ Winter 2025 projects highlight

ABOUT + TIMELINE
├─ Bio (2-3 sentences)
├─ Growth timeline (2024 → 2025 → 2026)
└─ What's next

CONTACT
├─ Parent-managed email
└─ (No phone, no address — privacy by design)
```

**Navigation**: Sticky top bar with smooth-scroll anchors on desktop. Bottom tab bar on mobile (thumb-zone accessible).

---

## 2. Visual Design System

### Color Palette

| Role | Color | Usage |
|------|-------|-------|
| Background | `#FAFAF8` | Warm off-white — lets art breathe |
| Surface cards | `#FFFFFF` | Clean gallery frames |
| Primary text | `#1A1A1A` | Near-black, softer than #000 |
| Secondary text | `#6B6B6B` | Captions, dates |
| Accent | `#2E5C4E` | Forest green — nods to nature/Art4Earth |
| Accent warm | `#C4734E` | Terracotta — warmth for hover states |
| Border | `#E8E4E0` | Subtle separation |

### Typography

| Role | Font | Weight | Size (desktop) |
|------|------|--------|----------------|
| Site title | Cormorant Garamond | 600 | 48px |
| Section headings | Cormorant Garamond | 500 | 36px |
| Body | Inter | 400 | 16px / line-height 1.6 |
| Captions | Inter | 400 | 14px |
| Nav items | Inter | 500 | 15px, letter-spacing 0.05em |

Fallback stacks:
- Headings: `Cormorant Garamond, Georgia, serif`
- Body: `Inter, system-ui, -apple-system, sans-serif`

### Spacing System (8px base)

| Token | Value | Use |
|-------|-------|-----|
| xs | 8px | Icon gaps, tag padding |
| sm | 16px | Card padding, list gaps |
| md | 32px | Section-internal spacing |
| lg | 64px | Between major sections |
| xl | 128px | Hero-to-content transition |

### Imagery Treatment

- Gallery images: 8px white border, `box-shadow: 0 1px 3px rgba(0,0,0,0.08)`, 4px radius
- Hero portrait: Full-bleed or large circular crop
- Process photos: Smaller grid, no border — sketchbook feel
- All images: lazy-loaded, WebP format, max 1200px wide

---

## 3. Mobile-First Breakpoints

| Breakpoint | Layout | Notes |
|-----------|--------|-------|
| < 640px | Single column, bottom nav | Primary: phone scanning |
| 640-1024px | 2-col gallery, side nav | Tablet |
| > 1024px | 1200px max-width centered | Desktop |

Bottom nav: 4 icons (Home · Art · Music · More), thumb-zone reachable. More expands to Leadership + About + Contact.

Touch targets: minimum 44×44px. Gallery images are themselves targets.

---

## 4. Accessibility (WCAG 2.1 AA)

| Requirement | Implementation |
|-------------|---------------|
| Color contrast | All text ≥ 4.5:1 against background |
| Alt text | Descriptive alt for every artwork |
| Focus indicators | Visible 2px outline on all focusable elements |
| Keyboard nav | Tab through gallery, Enter=open, Escape=close, arrows=navigate |
| Reduced motion | CSS `prefers-reduced-motion: reduce` disables animations |
| Skip link | "Skip to gallery" link at page top |

---

## 5. Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| Total page weight | < 1.5 MB |
| Image format | WebP with JPEG fallback |
| Image dimensions | 1200px max width, 800px max height (thumbnails: 600px) |

Image pipeline: HEIC → JPEG → resize → WebP (quality 80) + responsive srcset (400w, 800w, 1200w)

---

## 6. Privacy & Safety

| Concern | Decision |
|---------|----------|
| COPPA forms | Excluded — contain parent signatures and addresses |
| Certificates | Display but redact school name, grade level, full legal name |
| Photos with other children | Excluded unless faces obscured or consent obtained |
| Contact info | Parent-managed email only; no phone, no address |
| Name | "Shanni Li" (already public via contest results) |
| Age/grade | Omitted — let the work speak |

---

## 7. Technical Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Hosting | GitHub Pages / Vercel (free) | Zero cost, HTTPS, easy deploy |
| Framework | Static HTML/CSS + vanilla JS | No framework bloat |
| Images | `<picture>` with WebP + JPEG fallback, lazy loading | Modern, performant |
| Lightbox | CSS-only or < 2KB vanilla JS | No heavy library |
| Analytics | None or Plausible | No creepy tracking on kid site |
| Domain | `shannili.com` or `shanni.art` | Check availability |

---

## 8. World-Class References

- **Taku Kumabe** (takukumabe.com) — photographer portfolio, image treatment + whitespace
- **Lynn Fisher** (lynnandtonic.com) — playful timeline, great mobile
- **Stripe Press** — typography and color restraint
- **YoungArts** portfolio winners — peer examples at competition level

---

## 9. Priority Roadmap

### Phase 1 — Ship (this week)
1. Convert HEIC files to JPEG
2. Resize + compress all selected images to WebP
3. Build single-page static site (all 5 sections)
4. Deploy to staging, test on phone

### Phase 2 — Polish (next week)
5. Add lightbox gallery interaction
6. Add timeline section
7. Write alt text for all images
8. Test with actual admissions parent (user testing)

### Phase 3 — Enhance (ongoing)
9. Add new achievements as they happen (the "track progress" goal)
10. Consider adding audio clips of flute performances
11. Add artist statements for each piece
