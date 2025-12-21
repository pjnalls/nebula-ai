/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        nebula: {
          50: '#eae4ef',
          100: '#f0ecfc',
          900: '#131016',
          950: '#100d12',
        },
      },
    },
  },
  plugins: [],
};
