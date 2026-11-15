const env = import.meta.env

export const site = {
  name: 'MotoSync',
  tagline: 'Pack Connected. Ride in Sync.',
  description:
    'Explore the MotoSync vision: a home for biker communities, ride planning, conversations, and shared adventures.',
  riderUrl: env.VITE_RIDER_URL || 'https://moto-sync.vercel.app',
  apkUrl: env.VITE_APK_URL || '',
  siteUrl: env.VITE_SITE_URL || 'https://motosync-landing.vercel.app',
  contactEmail: 'hello@motosync.app',
} as const
