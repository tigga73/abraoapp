/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        amber: '#e7b646',
        black: 'rgb(50 50 50)'
      }
    }
  },
  plugins: []
};
