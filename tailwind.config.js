/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        studio: {
          50: '#FAFAFC',
          100: '#F4F5F8',
          150: '#ECEEF2',
          200: '#E2E5EB',
          300: '#D1D6E0',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#090A0F',
        },
        obsidian: '#090A0F',
        charcoal: '#1A1C23',
        slateText: {
          heading: '#090A0F',
          body: '#334155',
          muted: '#64748B',
          light: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
        telemetry: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        card: '24px',
        button: '18px',
        pill: '999px',
      },
      animation: {
        'radar-sweep': 'radar-sweep 3s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'waveform': 'waveform 1.2s ease-in-out infinite',
      },
      keyframes: {
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
        'waveform': {
          '0%, 100%': { height: '5px' },
          '50%': { height: '20px' },
        },
      },
      boxShadow: {
        'studio-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.05)',
        'studio-md': '0 12px 30px -10px rgba(0, 0, 0, 0.08)',
        'studio-lg': '0 25px 60px -15px rgba(0, 0, 0, 0.12)',
        'studio-float': '0 30px 70px -20px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [],
}
