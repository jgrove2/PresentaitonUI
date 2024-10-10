/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'background': '#EEE',
      'primary': '#5928ED'
    }),
    extend: {},
  },
  plugins: [],
}

