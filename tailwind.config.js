/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#ff69b4",
        secondary: {
          700: "#00A36C",
          800: "#008000",
          900: "#355E3B",
        },
      },
      padding: {
        0.5: "10px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
