# Current Feature

## Status

Completed

## Goals

Replace the homepage children-section image `puncka.jpg` with the optimized `image_kaj_je_terapija.jpg` asset.

## Notes

Preserved the existing circular layout and localized alternative text. The portrait image fills the circle horizontally with a top-aligned vertical crop so the child's face remains visible. Type checking, lint, and the production build passed. No automated test suite is configured.

## History

<!-- Keep this updated. Earliest to latest-->

- 2026-08-09: Completed the RUA design system and shared shell, including CSS tokens, responsive typography, shared header/footer, locale switching, and approved logo assets.
- 2026-08-09: Completed the RUA home page, including localized sections, responsive media layouts, approaches grid, and Netlify contact form handling.
- 2026-08-09: Completed the children and adolescents page, including localized copy, responsive layouts, approach cards, and reusable accessible video playback.
- 2026-08-09: Completed the older adults page, including localized content and media, responsive burgundy treatment, shared video playback, and approach cards.
- 2026-08-09: Completed the pricing page, including the localized semantic service table, responsive card layout, and subpage footer.
- 2026-08-10: Completed the About page, including localized portrait-led layout, semantic introductory copy, and the approved 21-item education list.
- 2026-08-12: Restored homepage Netlify Forms submissions by routing AJAX requests to the static form definition, aligning form metadata, and adding a honeypot.
- 2026-09-03: Set the approved orange RUA logo as the browser tab icon across the site.
- 2026-09-03: Added a localized XML sitemap and robots.txt discovery directive for search indexing.
- 2026-09-24: Standardized the project on npm with baseline-preserving dependency versions and integrity metadata; localized all 21 About page education entries into English while preserving Slovenian text. Updated specifications and agent guidance, excluded local verification artifacts, and passed clean installation, types, lint, production build, and bilingual desktop/mobile browser checks.
- 2026-10-04: Replaced the homepage children-section image with `image_kaj_je_terapija.png` and set it to fill the circular frame horizontally while keeping the child's face visible; types, lint, and production build passed.
