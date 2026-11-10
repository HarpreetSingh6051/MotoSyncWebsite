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
        void: '#0a0a0a',
        charcoal: '#121212',
        surface: {
          DEFAULT: '#18181b',
          border: 'rgba(255, 255, 255, 0.1)',
          glass: 'rgba(24, 24, 27, 0.75)',
        },
        cyan: {
          400: '#38bdf8',
          500: '#00f3ff',
          glow: 'rgba(0, 243, 255, 0.4)',
        },
        orange: {
          400: '#fb923c',
          500: '#ff6b00',
          glow: 'rgba(255, 107, 0, 0.4)',
        },
        textHeading: '#f4f4f5',
        textSupport: '#a1a1aa',
        textMuted: '#71717a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Outfit"', 'sans-serif'],
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
        'pulse-glow': 'pulse-glow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
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
          '0%, 100%': { height: '6px' },
          '50%': { height: '22px' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(0, 243, 255, 0.4)',
        'glow-orange': '0 0 35px -5px rgba(255, 107, 0, 0.4)',
        'phone-float': '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px -10px rgba(0, 243, 255, 0.2)',
      },
    },
  },
  plugins: [],
}
