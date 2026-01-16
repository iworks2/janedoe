/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx,svelte,vue}"
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary: ['YourSecondaryFontName', 'sans-serif']
      },
      fontSize: {
        'txt-s': '0.875rem'  // example size, adjust as needed
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
};
