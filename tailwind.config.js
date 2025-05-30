//cspell:disable 
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}",
      "./componentes/**/*.{js,jsx,ts,tsx}",

  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        PTSerif: ["./assets/fonts/PTSerif-Regular.ttf"],
        PTSerifBold: ["./assets/fonts/PTSerif-Bold.ttf"],
        PTSerifBoldN: ["./assets/fonts/PTSerif-BoldItalic.ttf"],
        PTSerifItalic: ["./assets/fonts/PTSerif-Italic.ttf"],
      },

      colors:{
        primary: '#b7efc5',
        secundary: '#415a77',
        tercero: '#a8dadc',
        bueno: '#d9ed92',
        moderado: '#fad643',
        malo: '#f26a8d',

        fondo1: 'white',
        fondo2: '#0077b6',
        fondo3: '#7d8597',
        fondo4: '#dee2e6',
        fondo5: '#1f7a8c',
        fondo6: '#6096ba',
        fondo7: '#023e8a',
        'fondo7-70': 'rgba(2, 62, 138, 0.10)',
        fondo8: '#d7e3fc',
        fondo9: '#CAE9FF',
        'fondo9-70': 'rgba(202, 233, 255, 0.6)',

        fondoSticky: '#fcefb4',
        fondoSticky2: '#a2d6f9',
        fondoSticky3: '#ffd6ff',

        letras: '#4a4e69',

        boton: '#184e77',
        boton2: '#e7ecef',

        bueno: '#13c710',
        moderado: '#fdf00b',
        dañinoSensibles: '#f1660b',
        noSaludable: '#ea1222',
        casiPeligroso: '#8468e1',
        peligroso: '#393939',

        letter: '#274c77'
      },

      letterSpacing: {
        'extra': '.15em',
        'minExtra': '.05em',
        'maxExtra': '.25em',
      }
    },
  },
  plugins: [],
};
