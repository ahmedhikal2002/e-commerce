/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },
      },
      screens: {
        //Bootstrap Container
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontFamily: {
        Roboto: ' "Roboto", sans-serif;',
      },
      keyframes: {
        vibration: {
          "0%": { transform: "translateX(0xp)" },
          "100%": { transform: "translateX(5px)" },
        },
      },
      animation: { vibration: "vibration 0.2s 3 linear  " },
    },
  },
  plugins: [],
};
