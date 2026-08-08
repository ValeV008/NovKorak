# Older adults page

## Objective

Rebuild `/odrasli` from `context/redesign_pages/Odrasli.dc.html`, reusing the subpage structure and video player delivered for the children route.

## Depends on

- `01-design-system-and-shared-shell.md`
- `03-children-page.md`

## Scope

- Implement the approved older-adults title, two-column introductory copy/video layout, burgundy checklist section, follow-up paragraphs, 2×2 approaches grid, and subpage footer.
- Use the approved older-adults video and locale-specific poster, plus `icon-bobath-odrasli.png`, `icon-taping.png`, `icon-montessori-odrasli.png`, and `icon-umetnost.png`.
- Configure the shared video player with the older-adults media and translated labels; do not duplicate video interaction code.
- Add the older-adults content, alt text, and approach data to both locale message files.

## Implementation notes

- Follow the children-page semantic structure, but apply the older-adults visual treatment precisely: burgundy background, white headings, pale rose lead text, pale list text, gold kicker and ticks.
- Keep mobile content single-column with readable left-aligned copy and preserve the video controls at small sizes.
- Treat the prototype as the design authority. Do not add sections, testimonial rendering, or marketing content not in the source.

## Acceptance criteria

- The page matches the approved desktop and mobile prototype, including the burgundy checklist block and adult-specific icons/content.
- Video playback, overlay, native controls, corner pill, and locale media swap work identically to the children page.
- All text is localized except any content explicitly designated as shared or non-translated by the source specification.

## Verification

- Run `npm run build` and focused lint/type checks.
- Compare `/odrasli` at 1440px and 375px in both locales.
- Play/pause the video, switch locale during and outside playback, and confirm no stale source, poster, or console warning remains.
