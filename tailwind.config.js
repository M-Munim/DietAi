/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // nav
        clr1: "#05391C",
        clr2: "#005766",
        // footer
        clr3: "#002166",
        clr4: "#000000B2",
        bg1: "#00BF63",
        // main
        clr5: "#00BF63",
        clr6: "#40818C",
      },
    },
  },
  plugins: [],
};
