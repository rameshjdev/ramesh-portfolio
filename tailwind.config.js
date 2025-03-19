/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", "monospace"],
      },
      colors: {
        primary: "#FCA311",
        secondary: "#0F4C5C",
        dark: {
          50: "#F8F9FA",
          100: "#E9ECEF",
          200: "#DEE2E6",
          300: "#CED4DA",
          400: "#ADB5BD",
          500: "#6C757D",
          600: "#495057",
          700: "#343A40",
          800: "#212529",
          900: "#0F4C5C",
          950: "#0A0F1C",
        },
        accent: {
          primary: "#FCA311",
          secondary: "#0F4C5C",
        },
      },
    },
  },
  plugins: [],
};
