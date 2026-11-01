/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#000000',
        surface: {
          950: '#000000',
          900: '#04060A',
          850: '#080C14',
          800: '#0E1422',
          750: '#141C2E',
          700: '#1A243B',
          600: '#2A3754',
        },
        electric: {
          500: '#10B1FB',
          400: '#38BDF8',
          300: '#7DD3FC',
          600: '#0284C7',
          700: '#0369A1',
        },
        neon: {
          purple: '#8B5CF6',
          violet: '#A855F7',
          fuchsia: '#D946EF',
          pink: '#EC4899',
          red: '#EF4444',
          crimson: '#F43F5E',
          amber: '#F59E0B',
          yellow: '#FBBF24',
          emerald: '#10B981',
          cyan: '#06B6D4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'radar-sweep': 'radar-sweep 3.5s linear infinite',
        'spin-slow': 'spin 22s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'laser-scan': 'laser-scan 3s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'laser-scan': {
          '0%, 100%': { transform: 'translateY(-100%)', opacity: '0.1' },
          '50%': { transform: 'translateY(100%)', opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'industrial-grid': 'linear-gradient(to right, rgba(16, 177, 251, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 177, 251, 0.05) 1px, transparent 1px)',
        'dots-pattern': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
