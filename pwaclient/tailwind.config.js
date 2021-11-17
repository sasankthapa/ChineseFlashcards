module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
        colors:{
            current:'green',
        },
        fontFamily:{
            'stylish':'Dancing Script',
            'chin':'Noto Sans SC'
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
