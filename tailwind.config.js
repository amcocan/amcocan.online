/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme:
  {
    fontFamily:
    {
      sans: ['Calibri', 'sans-serif'],
    },
    extend:
    {
      colors:
      {
        'crimson': '#FF004A',
        'black': '#000000'
      },
      
      borderRadius:
      {
        // '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

