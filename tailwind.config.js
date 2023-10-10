/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e7b646'
      },
      textColor: {
        primary: '#e7b646',
        black: 'rgb(50 50 50)'
      }
    }
  },
  plugins: []
};
