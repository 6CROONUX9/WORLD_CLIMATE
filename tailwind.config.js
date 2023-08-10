/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        bounceD1000:"bounce 1s infinite",
        bounceD2000:"bounce 1.5s infinite",
        bounceD3000:"bounce 2s infinite",
        bounceD4000:"bounce 2.5s infinite",
        bounceD5000:"bounce 3s infinite",
        bounceD6000:"bounce 3.5s infinite",
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
      
    },
    fontFamily:{
      "lato":['Lato', 'sans-serif']
    }
  },
  plugins: [],
}

