/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-color": "#EE9430",
        "brand-color-light": "#EE9430",
        "dark-10": "#15181F",
        "dark-20": "#FFFFFF",
        "support-01": "#2962FF",
        "support-02": "#0BB07B",
        "support-03": "#FFCE52",
        "support-04": "#F03D3D",
        "support-05": "#E0E0E0 ",
      },
      fontFamily: {
        OpenSans: ["'Open Sans', sans-serif;"],
        October: ["'October Crow'"]
      },
    },
  },
  plugins: [],
};
