
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    keyframes: {
      gradientMove: {
        '0%': { 'background-position': '0% 50%' },
        '100%': { 'background-position': '100% 50%' },
      },
    },
    animation: {
      gradientTranslate: 'gradientMove 1.2s linear infinite',
    },
    backgroundSize: {
      '200%': '200% 100%', 
    },
  },
};
export const plugins = [];