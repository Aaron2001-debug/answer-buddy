/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all components in src (including subfolders)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
