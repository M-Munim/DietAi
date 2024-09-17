/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
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
