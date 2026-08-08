# Home page

## Objective

Rebuild the RUA home route (`/`) to match `context/redesign_pages/Nov Korak.dc.html`, using the completed shared shell and the approved local assets.

## Depends on

- `01-design-system-and-shared-shell.md`

## Scope

- Replace the current home composition with the approved sequence: hero, centred introduction, children section, white spacer, older-adults section, approaches, contact, and home footer.
- Implement the hero as a 1.05fr/1fr layout with the approved `hero-main.png`, white border, mint radial shape, and `floaty` animation. Keep the CTAs aligned with the bottom of the media column.
- Build the mint children section and burgundy older-adults section with their mirrored circular-media layouts, decorative circles, six-item checklists, and route CTAs.
- Build the four-card approaches grid with numbered mint circles.
- Rebuild contact information and the contact form. The form must submit a real email through the project’s supported delivery mechanism and expose successful and failed submission states accessibly.
- Move every page string, form label, hint, and message into the two locale message files. Keep testimonial strings if already present, but do not render testimonials.

## Implementation notes

- Reuse shared visual primitives from feature 01 rather than recreating styles locally.
- Use semantic headings, landmark sections, real contact links (`mailto:` and `tel:`), labelled form controls, and a clear focus order.
- Keep the stated contact details verbatim: `ruaterapija@gmail.com`, `+386 40 287 507`, and `Ljubljana in okolica`.
- Provide meaningful alt text from translations for decorative versus informative imagery. Do not render an image-slot placeholder.
- Keep this feature limited to the home page and only add shared code when it is required by the contact form delivery flow.

## Acceptance criteria

- The home page is pixel-close to the approved prototype at 1440px and usable at 375px in both locales.
- The hero CTAs, children CTA, older-adults CTA, and contact navigation lead to the intended routes or section.
- The home form delivers a real email, handles submission failures without losing user input, and communicates status to assistive technology.
- The children, older-adults, approaches, and contact sections preserve the approved hierarchy, colours, media treatment, and checklist content.

## Verification

- Run `npm run build` and focused type/lint checks.
- Check desktop and mobile layouts in both locales; submit a successful form and simulate/verify a failed submission.
- Confirm there are no testimonial cards, console errors, or hydration warnings.
