/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        platinum: '#E5E4E2', // Platinum color
        gold: '#FFD700',     // Gold color
        silver: '#C0C0C0'   // Silver color
      },
    },
  },
  plugins: [require("daisyui")],
};
