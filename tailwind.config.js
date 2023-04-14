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
      gridTemplateColumns: {
        "2-320": "repeat(2, minmax(0, 320px))",
        "2-110": "repeat(2, minmax(0, 110px))",
        "3-90": "repeat(3, minmax(0, 90px))",
      },

      fontSize: {
        fontCalc: "calc(20px + (50 - 20) * ((100vw - 800px) / (2560 - 800))",
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
      animation: {
        appear: "appear 500ms ease-in-out forwards",
        moveInLeft: "moveInLeft 2s ease-in-out forwards",
        moveInRight: "moveInRight 2s ease-in-out forwards",
        slide: "slide 2s linear infinite",
        translateYBTop: "translateYBottomTop 2s forwards",
        translateXRightLeft: "translateXRightLeft 2s forwards",
        translateXleftRight: "translateXleftRight 2.5s forwards",
      },
      keyframes: {
        appear: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        moveInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-10px)",
          },
          "80%": {
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0px)",
          },
        },
        moveInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(10px)",
          },
          "80%": {
            transform: "translateX(-10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0px)",
          },
        },
        slide: {
          "0% ": {
            opacity: "0",
            transform: "translateX(2px)",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)",
          },
          "80%": {
            opacity: "1",
            transform: " translateX(1px)",
          },
          " 100%": {
            opacity: "0",
            transform: "translateX(2px)",
          },
        },
        translateXleftRight: {
          "25%": {
            transform: " translateX(-10px)",
            opacity: "0",
          },
          "26%": {
            transform: "translateX(10px)",
            opacity: " 0",
          },
        },
        translateXRightLeft: {
          "25%": {
            transform: " translateX(10px)",
            opacity: "0",
          },
          "26%": {
            transform: "translateX(-10px)",
            opacity: " 0",
          },
        },
        translateYBottomTop: {
          "25%": {
            transform: "translateY(10px)",
            opacity: 0,
          },
          "26%": {
            transform: " translateY(-10px)",
            opacity: 0,
          },
        },
        translateYTopBottom: {
          "25%": {
            transform: "translateY(-10px)",
            opacity: 0,
          },
          "26%": {
            transform: " translateY(10px)",
            opacity: 0,
          },
        },
      },
    },
    screens: {
      below397: { max: "397px" },
      below768: { max: "768px" },
      xs: { max: "480px" },
      sm: "768px",
      md: "1060px",
      lg: "1280px",
    },
  },
  plugins: [],
};
