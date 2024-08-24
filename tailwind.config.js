/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';
import formsPlugin from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        drkbg: "#232730",
        drkcol: "#d3d3d3",
        drkbg2: "#181a1f",
        drkbrd: "rgba(136, 136, 136, 0.3);",
      },
      screens: {
        '3xl': '1920px'
      }
    },
  },
  plugins: [formsPlugin],
  darkMode: "selector",
};

