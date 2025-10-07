/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'chocolate_cosmos': {
          DEFAULT: '#461220',
          100: '#0e0406',
          200: '#1c070d',
          300: '#290b13',
          400: '#370e19',
          500: '#461220',
          600: '#88233e',
          700: '#cb355d',
          800: '#dc7893',
          900: '#eebcc9'
        },
        'cordovan': {
          DEFAULT: '#8c2f39',
          100: '#1c090b',
          200: '#391317',
          300: '#551c22',
          400: '#71262d',
          500: '#8c2f39',
          600: '#be3f4c',
          700: '#cf6e78',
          800: '#df9fa5',
          900: '#efcfd2'
        },
        'redwood': {
          DEFAULT: '#b23a48',
          100: '#230b0e',
          200: '#47171d',
          300: '#6a222b',
          400: '#8e2e39',
          500: '#b23a48',
          600: '#c95966',
          700: '#d7828c',
          800: '#e4acb2',
          900: '#f2d5d9'
        },
        'melon': {
          DEFAULT: '#fcb9b2',
          100: '#530b03',
          200: '#a51606',
          300: '#f6220b',
          400: '#f96d5e',
          500: '#fcb9b2',
          600: '#fdc6c0',
          700: '#fdd4d0',
          800: '#fee3e0',
          900: '#fef1ef'
        },
        'apricot': {
          DEFAULT: '#fed0bb',
          100: '#561c01',
          200: '#ad3903',
          300: '#fb580c',
          400: '#fd9362',
          500: '#fed0bb',
          600: '#fed8c7',
          700: '#fee2d5',
          800: '#ffece3',
          900: '#fff5f1'
        }
      },
      fontFamily: {
        'heading': ['"Libre Baskerville"', 'serif'],
        'body': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
