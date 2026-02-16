/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        josefine: ["var(--font-josefin)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
};
