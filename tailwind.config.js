/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d',
          light: '#2c4c7c',
          dark: '#102542',
        },
        secondary: {
          DEFAULT: '#2a9d8f',
          light: '#3ebfaf',
          dark: '#1e7a70',
        },
        accent: {
          DEFAULT: '#e9c46a',
          light: '#f2d68b',
          dark: '#d5a842',
        },
        success: {
          DEFAULT: '#31a952',
          light: '#4eca70',
          dark: '#258a41',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fbb941',
          dark: '#c47d08',
        },
        error: {
          DEFAULT: '#e63946',
          light: '#ed5e69',
          dark: '#c61c2b',
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};