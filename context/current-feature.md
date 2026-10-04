# Current Feature

## Status

Completed

## Goals

Generate an XML sitemap with accurate `lastmod` values and reciprocal Slovenian/English alternate links, then enable IndexNow notification on Netlify.

## Notes

The sitemap is generated before each production build with per-route `lastmod` values and reciprocal Slovenian/English `xhtml:link` alternates. A local Netlify plugin submits the generated sitemap URLs to IndexNow after successful production deployments; preview deployments are skipped. Type checking, lint, and the production build passed. No automated test suite is configured.

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
- 2026-10-04: Updated the homepage lead to state the at-home Ljubljana service area in both locales and refined its visual treatment.
- 2026-10-04: Generated the localized sitemap during production builds with route-specific `lastmod` values and reciprocal language alternates. Added a Netlify IndexNow deployment plugin with a published verification key to notify IndexNow-compatible search engines after production deployments.
