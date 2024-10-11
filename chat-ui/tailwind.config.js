/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      background: "#EEE",
      primary: "#5928ED",
    }),
    fontFamily: {
      ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
