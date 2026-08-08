# RUA — Next.js rebuild instructions

You are given a folder In C:\Endava\EndevLocal\NovKorak\context\redesign_pages there are of a working static prototype of the RUA occupational-therapy website (5 HTML pages + `assets/`). Rebuild it as a **Next.js** application. This document is the full specification: page structure, content, design tokens, behaviour, and known gaps.

Do not redesign. The prototype is the approved design; reproduce it faithfully, then improve only the things listed under "Required improvements".

--

## 1. What the prototype is

Each page is a single HTML file rendered by a small in-house runtime (`support.js`) that reads
a `<x-dc>` template with `{{ }}` holes and a `class Component extends DCLogic` script block
(a React class component without `render()`; `renderVals()` returns the template's values).

**Do not port the runtime.** Read each file as a spec:

| Prototype file                          | Meaning                                                     |
| --------------------------------------- | ----------------------------------------------------------- |
| `<x-dc>…</x-dc>` markup                 | The JSX to write. Inline `style="…"` is real CSS.           |
| `{{ t.xyz }}`                           | A translation key — see the `copy` object in the same file. |
| `<sc-for list="{{ items }}" as="item">` | `items.map(item => …)`                                      |
| `<sc-if value="{{ flag }}">`            | `{flag && …}`                                               |
| `onClick="{{ fn }}"`, `ref="{{ r }}"`   | Normal React props.                                         |
| `<image-slot id="…">`                   | **A placeholder with no real image file.** See §7.          |
| `style-focus="…"`                       | A `:focus` style; move to CSS.                              |

Source pages:

| File                         | Route to build                             |
| ---------------------------- | ------------------------------------------ |
| `Nov Korak.dc.html`          | `/` (home)                                 |
| `Otroci.dc.html`             | `/otroci` — children & adolescents         |
| `Odrasli.dc.html`            | `/odrasli` — older adults                  |
| `Cenik.dc.html`              | `/cenik` — pricing                         |
| `O nas.dc.html`              | `/o-nas` — about                           |
| `Predaja razvijalcu.dc.html` | Internal handoff doc — **do not publish**. |

Ignore `support.js`, `image-slot.js`, `doc-page.js`, `.image-slots.state.json`, and any
`*.html` bundle in the zip root. They are prototype tooling.

## 5. Design tokens

```
--gold:        #F5BA01   accents, buttons, rules, active states
--burgundy:    #951050   older-adults section background
--rose:        #b8005e   link colour, active nav, footer column headings
--mint:        #dcfffc   children section background, icon circles
--teal:        #0f7d75   text/ticks on mint
--teal-dark:   #123f3b   headings on mint
--teal-body:   #2c5551 / #234a47   body text on mint
--ink:         #2f3d47   primary text
--ink-soft:    #4a5862   body copy
--ink-muted:   #5a6872   card copy
--ink-faint:   #8a97a0   footnotes, copyright
--paper:       #FDFCF7   page background (also header/footer)
--card:        #ffffff   cards, table rows
--row-alt:     #f7f5ec   alternating price rows
--hero-title:  #47412FDD home h1
```

On burgundy: headings `#fff`, lead `#f4d3e1`, list text `#fbe4ee`, kicker gold.

**Type**

- Headings: **Cormorant Garamond** 600 (700 on some subpage h2), sizes:
  home h1 `clamp(44px, 4.6vw, 74px)` / subpage h1 56–58px / section h2 40–44px / card h3 23–24px.
- Body: **Mulish** 400–800. Body 16–19px, cards 15px, nav 15px, footnotes 13–14px.
- `line-height: 1.6` body, `1.03–1.1` headings. `text-wrap: balance` on h1s.

**Shape & depth**

- Radii: pills `999px`, cards `24–28px`, media `20–28px`, inputs `12px`, icon squares `14px`.
- Shadows: cards `0 16px 40px rgba(47,61,71,0.08)`, media `0 24px 60px rgba(47,61,71,0.15)`,
  hero `0 30px 60px rgba(47,61,71,0.18)`, form `0 24px 60px rgba(47,61,71,0.1)`.
- Section padding `70–90px 48px`; content max-widths 900 / 1000 / 1100 / 1200 / 1280px.
- `::selection { background: #F5BA01; color: #2b3640; }`, `scroll-behavior: smooth`.
- Hero image floats: `@keyframes floaty` — `translateY(0 → -14px → 0)`, 7s ease-in-out infinite.
  Wrap in `@media (prefers-reduced-motion: reduce)` and disable.

**Breakpoints** (currently `!important` overrides — reimplement properly):

- `≤900px`: all multi-column grids collapse to one column, gap 30px; horizontal padding 20px;
  h1 40px, h2 30px; justified text becomes left-aligned; nav wraps at 13px.
- `≤520px`: h1 32px, nav 12px.

---

## 6. Page-by-page

### Home (`/`)

1. **Hero** — 2-col grid `1.05fr 1fr`, aligned to the top of both columns. Left: h1
   `Delovna terapija` + gold `za majhne in velike`, lead paragraph, then the button row pushed to
   the bottom (`margin-top: auto`) so it aligns with the bottom of the photo — gold CTA +
   "Spoznajte področja" text link with a 2px gold underline. Right: `assets/hero-main.png`,
   3:2, 28px radius, 8px white border, floaty animation. A soft mint radial blob sits behind the
   top-left corner.
2. **Intro** — centred, max 900px: h2 "Vloga delovne terapije", gold rule, 19px paragraph.
3. **Children** — mint `#dcfffc`, 90px padding, grid `0.9fr 1.1fr`: circular photo (400px, 10px
   white border) with a gold circle behind its top-left and a "Več o terapiji" button under it;
   right column kicker / h2 / lead / list heading / 6-item checklist.
4. **72px white spacer.**
5. **Older adults** — burgundy `#951050`, mirrored layout (text left, circular photo right with a
   mint circle behind its bottom-right), gold ticks.
6. **Approaches** — 4-column card grid, each card with a numbered mint circle (01–04).
7. **Contact** — grid `0.85fr 1.15fr`. Left: heading, lead, and three contact rows
   (gold `@` circle → ruaterapija@gmail.com, mint `T` circle → +386 40 287 507, burgundy pin icon
   → Ljubljana in okolica). Right: white card with the form.
8. **Footer** (home variant).

The `testimonials` arrays exist in both locales but **are not rendered** on the page. Keep them
out of the build; leave the strings in the message files only if the client wants them later.

### Children (`/otroci`)

Centred h1 (`Delovna terapija` + gold `za otroke in mladostnike`) → 2-col grid: justified body
paragraphs left, video right → mint section with the "Z delovno terapijo v RUA, **otroci** lahko:"
checklist (6 `{pre,bold,post}` items) → three plain paragraphs (`q1–q3`) → "Pristopi obravnave",
a 2×2 grid of the four approach cards with icons
`icon-bobath.png`, `icon-taping.png`, `icon-montessori.png`, `icon-umetnost.png` → subpage footer.

### Older adults (`/odrasli`)

Same skeleton with its own copy, its own video, and icons
`icon-bobath-odrasli.png`, `icon-taping.png`, `icon-montessori-odrasli.png`, `icon-umetnost.png`.
Its video also has a persistent **Predvajaj / Ustavi** pill in the top-right corner of the frame
(dark translucent, white text, play/pause glyph) — keep it, and add the same control to the
children page for consistency.

### Pricing (`/cenik`)

Centred h1 `Cenik` + gold `storitev`, gold rule, then a white 24px-radius card:
a gold header row (`Storitev` / `Cena`, white 700 text) and 5 rows, alternating
`#ffffff` / `#f7f5ec`:

| Storitev                                            | Cena          |
| --------------------------------------------------- | ------------- |
| Prva obravnava (pregled dokumentacije in obravnava) | 75 €          |
| Paket 3 / 6 obravnav                                | 200 € / 390 € |
| Kinesiotaping                                       | 10 €          |
| Posvet prek daljave / telerehabilitacija (30 min)   | 30 €          |
| Delovnoterapevtsko poročilo                         | 30 €          |

Footnote below, centred, 14px `#8a97a0`:
`*Terapije potekajo na domu uporabnika. Za kraje izven našega rednega delovanja se obračunajo potni stroški po uradni kilometrini.`
The page uses a flex column with `min-height: 100vh` so the footer stays at the bottom.
`intro`, `ctaTitle` and `ctaText` are in the copy object but **deliberately not rendered** — leave them out.
Render the table as a real `<table>` with `<caption>`/`<th scope>` for accessibility, styled to match.

### About (`/o-nas`)

2-col grid: 4:5 portrait left, right column right-aligned kicker (`O nas`, Mulish 34px/700) and
gold Cormorant h1, a 220px gold rule, then four justified paragraphs (the first containing the
bold-initial slogan). Below: "Opravljena izobraževanja in tečaji" — a 21-item bulleted list with
7px gold dots. The list is **not translated** (Slovenian only in both locales); keep it that way
and copy all 21 entries verbatim, including bracketed dates.

### Video player behaviour

Shared component. Frame: 16:9, 24px radius, `object-fit: contain`, `#2f3d47` letterbox,
native `controls`, `playsInline`, `preload="auto"`, and a `poster`.

- Large gold circular play overlay (86px, play glyph) covering the frame **except the bottom 56px**
  so it never blocks the native control bar; hidden while playing, shown again on pause.
- Clicking the video body toggles play/pause.
- The corner Predvajaj/Ustavi pill (see above).
- On mount the prototype seeks to `0.1s` to force a first frame — unnecessary once a real
  `poster` is set; drop it.

## 8. Business details (verbatim — do not alter)

- Name: **RUA** — Rehabilitacija · Umetnost · Aktivnost
- Practitioner: **Tina Zadravec**, magistra umetnostne terapije, diplomirana delovna terapevtka
- Email: **ruaterapija@gmail.com**
- Phone: **+386 40 287 507**
- Service area: **Ljubljana in okolica** (therapy takes place at the client's home)
- Footer line: `© 2026 RUA, delovna terapija`

---

## 9. Definition of done

- All five pages exist in both locales, pixel-close to the prototype at 1440px and usable at 375px.
- Every string comes from the message files; no hard-coded copy in components.
- Language switch preserves the current page; locale is reflected in the URL and in `<html lang>`.
- Videos play, pause, and swap correctly on locale change on iOS Safari and Android Chrome.
- Contact form delivers a real email and handles failure.
- Lighthouse ≥ 90 for Performance, Accessibility, Best Practices and SEO on every page.
- No console errors or warnings.
