/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padd: '16px',

    },
    extend: {
      colors: {
        primary: '#38bdf8',
        secondary: '#64748b',
        dark: '#0f172a',
        silver : '#1e293b',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

