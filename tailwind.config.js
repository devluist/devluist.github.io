/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
  ],
  theme: {
    fontFamily: {
      highliht: ['Kanit', 'sans-serif'],
    },
    extend: {}
  },
  plugins: [],
}

// npx tailwindcss -w -i tw-input/main.css -o public/main.css