/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        nebula: {
          900: '#0f0d11',
          950: '#0a080d',
        },
      },
    },
  },
  plugins: [],
};
