import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#F8F9FB',
        surface: '#FFFFFF',
        detail: '#F4F6F8',
        border: '#E8EBEF',
        separator: '#DEE3E8',
        primary: {
          DEFAULT: '#356878',
          hover: '#2B5664',
        },
        fg: {
          DEFAULT: '#181B20',
          strong: '#313843',
          secondary: '#5D6675',
          tertiary: '#8B94A3',
        },
        muted: '#9FAAB8',
        night: {
          primary: '#4F8A9A',
          background: '#1A222C',
          surface: '#202B38',
          detail: '#1D2631',
          border: '#313C49',
          text: '#F4F6F8',
          secondary: '#B6C0CB',
        },
        // Compat pages pas encore migrées
        navy: {
          50: '#F4F6F8',
          100: '#E8EBEF',
          200: '#B6C0CB',
          500: '#4F8A9A',
          700: '#356878',
          900: '#2B5664',
          950: '#1A222C',
        },
        slate: {
          text: '#181B20',
          secondary: '#5D6675',
          tertiary: '#8B94A3',
          border: '#E8EBEF',
        },
        success: '#2F6F55',
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      borderRadius: {
        box: '0.75rem',
      },
      boxShadow: {
        soft: '0 8px 24px -12px rgba(24, 27, 32, 0.12)',
        frame: '0 16px 40px -20px rgba(24, 27, 32, 0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 0.45s ease-out forwards',
        'fade-in': 'fadeIn 0.35s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
