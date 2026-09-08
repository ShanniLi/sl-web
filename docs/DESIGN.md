# Shanni Li — Portfolio Website Design Spec

*Living design document. Updated after Shanni's answers to the questions doc.*

## 1. Who this is for

A **teen artist + flutist's personal portfolio**. The audience is contest
judges, teachers, family, and future programs. The register is **editorial and
image-led**, not SaaS and not a résumé. Shanni's *artwork is the hero*; the bio,
timeline, and awards support it.

Anti-goal: the generic AI portfolio template (Cormorant + Inter + cream + sage,
stat cards in hero, emoji award timeline). We deliberately avoid it.

## 2. References borrowed (with intent)

- **Are.na / Cargo artist sites** — image-led scale; let the strongest piece be
  large, not a thumbnail in a 4-up grid.
- **Index Magazine / editorial layouts** — Fraunces display serif for headings,
  quiet sans (Outfit) for body; generous whitespace and a warm paper ground.
- **Craig Mod's writing site** — restrained palette, one accent, typography does
  the hierarchy work rather than boxes and shadows.

## 3. Visual system

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#F7F3EE` warm paper | page background |
| `--color-text` | `#1C1917` near-black | body text |
| `--color-accent` | `#C0524A` terracotta | links, eyebrow, year marks |
| `--color-blush` | `#E8B4A8` | hairline dividers |
| `--color-surface` | `#EDE8E2` | section fills, gallery captions |
| `--color-muted` | `#8C7B72` | captions, meta |
| Display | **Fraunces** (variable serif) | headings, name, titles |
| Body | **Outfit** | paragraphs, nav, meta |

Spacing on an 8px unit. Contained max-width 1200px with fluid `clamp()` padding.
Corners are near-flat (4px) — this is a gallery, not a dashboard.

## 4. Page structure (single page, anchored nav)

1. **Hero** — the award-winning *Purple Finch* (oil) large, with name + the
   three roles (Artist · Flutist · Founder) and one CTA to the work.
2. **About** — Shanni's own bio (environment-through-creativity mission) +
   headshot + a short, factual timeline. No grade/school (her request).
3. **Art** — gallery of finished works. **Complete rows only** (3-col grid → 6
   tiles = two full rows). Equal-height tiles via `aspect-ratio: 4/3; cover` and
   equal-height captions so nothing is ragged.
4. **Music** — Bellevue Youth Symphony Flute Choir; solo + ensemble images.
   Portrait crops use `object-position` tuned so faces are never cut off.
5. **Art4Earth Club** — her founder's statement, what the club does (recycled
   art, e.g. cardboard → miniature rooms), the poster she designed, activity
   photos.
6. **Achievements** — factual only: 1st place Washington State (oil), club
   founder, flute choir member. No invented placements.
7. **Contact** — **a contact form, not published emails** (Shanni asked to avoid
   crawlers). Submissions route to the family (client-side `mailto` compose as
   the no-backend fallback; a serverless handler can be wired later).

## 5. Content rules driven by Shanni's answers

- *Purple Finch* = **oil**, **1st place in Washington State** (not "colored
  pencil / Songbird Art Contest"). The "SingBird"/"2026 Songbird" entries are
  the **same** Purple Finch piece — do not present as distinct awards.
- *Haystack* was **drawn in art class, not a competition** → removed from the
  timeline and from any award list.
- *Rescue, Respect, Repeat* (Bowseat Ocean Awareness) **did not win** → show as a
  submission, never as an award.
- Themes: **wildlife and nature**, with a conservation message.
- Music: member of the **Bellevue Youth Symphony Flute Choir**.
- Two music/award certificate images are unlabeled pending Shanni identifying
  them — kept without invented captions.

## 6. Accessibility & responsive

- WCAG AA contrast on all text; visible focus rings; skip-link; `aria` on nav,
  lightbox, and form.
- Touch targets ≥ 44px. Gallery collapses 3→2→1 columns; music blocks stack.
- Images lazy-loaded below the fold; hero eager + `fetchpriority=high`.

## 7. Still open (needs Shanni)

- Real captions for the 6 music photos and the 2 certificate images.
- Which artwork the two "behind the scenes / ocean" process photos belong to.
- Whether a real backend/serverless endpoint should replace the mailto form.
