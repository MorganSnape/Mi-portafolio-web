/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        rethink: ["var(--font-rethink)"],
        fantabular: ["var(--font-fantabular)"],
      },

      screens:{
        tablet:"1280px"
      }
    },
  },
};
