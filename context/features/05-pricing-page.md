# Pricing page

## Objective

Rebuild `/cenik` from `context/redesign_pages/Cenik.dc.html` as an accessible pricing table whose footer remains at the bottom of short viewports.

## Depends on

- `01-design-system-and-shared-shell.md`

## Scope

- Implement the centred title, gold rule, pricing card, five-row service table, translated footnote, and subpage footer.
- Use a semantic `<table>` with a visually appropriate caption, a header row, and `scope` on header cells; do not simulate a table using generic `div` elements.
- Apply the prescribed 24px card treatment, gold header with white 700-weight text, and alternating paper/card rows.
- Structure the page as a flex column with `min-height: 100vh` so the footer sits at the viewport bottom when content is short.
- Add visible text, table labels, captions, and footnote translations to both locale message files.

## Implementation notes

- Render only the title, rule, table, footnote, and footer specified by the approved design. Do not render the prototype copy fields `intro`, `ctaTitle`, or `ctaText`.
- Preserve service names and prices exactly in the Slovenian translation; make the English equivalents clear while retaining the stated price values.
- Make the table readable and scroll-free at 375px through responsive type, padding, and column handling.

## Acceptance criteria

- The pricing table is semantic, keyboard/screen-reader understandable, and visually matches the approved card at desktop and mobile widths.
- The page displays exactly five services with the specified prices and no additional promotional section.
- Footer positioning, locale switching, and document language work on both locales.

## Verification

- Run `npm run build` and focused lint/type checks.
- Inspect table semantics with browser accessibility tools and check 1440px/375px layouts in SLO and ENG.
- Confirm the footer is bottom-aligned on a tall viewport and no horizontal scrolling occurs on mobile.
