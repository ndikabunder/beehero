/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '100px',
    },
    screens: {
      sm: '360px',
      md: '767px',
      lg: '960px',
    },
    extend: {
      colors: {
        'accent-1': '#F8A634',
        'accent-2': '#C8DFE1',
        'accent-3': '#71A83F',
        'accent-4': '#F1EBD6',
        'accent-5': '#F1EBD6',
        'accent-6': '#FDDA99',
        'accent-7': '#F08F26',
      },
    },
  },
  plugins: [],
};
