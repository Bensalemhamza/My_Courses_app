/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary70: '#3DDAB4', // Aqua Green
        secondary: '#FFD524', // Yellow

        // Color Shades
        primary40: '#F7AFAF',
        primary60: '#EF6A6A',
        primary80: '#D92D2D',
        primary100: '#AA1C1C',

        // Object Colors
        black90: '#212121',
        black60: '#4B4B4B',
        black30: '#D0D0D0',
        white90: '#FAFAFA',
        white60: '#F2F2F2',
        white30: '#FFFFFF',

        // Status Colors
        error: '#FF3B57',
        warning: '#A53BF3',
        success: '#2CE4C5',
      },
      fontFamily: {
        // Typography Families
        RTO: ['"Roboto"', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
};



