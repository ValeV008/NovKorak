# Design system and shared shell

## Objective

Establish the approved RUA visual system and reusable site shell before rebuilding individual pages. Preserve the current Pages Router and `next-i18next` setup; this feature is the foundation for every route that follows.

## Source of truth

- `context/features/instructions.md`, sections 1, 5, 8, and 9
- `context/redesign_pages/*.dc.html` for the approved header and footer treatment
- `context/redesign_pages/assets/` for the RUA logo and page media

## Scope

- Move the design tokens, font setup, responsive rules, global reset, selection colour, and reduced-motion handling into `src/styles/main.css` using Tailwind v4 CSS configuration only.
- Replace the legacy visual tokens and Tailwind JavaScript configuration usage. Do not add or retain JavaScript-based Tailwind theme configuration.
- Load Cormorant Garamond (headings) and Mulish (body) with the required weights and apply the prescribed hierarchy, spacing, radii, shadows, paper background, and accessible focus states.
- Rebuild the shared header: RUA branding, route navigation, current-page state, a mobile menu, and SLO/ENG switcher that keeps the active path and updates `html[lang]`.
- Create the shared footer in its home and subpage variants. Keep all user-facing labels in `public/locales/sl/common.json` and `public/locales/en/common.json`.
- Add reusable presentational primitives only where they avoid repetition across page features (for example: section wrapper, button/link treatment, gold rule, checklist, approach card, and footer). Do not build page content in this feature.
- Copy approved assets into `public/assets/` with clear names where they are not already present. Do not use prototype runtime files or image-slot placeholders.

## Implementation notes

- Keep navigation usable at 375px and at desktop widths. At 900px and below, collapse grids, use 20px horizontal padding, left-align formerly justified text, and allow compact navigation; at 520px and below, use 32px h1 and 12px navigation text.
- The shared shell must work for `/`, `/otroci`, `/odrasli`, `/cenik`, and `/o-nas` in both locales. The language switcher must use the existing locale routing rather than a separate client-only translation state.
- Treat all copy, including navigation, buttons, footer text, image alt text, and validation messages, as translation data. Preserve the specified business details exactly.
- Retain `scroll-behavior: smooth`; make every visible focus style keyboard-accessible; disable decorative animation under `prefers-reduced-motion`.

## Acceptance criteria

- The approved colour, typography, spacing, shape, depth, and responsive tokens are available through CSS and used by common components.
- Header and footer render without console warnings, remain keyboard usable, and accurately reflect the selected route and locale.
- `/en/...` and Slovenian routes retain the same pathname when the language is changed and set the corresponding document language.
- No prototype runtime code, placeholder image slots, hard-coded component copy, or JavaScript Tailwind configuration remains in the rebuilt styling path.

## Verification

- Run `npm run build` and the available lint/type checks.
- Check the shared shell at 1440px and 375px on every route in both locales.
- Navigate using keyboard, toggle locale on a subpage, and confirm the pathname, active navigation state, and `html lang` value are correct.
