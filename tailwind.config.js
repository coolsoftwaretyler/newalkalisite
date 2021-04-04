module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'play': ['Play'],
      'open': ['Open Sans']
    },
    extend: {
      colors: {
        alkali: {
          '50': '#f2fcff', 
          '100': '#e6f8ff', 
          '200': '#bfeeff', 
          '300': '#99e3ff', 
          '400': '#4dcfff', 
          '500': '#00baff', 
          '600': '#00a7e6', 
          '700': '#008cbf', 
          '800': '#007099', 
          '900': '#005b7d'
        },
        alkaligrey: {
          '200': '#eeeff2',
          '300': '#f8f8f8',
          '400': '#949494',
          '500': '#f0f0f0',
          '600': '#646464',
          '700': '#bcbcbc',
          '800': '#272e35',
        }
      }
    }
  },
  variants: {
    extend: {
      overflow: ['hover'],
      height: ['hover'],
      margin: ['hover'],
    },
  },
  plugins: [],
}
