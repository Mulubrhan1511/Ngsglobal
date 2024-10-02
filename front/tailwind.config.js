/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3184C0', // Blue
        secondary: '#FF0000', // Red
        gold: '#FFD700',
        accent: {
          DEFAULT: '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cd',
        },
        transparentWhite: {
          35: 'rgba(255, 255, 255, 0.35)', // Adjusted for white
        },
        gray: '#e8f0f1',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: {
        services: "url('/src/assets/services/about.png')",
        testimonials: "url('/src/assets/testimonials/bg.svg')",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1338px',
    },
  },
  plugins: [],
}
