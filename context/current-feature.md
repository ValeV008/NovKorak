# Current Feature: Children and adolescents page

## Status

In Progress

## Goals

- Rebuild the localized `/otroci` page from the approved prototype, including the title, intro/video layout, mint checklist section, follow-up copy, approach cards, and shared subpage footer.
- Add complete SLO and ENG children-page copy, video labels, alt text, and approach-card content to the locale message files; keep React components free of hard-coded copy.
- Implement a reusable, accessible client-side video player for children and older-adults routes with native controls, a non-blocking gold overlay, and an accessible play/pause pill.
- Load locale-specific video sources and posters reliably when the locale changes, without the prototype seek workaround.
- Preserve the approved responsive design at desktop and 375px mobile widths, with playable video and no browser-console errors.

## Notes

- Source specification: `context/features/03-children-page.md`.
- Prototype reference: `context/redesign_pages/Otroci.dc.html`; use the approved children video, locale-specific posters, and the four specified approach icons from its assets.
- Depends on the completed design system and shared shell feature (`01-design-system-and-shared-shell.md`).
- The video player must be reusable unchanged by the future `/odrasli` route and support mouse, touch, keyboard, and native video controls.
- Verify with `npm run build`, focused lint/type checks, desktop and 375px viewport interaction checks, locale switching, and console-error inspection.


## History

<!-- Keep this updated. Earliest to latest-->

- 2026-08-09: Completed the RUA design system and shared shell, including CSS tokens, responsive typography, shared header/footer, locale switching, and approved logo assets.
- 2026-08-09: Completed the RUA home page, including localized sections, responsive media layouts, approaches grid, and Netlify contact form handling.
