/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_blue: {
          100: "#E0E0E3",
          200: "#B3B3B8",
          300: "#80808B",
          400: "#4D4D5E",
          500: "#222340", // Base: Azul oscuro
          600: "#191A30",
          700: "#101020",
          800: "#070710",
          900: "#000000",
        },
        secondary_yellow: {
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#F8F9EC",
          400: "#F4F6D8",
          500: "#F1F2C4", // Base: Amarillo clarito
          600: "#D8DA95",
          700: "#BFB266",
          800: "#A68A33",
          900: "#8D6200",
        },
        light_blue: {
          100: "#F2F2F7",
          200: "#D8D8E9",
          300: "#B2B2D1",
          400: "#8C8CB9",
          500: "#888BBF", // Base
          600: "#676991",
          700: "#464763",
          800: "#252535",
          900: "#000000",
        },
        light_black: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#B3B3B3",
          400: "#666666",
          500: "#262626", // Base
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        accent_blue: {
          100: "#E6E7F0",
          200: "#CBD0E0",
          300: "#B0B3D1",
          400: "#9597C1",
          500: "#363973", // Base
          600: "#2E3160",
          700: "#26284D",
          800: "#1E203A",
          900: "#161727",
        },
      },
    },
    plugins: [],
  },
};
