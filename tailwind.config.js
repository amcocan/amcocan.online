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

      spacing:
      {
        'lgaline': '16.666667%'
      },

      borderRadius:
      {
        // '4xl': '2rem',
        'unix': '10px',
      }
    },
  },
  plugins: [],
}

