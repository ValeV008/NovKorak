# Current Feature

## Status

Completed

## Goals

- Restore reliable Netlify Forms submissions from the homepage. Netlify's form-submission email notification is configured in the project.


## Notes

- Netlify Forms is enabled and detects the `contact` form, but currently retains zero submissions. The homepage posted to `/`, which is handled by the Next.js server function. The AJAX request now targets the dedicated static form-definition file, and the static and rendered forms have matching POST, honeypot, and input configuration.



## History

<!-- Keep this updated. Earliest to latest-->

- 2026-08-09: Completed the RUA design system and shared shell, including CSS tokens, responsive typography, shared header/footer, locale switching, and approved logo assets.
- 2026-08-09: Completed the RUA home page, including localized sections, responsive media layouts, approaches grid, and Netlify contact form handling.
- 2026-08-09: Completed the children and adolescents page, including localized copy, responsive layouts, approach cards, and reusable accessible video playback.
- 2026-08-09: Completed the older adults page, including localized content and media, responsive burgundy treatment, shared video playback, and approach cards.
- 2026-08-09: Completed the pricing page, including the localized semantic service table, responsive card layout, and subpage footer.
- 2026-08-10: Completed the About page, including localized portrait-led layout, semantic introductory copy, and the approved 21-item education list.
- 2026-08-12: Restored homepage Netlify Forms submissions by routing AJAX requests to the static form definition, aligning form metadata, and adding a honeypot.
