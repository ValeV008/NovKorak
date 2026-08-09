# Current Feature: About page

## Status

In Progress

## Goals

- Rebuild `/o-nas` from `context/redesign_pages/O nas.dc.html` with the approved 4:5 portrait-led two-column editorial layout and subpage footer.
- Render localized introductory copy with semantic emphasis for the prescribed opening slogan, the approved typographic hierarchy, and meaningful translated portrait alt text.
- Display the complete 21-item education and course list verbatim, in its approved order and Slovenian-only form, for both locales.
- Preserve responsive behaviour: collapse to one column and left-align body copy at 900px and below while retaining an undistorted, readable portrait crop.
- Verify desktop and mobile layouts in both locales, accessibility of the image/emphasis/list, and a clean build and focused lint/type checks.


## Notes

- Spec: `context/features/06-about-page.md`
- Prototype reference: `context/redesign_pages/O nas.dc.html`
- Dependency: `context/features/01-design-system-and-shared-shell.md`
- Keep translated user-facing copy in locale messages; do not add biography content beyond the prototype.
- Preserve the Mulish 34px/700 right-aligned kicker, gold Cormorant heading, 220px gold rule, justified paragraphs, and 7px gold list markers.
- Affected area: `/o-nas`, its localized message files, shared/non-localized education content, and existing shared subpage components/styles as needed.



## History

<!-- Keep this updated. Earliest to latest-->

- 2026-08-09: Completed the RUA design system and shared shell, including CSS tokens, responsive typography, shared header/footer, locale switching, and approved logo assets.
- 2026-08-09: Completed the RUA home page, including localized sections, responsive media layouts, approaches grid, and Netlify contact form handling.
- 2026-08-09: Completed the children and adolescents page, including localized copy, responsive layouts, approach cards, and reusable accessible video playback.
- 2026-08-09: Completed the older adults page, including localized content and media, responsive burgundy treatment, shared video playback, and approach cards.
- 2026-08-09: Completed the pricing page, including the localized semantic service table, responsive card layout, and subpage footer.
