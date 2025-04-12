//cspell:disable 
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
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

        Bueno: '#13c710',
        Moderado: '#fdf00b',
        DañinoSensibles: '#f1660b',
        NoSaludable: '#ea1222',
        CasiPeligroso: '#8468e1',
        Peligroso: '#393939',

        


      },

      letterSpacing: {
        'extra': '.15em',
        'minExtra': '.05em',
      }
    },
  },
  plugins: [],
};
