/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          serif: ["'Playfair Display'", "Georgia", "serif"],
          sans: ["'Inter'", "system-ui", "sans-serif"],
        },
        colors: {
          gold: "#C4902A",
          charcoal: "#1A1A1A",
          cream: "#FAF8F5",
          stone: "#F0EDE8",
        },
      },
    },
    plugins: [],
  }