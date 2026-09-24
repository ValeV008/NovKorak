# Agent Guide

## Required Context

Read these before making changes:

- [Coding standards](context/coding-standards.md): general TypeScript and React conventions, subject to the implementation corrections below.
- [AI interaction guidelines](context/ai-interaction.md): scope, communication, and feature workflow. Branch creation, commits, merges, and deletions require explicit user permission.
- [Rebuild specification](context/features/instructions.md): approved design, content, accessibility, and acceptance criteria; consult the relevant [page specification](context/features/) for page-specific work.
- [Current feature](context/current-feature.md): active scope and completed work. A blank feature template is not a request to restart the rebuild.

## Current Implementation

The coding standards contain stale App Router and styling assumptions. For this existing application, follow these verified conventions unless a migration is explicitly requested:

- Use Next.js **Pages Router**, not App Router or Server Actions. Follow [the home route](src/pages/index.tsx) for `getStaticProps` and translation loading, and [the app entry point](src/pages/_app.tsx) for global setup.
- Keep routes thin; page content lives in [components](src/components/). Reuse [SiteShell](src/components/SiteShell.tsx), the shared header/footer, and [VideoPlayer](src/components/VideoPlayer.tsx).
- Configure Tailwind v4 through `@theme` in [the main stylesheet](src/styles/main.css). Reuse its `rua-*` tokens and component styles; do not create a JavaScript Tailwind config or an App Router stylesheet.
- Match the approved RUA prototype, not the generic dark-mode-first or shadcn guidance. Use the existing Headless UI and Heroicons dependencies where appropriate. Treat [prototype files](context/redesign_pages/) as design references, not production runtime code; do not publish the internal handoff page.
- Keep UI copy in both [Slovenian](public/locales/sl/common.json) and [English](public/locales/en/common.json) translation files. Follow [locale configuration](next-i18next.config.js) and preserve the current route when switching languages. Maintain all 21 education entries in each locale's `aboutPage.educationItems`, preserving Slovenian wording and providing complete English translations with matching order and factual details.
- When changing contact fields, keep [ContactForm](src/components/ContactForm.tsx) and [the static Netlify form definition](public/netlify-form-detection.html) synchronized, including field names, `form-name`, and the honeypot. Preserve the URL-encoded POST to `/netlify-form-detection.html`. Localhost deliberately rejects submissions; real delivery requires a Netlify deployment.

## Commands And Verification

Use [package.json](package.json) as the command source of truth. It declares Node `>=22 <27` and npm as the package manager. Use `npm ci` for reproducible installs and `npm install` for dependency changes; commit [package-lock.json](package-lock.json) and do not introduce other lockfiles.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start local Next.js development |
| `npm run build-types` | TypeScript validation without emitting files |
| `npm run lint` | Check source ESLint rules |
| `npm run build` | Verify the production build |

- There is currently no `test` script or automated test suite. Do not run the obsolete `npm run test` instruction or report unit tests as passed; disclose this gap.
- For application changes, run the relevant focused checks, then type checking, lint, and the production build before declaring completion. Report blockers without fixing unrelated failures.
- For UI changes, verify affected routes in both locales at desktop and mobile widths against the specification, including relevant navigation, media, and form states. Existing [Playwright CLI guidance](.claude/skills/playwright-cli/SKILL.md) supports browser checks; save artifacts under `output/playwright/`.
- For instruction-only changes, validate links, command accuracy, and the diff; an application build is unnecessary.