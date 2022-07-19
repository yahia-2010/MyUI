/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#1f43c0",
        red: "rgb(239 68 68)",
        blue: "rgb(59 130 246)",
        green: "rgb(34 197 94)",
        yellow: "rgb(234 179 8)",
        gray: "rgb(107 114 128)",
      },
    },
  },
  plugins: [],
};
