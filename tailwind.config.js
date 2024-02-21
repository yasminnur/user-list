/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#171823",
        text: "#C8CBE7",
        card: "#25273D",
        link: "#3A7CFD",
      }
    },
  },
  plugins: [],
}