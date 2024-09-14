/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gainsboro: "#d9d9d9",
        night: "#3b4443",
        peachpuff: "#fdd9bc",
        olive: "#706545",
        silver: "#b9b8b8",
        darkolivegreen: "#5b7045",
        darkseagreen: "#82966b",
        whitesmoke: "#eaeaea",
        white: "#fff",
        black: "#000",
        blossom: "#efd0ce",
        darkgray: "#a5a5a5",
        lavender: "#d4e0f0",
        ocean: "#7e958f",
        lightpink: {
          "100": "#ebb2ac",
          "200": "#e398a1",
        },
      },
      spacing: {},
      fontFamily: {
        "header-big-boi": "Kalnia",
        "heading-littler-boi": "Judson",
        "modern-antiqua": "'Modern Antiqua'",
        "jsmath-cmmi10": "jsMath-cmmi10",
      },
      borderRadius: {
        "228xl": "247px",
        "175xl": "194px",
        "161xl": "180px",
      },
    },
    fontSize: {
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "77xl": "96px",
      "45xl": "64px",
      "32xl": "51px",
      "109xl": "128px",
      "13xl": "32px",
      "17xl": "36px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
