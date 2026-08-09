# Current Feature: Older adults page

## Status

In Progress

## Goals

- Rebuild `/odrasli` from the approved prototype with the localized title, introductory copy/video layout, burgundy checklist section, follow-up copy, approach cards, and shared subpage footer.
- Add all older-adults copy, alt text, media references, and approach data to both locale message files; retain locale-aware URL and document language behaviour.
- Reuse the shared video player with adult-specific video and poster assets, translated controls, native controls, playback overlay, and locale media swapping.
- Match the prescribed burgundy visual treatment and ensure the page remains a readable, single-column layout on mobile.
- Verify production build, focused lint/type checks, desktop and mobile layouts in both locales, and video/language-switch behaviour without browser warnings.


## Notes

- Specification: `context/features/04-older-adults-page.md`.
- Prototype authority: `context/redesign_pages/Odrasli.dc.html`; depend on the completed shared shell and children page.
- Use adult media/icons: `icon-bobath-odrasli.png`, `icon-taping.png`, `icon-montessori-odrasli.png`, and `icon-umetnost.png`.
- Do not duplicate video interaction code or add unapproved sections, testimonials, or marketing content.
- Key visual constraints: burgundy checklist background, white headings, pale rose lead text, pale checklist text, and gold kicker/ticks.



## History

<!-- Keep this updated. Earliest to latest-->

- 2026-08-09: Completed the RUA design system and shared shell, including CSS tokens, responsive typography, shared header/footer, locale switching, and approved logo assets.
- 2026-08-09: Completed the RUA home page, including localized sections, responsive media layouts, approaches grid, and Netlify contact form handling.
- 2026-08-09: Completed the children and adolescents page, including localized copy, responsive layouts, approach cards, and reusable accessible video playback.
