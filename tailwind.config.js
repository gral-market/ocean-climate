/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#E6F7F3',
          100: '#B3E6DE',
          200: '#80D6C8',
          300: '#4DC6B2',
          400: '#1AB59C',
          500: '#00A386',
          600: '#008C73',
          700: '#007560',
          800: '#005E4D',
          900: '#00473A',
        },
        'secondary': {
          50: '#E6F6FF',
          100: '#B3E3FF',
          200: '#80D1FF',
          300: '#4DBEFF',
          400: '#1AABFF',
          500: '#0098FF',
          600: '#0082DB',
          700: '#006CB7',
          800: '#005693',
          900: '#00406F',
        },
        'accent': '#34D399',
        'dark': '#1A2E35',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Clash Display', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'strong': '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
} 