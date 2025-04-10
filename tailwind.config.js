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
        primary: '#d9ed92',
        secundary: '#415a77',
        tercero: '#a8dadc',
        bueno: '#d9ed92',
        moderado: '#fad643',
        malo: '#f26a8d',

      }
    },
  },
  plugins: [],
};
