/** @type {import('tailwindcss').Config} */


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: "#606676",
      secondary: "#FEF3E2",
      effect: "#399918",
      white: "#F6FFF8",
      // white: "#E7F0DC" // nice
    },
    screens: {
      laptop: "717px",
    },
  },
  plugins: [],
  darkMode: ["selector", '[data-theme="dark"]'],
}
