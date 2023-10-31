/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Pachano: ["Edu TAS Beginner", "cursive"],
      },
      animation: {
        "fade-in": "fadeIn 2s ease-in-out", // Define your custom animation class
      },
    },
  },
  plugins: [],
};
