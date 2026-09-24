# About page

## Objective

Rebuild `/o-nas` from `context/redesign_pages/O nas.dc.html`, preserving its portrait-led editorial layout and the complete education list.

## Depends on

- `01-design-system-and-shared-shell.md`

## Scope

- Implement the 4:5 portrait and two-column about layout, right-aligned `O nas` kicker, gold heading, 220px gold rule, four justified paragraphs, education heading, 21-item list, and subpage footer.
- Use the approved portrait asset and translated descriptive alt text.
- Keep all introductory copy in the locale messages; mark the first paragraph’s prescribed opening slogan with semantic emphasis rather than visual-only markup.
- Store all 21 education and course entries in each locale's `aboutPage.educationItems` messages. Preserve the approved Slovenian wording and provide complete English translations, retaining order, proper names, qualifications, and factual dates.

## Implementation notes

- At 900px and below, collapse to a single column, left-align justified text, and retain a readable image crop without distortion.
- Preserve the approved typographic contrast: Mulish 34px/700 kicker, gold Cormorant heading, narrow gold rule, and gold 7px list markers.
- Translate education entries for English without summarizing, reordering, or omitting details. Keep Slovenian entries unchanged. Do not add biography content beyond the prototype.

## Acceptance criteria

- The portrait/text composition, typography, rule, paragraphs, and education list match the source prototype at desktop and mobile widths.
- Exactly 21 education entries are shown in the approved order: Slovenian in SLO and English in ENG. Language switching updates the entries without leaving the About page.
- The page uses translated user-facing copy where required, meaningful image alt text, semantic heading/list structure, and no hard-coded translated component strings.

## Verification

- Run `npm run build` and focused lint/type checks.
- Compare `/o-nas` at 1440px and 375px in both locales.
- Count the displayed education entries and confirm the image, highlighted opening copy, and list are accessible and console-clean.
