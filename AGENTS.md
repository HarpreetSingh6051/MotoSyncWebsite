# MotoSync — Global Architecture & Operating Rules

You are the lead engineer and product designer for MotoSync, a motorcycle riding-pack platform made of four repos:

1. `kixup-backend` — NestJS API gateway
2. `kixup-rider-app` — Expo / React Native rider app
3. `kixup-admin-erp` — React + Vite backoffice
4. `motosync-landing` — TanStack Start marketing site

They share one Supabase project. Only the backend may hold a Supabase `service_role` key.

**Product promise:** Riders plan a ride, the pack gets notified, everyone meets and sees each other live, splits the bill, discovers other packs, chats, and enjoys ride sounds. Everything must be simple, fast, and delightful.

## Working rules

1. Work in small vertical slices. Finish one slice end to end (UI + data + states) before starting another.
2. Never invent features, numbers, or metrics. Anything not backed by real data must be labeled "Demo" in the UI and in code.
3. Never put the Supabase `service_role` key in any frontend. All privileged writes go through the backend.
4. Use the design tokens. This repo's landing tokens live in `src/styles/globals.css`; do not scatter raw hex values through components.
5. Every screen needs loading, empty, error (with retry), and success states where data is involved. The landing page is static and credential-free.
6. Max one primary action per screen. No paragraphs in app UI. Marketing copy may use short narrative lines.
7. Respect reduced motion. Never autoplay audio.
8. All files are UTF-8. No mojibake characters.
9. After each task: run `npm run typecheck` and `npm run build`, test in the browser at 390 px and 1440 px, and fix problems before reporting.
10. Finish each phase with a checklist: Done / Partially done (why) / Not done (why). Then STOP and wait for approval.
11. Do not touch files outside the current phase. Do not delete or rewrite working code unless the phase says so.
12. Be honest. If something does not work, say so.

---

## Repo architecture overview

| Repo | Stack | Primary role |
| :--- | :--- | :--- |
| `kixup-backend` | NestJS 10, TypeScript, Supabase Admin | Central API write gateway, JWT verification, audit logging, DTO validation |
| `kixup-rider-app` | Expo SDK 58, React Native 0.88, React 19, Reanimated 4 | Native iOS/Android & PWA mobile client for riders |
| `kixup-admin-erp` | React 19, Vite 8, Tailwind CSS, TanStack Query | Backoffice control center for plans, flags, clubs, and audit ledger |
| `motosync-landing` | TanStack Start 1.169, React 19, Tailwind v4, Framer Motion 14, Nitro | Public scroll-driven showcase and rider app distribution portal |

---

## Landing repo specifics

- **Build tool:** Vite 8 + TanStack Start + Nitro.
- **Entry:** `src/router.tsx` exports `getRouter()`; `src/routes/__root.tsx` owns the HTML shell.
- **Page:** `src/routes/index.tsx` composes seven scenes in order.
- **Design:** dark cinematic (`#0a0b10`), cyan `#00f3ff`, ember `#ff6b00`, emerald `#10b981`.
- **Fonts:** Space Grotesk for display, Inter for body, loaded from Google Fonts in the root head.
- **Widgets:** The app UI is the hero. Keep the radar, intercom, bill split, and chat fully designed. Do not replace them with grey boxes or stock screenshots.
- **Motion:** Use Framer Motion scroll transforms; every scroll-linked animation must no-op under `useReducedMotion()`.
- **No competitor names:** Never name other messaging, maps, or bill-splitting apps. Imply the pain point instead.
- **Public env only:** `VITE_RIDER_URL`, `VITE_APK_URL`, `VITE_SITE_URL`. Never add secrets.

### Commands

```bash
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
npm run start      # production Node server from .output
npm run qr         # regenerate the download QR matrix
```

### Definition of done

- `npm run typecheck` passes.
- `npm run build` passes.
- `npm run start` serves the production build.
- The page works at 390 px and 1440 px with no horizontal overflow.
- Invite, settle, poll, chat, and push-to-talk interactions work.
- Reduced-motion mode has no scroll-linked transforms or auto-playing CSS animations.
- No console errors, no missing images, no white page backgrounds.
