/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary-green-100":"#A4C686",
        "primary-green-300":"#57812D",
        "primary-green-500":"2A5C2A",
        "primary-yellow-100":"#FFDF5D",
        "primary-yellow-300":"#FFCC00",
        "primary-dark-100":"#5F6368",
        "primary-dark-300":"#1A1934",
        "primary-grey-100":"#DADADA",
        "color-white":"#FFFFFF",
        "color-white-100":"F5F5F5",
        "bg-color-white":"#F7F6F4",

      }
    },
  },
  plugins: [],
};
