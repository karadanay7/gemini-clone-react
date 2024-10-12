/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(1.1)' },
        },
      },
    },
  },
  plugins: [],
};