/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RIDER_URL?: string
  readonly VITE_APK_URL?: string
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
