# Current Feature: Design system and shared shell

## Status

In Progress

## Goals

- Establish the approved RUA colour, typography, spacing, shape, depth, responsive, focus, and reduced-motion system in CSS using Tailwind v4 CSS configuration only.
- Rebuild the shared header and both footer variants with responsive keyboard-accessible navigation, correct active-route state, and locale-preserving SLO/ENG switching.
- Add only the reusable presentational components and approved media assets needed to support all five routes without implementing page-specific content.
- Keep every user-facing string in the locale message files, preserve the required business details, and remove prototype/legacy styling dependencies from the rebuilt path.

## Notes

- Feature spec: `context/features/01-design-system-and-shared-shell.md`.
- Source design: `context/features/instructions.md` sections 1, 5, 8, and 9; `context/redesign_pages/*.dc.html`; and `context/redesign_pages/assets/`.
- Preserve the current Pages Router and `next-i18next` setup. Do not port the static prototype runtime or use image-slot placeholders.
- Primary affected areas: `src/styles/main.css`, `src/components/Header.tsx`, shared footer/primitives, `public/locales/sl/common.json`, `public/locales/en/common.json`, and approved files under `public/assets/`.
- Support `/`, `/otroci`, `/odrasli`, `/cenik`, and `/o-nas` in both locales. Verify at 1440px and 375px, including keyboard navigation and `html[lang]` after locale changes.

## History

<!-- Keep this updated. Earliest to latest-->
