# MACRO REIIS · Remotion

A self-contained React + TypeScript promotional video. Black background, neon blue motion graphics, animated typography, smooth frame-driven reveals and crossfades. No external media, remote fonts, API keys, or audio required.

## Quick start

Requires Node.js 22 or newer and npm. This cloud environment uses Node.js 24 and `/usr/bin/chromium`. On another machine, set `REMOTION_BROWSER_EXECUTABLE` to your Chromium/Chrome executable in the shell before running Remotion.

```sh
npm ci --no-audit --no-fund
npm run preview
```

Run commands from the repository root. Select **MacroReiis** in Remotion Studio. Stop Studio with Ctrl+C.

```sh
npm run typecheck   # Strict TypeScript validation
npm run build       # Type check and bundle to build/
npm run render      # H.264 MP4 at out/macro-reiis.mp4
npm run still       # Frame 360 at out/poster.png
```

The composition is 1920×1080, 30 FPS, 450 frames (15 seconds). Rendering uses two concurrent browser pages to keep memory use predictable. Output is silent, with no audio track.

## Files and creative direction

- `src/index.ts`: Remotion entry point.
- `src/Root.tsx`: composition registration and video dimensions/timing.
- `src/MacroReiis.tsx`: master timeline, transitions and closing fade.
- `src/scenes/`: opening, sequential capabilities, and final brand scene.
- `src/components/Atmosphere.tsx`: reusable particles, glow, streaks, and scene labels.
- `remotion.config.ts`: browser, image format, overwrite policy.

Timeline: THE FUTURE STARTS NOW (0–4s), SPEED / PRECISION / TECHNOLOGY (4–9s), MACRO REIIS with Technology That Makes a Difference (9–15s). A 9-frame slide begins at 4 seconds; a 9-frame crossfade into the brand completes at 9 seconds. The closing fade reaches pure black on frame 449. Each scene also has a separate Studio composition. Glowing particles, light streaks, and the title light sweep use only CSS/SVG and deterministic frame calculations; no uploaded media is used. Animations derive exclusively from the current frame, so preview, seeking, and export stay deterministic. Change the text and blue accent directly in `src/MacroReiis.tsx`.

Dependencies are pinned and `package-lock.json` is included with the source for repeatable installs. `.npmrc` puts npm's cache in the writable cloud workspace. Dependencies, browser bundles, and rendered outputs are ignored by Git; regenerate outputs using the scripts above. There are no separate unit tests; the type check, production bundle, complete render and media metadata checks validate this initial project.
