import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme')


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '290px',
        ...defaultTheme.screens,
      },
      colors: {
        primary: {
          100: '#e6e2f8',
          200: '#cec4f6',
          300: '#b2a2f9',
          400: '#9178fa',
          500: '#7152f3',
          600: '#5d3de7',
          700: '#4f31d0',
          800: '#3517b4',
          900: '#250c92',
        },
        secondary: {
          100: '#e1f1bc',
          200: '#cee993',
          300: '#bcde6b',
          400: '#afd751',
          500: '#a3d139',
          600: '#97bd33',
          700: '#88a52a',
          800: '#798d21',
          900: '#626615',
        },
        tertiary: {
          100: '#f0b0d9',
          200: '#e67bc2',
          300: '#d846ab',
          400: '#cd0d9b',
          500: '#b21589',
          600: '#af0a87',
          700: '#9b0982',
          800: '#8a087c',
          900: '#6c0772',
        },
        dark: '#16151C',
        gray: '#a2a1a8',
        light: '#d9e1e1',

        colorOption: {
          1: '#30be82',
          2: '#30beb6',
          3: '#5d30be',
          4: '#3 04fbe',
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        lexend: ["var(--font-lexend)"]
      }
    },
  },
  plugins: [],
};
export default config;
