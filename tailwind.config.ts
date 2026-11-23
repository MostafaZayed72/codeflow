import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2f9',
          100: '#d8e1f0',
          200: '#b2c4e2',
          300: '#84a0cf',
          400: '#5b7db8',
          500: '#274680',
          600: '#162d59',
          700: '#102245',
          800: '#0b1833',
          900: '#071024',
          950: '#040915',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F9E79F',
          dark: '#9A7D0A',
        }
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
}
