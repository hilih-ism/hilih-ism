/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    colors:{
    'bay-leaf':'#7EAA92',
    'gumbo':'#7EAAA8',
    'amulet':'#80AA7E',
    },
    fontFamily:{
      primary:['Satoshi-Regular','sans-serif'],
      bold:['Satoshi-Bold','sans-serif'],
      medium:['Satoshi-Medium','sans-serif'],
      boldItalic:['Satoshi-BoldItalic','sans-serif']
    },
    extend: {},
  },
  plugins: [],
}