# Website review and Antigravity setup

Reviewed 2026-11-15. Scope: motosync-landing and the three requested reusable integrations. Backend and rider app functionality have not been certified by this review.

## Changes completed

- Retained the navy/lime/cyan palette, 3D feature carousel, sticky navigation, and QR footer.
- Replaced internal implementation labels and unsupported telemetry, encryption, platform, availability, and production claims with clear product-vision/demo copy. Removed misleading policy links to the FAQ.
- Added the official React Bits SpotlightCard to the footer. Source is pinned to commit cf2801031f07f53d4684e65b961bde7c2e2a6921; source URL and full MIT + Commons Clause license are in src/components/react-bits.
- Scoped carousel arrow keys to its focused region. Added display-mode pressed states, automatic rotation controls, cancellation handling, reduced-motion handling, and pauses while interacting or offscreen. Removed misleading nonfunctional Explore feature text.
- Fixed asynchronous WebGL cleanup: dispose geometries, materials, renderer, canvas, resize/visibility observers, and animation frames. Only the active card mounts its micro-canvas; hidden canvases skip rendering.
- Kept short wheel easing while restoring native anchor URL/focus/history behavior. Motion preference changes now update scrolling immediately. Mobile navigation supports Escape and closes when focus leaves.
- QR generation now reads the selected Vite environment before standard dev/build commands; its clickable destination comes from the encoded URL. Blank APK configuration hides the download button. Set VITE_APK_URL only after verifying the actual release asset.
- Removed the unused project-local Vercel CLI and its vulnerable dependency tree. Existing Vercel configuration and Git-based hosting remain available. No deployment was performed.

## Reusable integrations

Project skills: .agents/skills/{react-bits,motion-sites,unsloth}/SKILL.md.
Global Antigravity skills: C:/Users/user/.gemini/config/skills/{react-bits,motion-sites,unsloth}/SKILL.md.

MotionSites MCP: C:/Users/user/.gemini/config/mcp_config.json contains the motionsites serverUrl https://motionsites.ai/api/mcp. The previous empty configuration is backed up beside it as mcp_config.json.before-motosync. Reload/restart Antigravity and authenticate the server there. Connection and account entitlement have not been verified. No generated MotionSites output was used in this change.

Unsloth: the clone at E:/projects-personal/unsloth was inspected, not installed as a runtime. Windows reports Intel UHD Graphics 620. No model was downloaded or training started. Select an appropriate supported machine/service and workload before enabling AI generation. Unsloth belongs behind an AI backend, not in the website bundle.

Official references:
- https://reactbits.dev/get-started/installation
- https://motionsites.ai/mcp
- https://antigravity.google/docs/skills
- https://antigravity.google/docs/mcp/
- https://github.com/unslothai/unsloth

## Verification

- TypeScript check: passed.
- Production build: passed. Three.js is dynamically loaded, but its 542 KB minified / 134 KB gzip client chunk still triggers the bundle-size warning. Measure actual loading and rendering on a lower-end phone before release.
- QR regression tests: passed (production .env, deployment override, encoded matrix consistency, invalid protocol rejection).
- Production HTTP smoke: passed; page returns 200, section targets resolve, five referenced local assets return 200. This does not test client hydration or visual layout.
- Full npm audit after removing unused CLI: zero reported vulnerabilities. This is a dependency advisory check, not a security certification.

## Release decision: not yet signed off

Browser preview access was previously denied. No workaround was used; 390 px / 1440 px visual QA, browser console inspection, touch interaction, keyboard/focus behavior, reduced-motion rendering, and hydration remain unverified.

Before deployment:
1. Verify those browser/device cases, especially sticky navigation, card overlap, footer layout, and sustained WebGL memory usage.
2. Physically scan the QR on iOS and Android. Verify VITE_RIDER_URL and any configured APK endpoint open the intended release. Confirm support email, canonical site URL, sitemap, and social metadata for the production domain.
3. Verify the actual Vercel build and preview: local tests used Nitro's Node-server preset, not the hosted deployment preset. Use npm ci for repeatable installs.
4. Publish real privacy/terms information appropriate to the app before collecting user information; this landing page no longer pretends its FAQ is a privacy policy.
5. Reconcile the marketing/demo features with backend and rider-app acceptance tests before marking them available. Paid plans and AI generation remain roadmap items, not implemented by this website work.

Commands: npm run typecheck; npm test; npm run build; npm run test:smoke; npm audit.
