# Current Feature: Pricing page

## Status

In Progress

## Goals

- Rebuild `/cenik` as the approved centred pricing page with the title, gold rule, pricing card, five service rows, translated footnote, and subpage footer.
- Use an accessible semantic table with a caption, header cells scoped to their columns, and clear labels for assistive technology.
- Match the prescribed card treatment: 24px radius, gold header with white 700-weight text, and alternating white/paper rows.
- Keep the page as a `min-height: 100vh` flex column so the footer is bottom-aligned on short viewports.
- Add all visible pricing text, table labels/caption, and footnote content to both locale message files; preserve Slovenian service names and prices exactly.
- Keep the table legible with no horizontal scrolling at 375px, and preserve locale switching and document language on both locales.


## Notes

- Source specification: `context/features/05-pricing-page.md`.
- Approved prototype reference: `context/redesign_pages/Cenik.dc.html`.
- Depends on the completed design system and shared shell feature.
- Render only the title, rule, pricing table, footnote, and footer. Do not render `intro`, `ctaTitle`, or `ctaText` from the prototype copy.
- Verification target: `npm run build`, focused lint/type checks, browser accessibility inspection, and 1440px/375px checks in Slovenian and English.



## History

<!-- Keep this updated. Earliest to latest-->

- 2026-08-09: Completed the RUA design system and shared shell, including CSS tokens, responsive typography, shared header/footer, locale switching, and approved logo assets.
- 2026-08-09: Completed the RUA home page, including localized sections, responsive media layouts, approaches grid, and Netlify contact form handling.
- 2026-08-09: Completed the children and adolescents page, including localized copy, responsive layouts, approach cards, and reusable accessible video playback.
- 2026-08-09: Completed the older adults page, including localized content and media, responsive burgundy treatment, shared video playback, and approach cards.
