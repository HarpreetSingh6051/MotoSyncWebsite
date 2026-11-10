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
        midnight: {
          950: '#04060C',
          900: '#070A14',
          850: '#0A1022',
          800: '#0E1530',
          750: '#141C3B',
          700: '#1B244A',
        },
        surface: {
          950: '#04060C',
          900: '#070A12',
          card: '#0D1326',
          border: 'rgba(245, 247, 255, 0.08)',
          'border-bright': 'rgba(16, 177, 251, 0.3)',
        },
        text: {
          heading: '#F5F7FF',
          support: '#A9B4CC',
          muted: '#64748B',
        },
        electric: {
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#10B1FB',
          600: '#0284C7',
        },
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        ember: {
          400: '#FF855D',
          500: '#FF6A3D',
          600: '#EA580C',
        },
        alert: {
          500: '#EF4444',
        },
        success: {
          500: '#10B981',
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
        'ember-pulse': 'ember-pulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'waveform': {
          '0%, 100%': { height: '6px' },
          '50%': { height: '22px' },
        },
        'ember-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'midnight-base': 'linear-gradient(180deg, #04060C 0%, #0A1022 50%, #0E1530 100%)',
        'speed-lines': 'repeating-linear-gradient(90deg, rgba(16, 177, 251, 0.03) 0px, rgba(16, 177, 251, 0.03) 1px, transparent 1px, transparent 80px)',
      },
    },
  },
  plugins: [],
}
