# Current Feature: npm Standardization and Education Localization

## Status

In Progress

## Goals

- Standardize project installation, scripts, Netlify builds, Git hooks, and documentation on npm; remove Yarn configuration and its lockfile without uninstalling Yarn system-wide.
- Use a single npm lockfile that supports `npm ci`, preserve the existing dependency override constraint, and avoid unrelated dependency upgrades.
- Render all 21 About page education entries from locale messages: unchanged Slovenian content in Slovenian and complete English translations in English, preserving entry order, names, qualifications, and factual dates.
- Update conflicting specifications and agent guidance to require localized education entries; remove obsolete shared content once unused.
- Verify both About page locales at 1440px and 375px, including language switching, entry counts, readable wrapping, and absence of console errors.
- Pass `npm ci`, `npm run build-types`, `npm run lint`, and `npm run build`; report focused content/browser checks and any validation blockers without claiming an automated test suite exists.

## Notes

- Loaded from the request: "Remove Yarn and standardize on npm; localize the About page education list into English."
- Follow the implementation plans below and [project instructions](../AGENTS.md). Keep Pages Router, the approved layout, and unrelated application behavior unchanged.
- Package-manager scope: [package.json](../package.json), lockfiles, Yarn configuration, [Netlify](../netlify.toml), [pre-commit hook](../.husky/pre-commit), [README](../README.md), and agent guidance.
- Localization scope: [AboutPage](../src/components/AboutPage.tsx), both locale files, removal of the obsolete shared education content, and the linked About/rebuild specifications. Both specifications now require a localized education list.
- Implementation is in progress on `feature/npm-standardization-and-education-localization`. Commits, merges, pushes, and branch cleanup are outside this start action.

## Todo

Both tasks are implemented and validated. Feature review and completion remain separate workflow actions.

- [x] Remove Yarn from the project and standardize on npm.
- [x] Fix the English About page education list.

### Yarn Removal Plan

1. Replace Yarn's `resolutions` with npm's `overrides` in [package.json](../package.json), preserving the existing dependency constraint, and update its package-manager declaration and build-stats command for npm.
2. Generate an npm lockfile, preserving resolved dependency versions where possible and reviewing any changes. Remove the Yarn lockfile and configuration once the replacement is validated.
3. Update [Netlify](../netlify.toml), the [pre-commit hook](../.husky/pre-commit), [README](../README.md), and [agent guidance](../AGENTS.md) to use npm consistently. Remove obsolete Yarn-specific ignore entries. Do not uninstall Yarn system-wide.
4. Verify reproducible installation with `npm ci`, then run `npm run build-types`, `npm run lint`, and `npm run build`. Check that no active project scripts or configuration require Yarn and that only the npm lockfile remains.

### Education Localization Plan

Original diagnosis: [AboutPage](../src/components/AboutPage.tsx) rendered a shared Slovenian array directly instead of using locale messages. Both `aboutPage` objects lacked education entries; older `aboutMePage.trainingList` translations were incomplete and unused by this page.

1. Update the [About specification](features/06-about-page.md) and [rebuild specification](features/instructions.md) to remove the outdated requirement that both locales display Slovenian entries. The user's corrected requirement is Slovenian entries in Slovenian and English entries in English.
2. Add `aboutPage.educationItems` to the [Slovenian](../public/locales/sl/common.json) and [English](../public/locales/en/common.json) locale files. Preserve all 21 Slovenian entries and provide complete English translations without summarizing or omitting details. Retain order, proper names, qualifications, and factual dates; translate month names where appropriate.
3. Extend the About page copy type and render the localized array through the existing `useTranslation("common")` flow. Remove the obsolete shared-list import and retire the shared content file once no references remain.
4. Check that each locale has exactly 21 corresponding entries and no missing translation keys. Verify `/o-nas` and `/en/o-nas` at 1440px and 375px, including language switching, English text, unchanged Slovenian text, readable wrapping, and console errors.
5. Run `npm run build-types`, `npm run lint`, and `npm run build`. There is no automated test suite; record the focused content and browser checks performed.

## Implementation And Verification

- Replaced project-local Yarn configuration and lockfile with npm metadata, an npm lockfile, npm build commands, and an npm-based pre-commit hook. The `i18next-fs-backend` constraint is preserved as an npm override.
- Fixed the review findings by regenerating the npm lockfile in an empty temporary directory from the committed Yarn baseline (`b48855ac75b4cb82d8d14f4c26134c1d376ca49f`). The original version-preservation claim was incorrect: its check compared against a Yarn file that npm had already rewritten.
- All direct dependencies and all 522 separately downloaded package entries now match the committed baseline versions and integrity hashes, with complete registry URLs and integrity metadata. Six additional entries are bundled within the unchanged Tailwind WebAssembly archive; five legitimately omit their own download metadata because the parent archive's matching checksum protects them. The comparison report is a local, unversioned verification artifact.
- Added 21 entries to each locale's `aboutPage.educationItems` and updated AboutPage to render them. Confirmed the Slovenian array exactly matches the removed shared content, with unchanged order and text. Updated the About/rebuild specifications and agent guidance.
- Reran and passed `npm ci --no-audit --no-fund`, `npm run build-types`, `npm run lint`, and `npm run build` after the lockfile repair on Node 26.10.0 / npm 11.19.1, restoring Next.js 15.5.22 and React 19.2.8. Netlify remains configured for Node 22; deployment itself was not run.
- npm reported baseline dependency deprecations and install-script policy warnings for core-js, sharp, and unrs-resolver. Installation, the production build, and browser image loading still passed; no unrelated dependency changes were made to suppress warnings.
- Reran browser checks after the lockfile repair for `/o-nas` and `/en/o-nas` at 1440px and 375px: 21 entries matching locale messages, correct document language, loaded portrait, no horizontal overflow or overlapping entries, and no console/page errors. Switching languages in both directions preserved the About route and updated all entries.
- Screenshots: `output/playwright/about-sl-1440.png`, `output/playwright/about-en-1440.png`, `output/playwright/about-sl-375.png`, and `output/playwright/about-en-375.png`.
- No automated unit-test suite exists. Validation used focused content assertions, the repository's type/lint/build commands, and browser checks.
- Local preview: `http://localhost:3100/en/o-nas/`. No commits, merges, pushes, or branch cleanup performed.

## History

<!-- Keep this updated. Earliest to latest-->

- 2026-08-09: Completed the RUA design system and shared shell, including CSS tokens, responsive typography, shared header/footer, locale switching, and approved logo assets.
- 2026-08-09: Completed the RUA home page, including localized sections, responsive media layouts, approaches grid, and Netlify contact form handling.
- 2026-08-09: Completed the children and adolescents page, including localized copy, responsive layouts, approach cards, and reusable accessible video playback.
- 2026-08-09: Completed the older adults page, including localized content and media, responsive burgundy treatment, shared video playback, and approach cards.
- 2026-08-09: Completed the pricing page, including the localized semantic service table, responsive card layout, and subpage footer.
- 2026-08-10: Completed the About page, including localized portrait-led layout, semantic introductory copy, and the approved 21-item education list.
- 2026-08-12: Restored homepage Netlify Forms submissions by routing AJAX requests to the static form definition, aligning form metadata, and adding a honeypot.
