/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        BASE: '#FFC7C7',
        HOVER: '#FDA4AF',
        TEXT_BASE_BLACK: '#261204',
        TEXT_SUB_GRAY: '#00000080',
        INPUT_BORDER: '#D2D4D6',
        BUTTON_DISABLED: '#CED1D4',
        BUTTON_TEXT_DISABLED: '#9D9FA7',
        GRAY_100: '#F4F4F5',
        GRAY_200: '#E5E7EB',
      },
      borderRadius: {
        404: '41% 59% 64% 36% / 39% 43% 57% 61%',
      },
    },
  },
  plugins: [require('daisyui')],
};
