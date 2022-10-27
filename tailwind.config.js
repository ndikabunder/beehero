/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'accent-1': '#CE884C',
        'accent-2': '#FBB348',
        'accent-3': '#FDF3EA',
        'accent-4': '#FDB475',
        'accent-5': '#FCF8F4',
        'accent-6': '#EDD5B4',
        'accent-7': '#ecdcbb',
      },
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
