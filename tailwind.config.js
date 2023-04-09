/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        999: "999",
        1000: "1000",
      },
      height: {
        "50vh": "30vh",
      },
      colors: {
        "primary-green-100": "#A4C686",
        "primary-green-300": "#57812D",
        "primary-green-500": "2A5C2A",
        "primary-yellow-100": "#FFDF5D",
        "primary-yellow-300": "#FFCC00",
        "primary-dark-100": "#5F6368",
        "primary-dark-300": "#1A1934",
        "primary-grey-100": "#DADADA",
        "color-white": "#FFFFFF",
        "color-white-100": "#F5F5F5",
        "bg-color-white": "#F7F6F4",
      },
      backgroundImage: {
        "gradient-yellow":
          "linear-gradient(transparent, transparent), linear-gradient(#FFCC00, #FFCC00)",
      },
      backgroundSize: {
        zeroThree: "0 3px",
        OneHund3Pixel: "100% 3px ",
        Ninety3Pixel: "90% 3px ",
      },
      backgroundPosition: {
        "0-100": "0 100%",
      },
      transitionProperty: {
        bgSize5sEaseInOut: "background-size .5s ease-in-out",
      },
    },
    screens: {
      below397: { max: "397px" },
      below768: { max: "768px" },
      xs: { max: "480px" },
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
