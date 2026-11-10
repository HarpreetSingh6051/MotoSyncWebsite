const env = import.meta.env

export const site = {
  name: 'MotoSync',
  tagline: 'Pack Connected. Ride in Sync.',
  description:
    'One app for the entire ride. Plan the route, track live locations, split bills, chat, and ride together.',
  riderUrl: env.VITE_RIDER_URL ?? 'https://moto-sync.vercel.app',
  apkUrl: env.VITE_APK_URL ?? 'https://moto-sync.vercel.app/motosync.apk',
  siteUrl: env.VITE_SITE_URL ?? 'https://motosync-landing.vercel.app',
  contactEmail: 'hello@motosync.app',
} as const
