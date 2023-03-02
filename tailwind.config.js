/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      lg: { max: "1440px" },
      md: { max: "834px" },
      sm: { max: "640px" },
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        accent: "#532C59",
        secondary: "#4299E1",
      },
      backgroundImage: {
        "radial-purple":
          "radial-gradient(50% 50% at 50% 50%, #E36CE6 0%, rgba(255, 255, 255, 0) 100%)",
        "white-bottom":
          "linear-gradient(180deg, rgba(252, 250, 255, 0) 0%, #FCFAFF 100%);",
      },
      fontFamily: {
        syne: ["Syne"],
        space_grotesk: ["Space Grotesk"],
      },
    },
  },
  plugins: [],
};
