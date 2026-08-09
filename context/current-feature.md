# Current Feature: Home page

## Status

In Progress

## Goals

- Rebuild the `/` route with the approved hero, introduction, children, older-adults, approaches, contact, and home-footer sequence in both locales.
- Match the specified responsive layouts, colours, media treatments, checklists, route/contact CTAs, and four-card approaches grid using existing shared primitives and approved assets.
- Move all home-page copy, form labels, hints, status messages, and alt text into both locale message files; do not render testimonials.
- Deliver the contact form through the supported email mechanism, preserve submitted values on failure, and announce accessible success and failure states.
- Verify desktop and mobile layouts in both locales, form success and failure handling, and clean build/type/lint output without console or hydration warnings.

## Notes

- Source specification: `context/features/02-home-page.md`; visual reference: `context/redesign_pages/Nov Korak.dc.html`.
- Depends on completed feature 01 design system and shared shell; reuse its visual primitives rather than recreating local styles.
- Keep business details verbatim: `ruaterapija@gmail.com`, `+386 40 287 507`, and `Ljubljana in okolica`.
- Limit changes to the home page, except shared code required for contact-email delivery.

## History

<!-- Keep this updated. Earliest to latest-->

- 2026-08-09: Completed the RUA design system and shared shell, including CSS tokens, responsive typography, shared header/footer, locale switching, and approved logo assets.
