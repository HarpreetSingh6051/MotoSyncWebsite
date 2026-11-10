# MotoSync Landing Platform

Official public-facing promotional website and APK distribution portal for MotoSync (**Pack Connected. Ride in Sync**). Built with Next.js 14, React 18, Tailwind CSS, Framer Motion, and React Three Fiber.

## Tech Stack & Architecture
- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom Dark Theme Tokens
- **3D & WebGL**: Three.js / React Three Fiber interactive motorcycle wheel with rim lighting & mouse tilt
- **Motion**: Framer Motion scroll-driven rider journey (6 story scenes)
- **APK Distribution**: Direct APK downloads, checksum validation, dynamic QR codes, and PWA launch links

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start Next.js development server (port 3000)
npm run dev

# 3. Typecheck & production build
npm run typecheck
npm run build
```

## Environment Variables
Configure in `.env.local`:
```env
NEXT_PUBLIC_APK_URL=https://moto-sync-ochre.vercel.app/motosync.apk
NEXT_PUBLIC_RIDER_URL=https://moto-sync-ochre.vercel.app
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api/v1
```
