/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FCDB32',
        secondary: '#141D38',
        dark: {
          50: '#F8F9FA',
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#495057',
          700: '#343A40',
          800: '#212529',
          900: '#141D38',
          950: '#0A0F1C',
        },
        accent: {
          primary: '#FCDB32',
          secondary: '#141D38',
        },
      },
    },
  },
  plugins: [],
};