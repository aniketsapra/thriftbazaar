/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'satisfyfont':['Satisfy','cursive'],
        'poppinsfont':['Poppins','sans-serif']
      },
      colors: {
        'darkpurple':'#5D3587',
        'purple':'#610C9F'
      }
    },
  },
  plugins: [],
};
