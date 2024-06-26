/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        border: 'background ease infinite',
      },
      keyframes: {
        background: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      colors: {
        // primary : 'rgb(59, 27, 226)',
        
        primary : '#3f20dd',
        primaryDark : '#2307B6',
        secondary : '#A44CD3',
        accent : '#D90077',
        // bgSection : '#E6E6FA',
        bgSection : '#f0e2ff',
        darkAsh : '#222831',
        lightAsh : '#31363F',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}