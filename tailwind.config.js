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
        black: '#000000',
        electric: {
          500: '#10B1FB',
          400: '#38BDF8',
          300: '#7DD3FC',
          600: '#0284C7',
        },
        neon: {
          purple: '#8B5CF6',
          violet: '#A855F7',
          red: '#EF4444',
          crimson: '#F43F5E',
          emerald: '#10B981',
        },
        surface: {
          950: '#000000',
          900: '#05070B',
          850: '#0A0E17',
          800: '#101624',
          700: '#1C2438',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'radar-sweep': 'radar-sweep 3s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
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
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
        'waveform': {
          '0%, 100%': { height: '6px' },
          '50%': { height: '24px' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(16, 177, 251, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 177, 251, 0.05) 1px, transparent 1px)',
        'dots-pattern': 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
