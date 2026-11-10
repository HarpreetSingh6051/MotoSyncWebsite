import { useEffect, useState, useSyncExternalStore } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function subscribe(onStoreChange: () => void) {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return () => {}
  }
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY)
  mediaQuery.addEventListener('change', onStoreChange)
  return () => mediaQuery.removeEventListener('change', onStoreChange)
}

/**
 * Reads the user's reduced-motion preference. Returns `false` on the server and
 * during hydration, then updates on the client so SSR output stays stable.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () =>
      typeof window !== 'undefined' && window.matchMedia
        ? window.matchMedia(REDUCED_MOTION_QUERY).matches
        : false,
    () => false,
  )
}

/**
 * `true` after the first client paint. Use this to avoid rendering
 * motion-only styles or content that differs from the server HTML.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
