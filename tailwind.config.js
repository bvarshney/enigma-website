/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'display': 'ClashDisplay',
        'body': 'Ageo',
        'body-2': 'Arial',
      },
      colors: {
        'black-1': '#1a1a1a',
        'transparent': 'transparent',
        'current': 'currentColor',
        'primary': '#5d5ad6',
        'white': '#ffffff',
        'white1': '#f9f9f9',
        'white2': '#eeeeee',
        'white3': '#d6d6d6',
        'black': '#000000',
        'black1': '#1a1a1a',
        'black4': '#1f1f1f',
        'black2': '#383838',
        'black3': '#101010',
        'gray': '#a2a2a2',
        'gray1': '#8c8c8c',
        'gray2': '#656565', 
        'dark-primary': '#a2a529',
      },
      boxShadow: {
        '3xl': '0 10px 30px -10px rgba(0, 0, 0, 0.2)',
      },
      screens: {
        '2xl': '1280px',
        '3xl': '1680px',
      },
    },
  },
  plugins: [],
}
