/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#312D81',
        secondary: '#0e0e0e',
        'sub-bg': '#f3f3f3',
        heading: '#0e0e0e',
        paragraph: '#303030',
        span: '#888888',
        border: '#d9d9d9',
        white: '#ffffff',
        black: '#000000',
      },
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'],
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        custom: '0px 4px 30px 0px #ee332b26',
      },
    },
  },
  plugins: [],
};
