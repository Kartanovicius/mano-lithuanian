module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['IBM Plex Sans', 'sans-serif'],
      'overpass': ['Overpass']
    },
    container: {
      padding: '1.1rem',
    },
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#FFC500',
          darker: '#fbd931',
          lighter: '#fede00'
        },
        black: { 
          DEFAULT: '#27231C'
        },
        green: {
          DEFAULT: '#009A5A',
          hover: '#1D7236'
        },
        red: {
          DEFAULT: '#ED1F34'
        },
        grey: {
          bg: '#F5F5F5'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
