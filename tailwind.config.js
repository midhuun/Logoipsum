/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'x-sm':'360px',
        'sm': '560px',
        'md': '868px', 
        'lg': '1024px',
        'xl': '1280px',
      },
    },
    
  },
  plugins: [],
}

