
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx,svelte,vue}"
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary: ['YourSecondaryFontName', 'fallback-font'],
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
};
