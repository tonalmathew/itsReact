/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom': 'repeat(4, 6rem)',
      },
      gridTemplateRows: {
        // 'custom': 'minmax(7rem, auto) repeate(5, 6rem)'
      }
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
}

