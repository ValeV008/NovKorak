# Children and adolescents page

## Objective

Rebuild `/otroci` from `context/redesign_pages/Otroci.dc.html` and introduce the reusable accessible video player used by this route and the older-adults route.

## Depends on

- `01-design-system-and-shared-shell.md`

## Scope

- Implement the approved subpage structure: centred title, two-column introductory copy and video, mint checklist section, three follow-up paragraphs, approaches heading, 2×2 approach-card grid, and subpage footer.
- Use the approved children video, locale-specific poster, and the four specified approach icons from the prototype assets.
- Build a shared client-side video player with native controls, a gold play overlay, and a top-right play/pause pill. The component must be reusable unchanged by the older-adults page.
- Add all page copy, video control labels, alt text, and approach-card content to both locale message files.

## Video behaviour

- Render a 16:9 `video` frame with 24px radius, `object-fit: contain`, `#2f3d47` letterboxing, `controls`, `playsInline`, `preload="auto"`, and a locale-specific poster.
- Keep the large 86px gold play button out of the bottom 56px control-bar area. Hide it while playback is active and reveal it after pause or playback completion.
- Toggle play/pause when the video body is clicked, while allowing native controls to remain usable. The corner pill must state the current available action and include an accessible name.
- Change video source and poster correctly when the locale changes. Do not use the prototype’s `currentTime = 0.1` workaround.

## Acceptance criteria

- The page content, mint section, checklist emphasis, approach cards, and footer match the approved prototype at desktop and mobile sizes.
- The video works with mouse, touch, keyboard, and native controls; its overlay never blocks the native control bar.
- SLO and ENG copy, video, poster, and accessible labels change together with the locale.
- No copy is hard-coded in React components.

## Verification

- Run `npm run build` and focused lint/type checks.
- Test play, pause, overlay visibility, pill state, and locale switching on desktop and a 375px viewport.
- Confirm the page has no console errors and that the video remains playable after switching locale.
