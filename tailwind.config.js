module.exports = {
  content: ["./index.html", "./src/**/*.{dative.html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins_semibold: ["poppins-semibold"],
        poppins_medium: ["poppins-medium"],
        poppins_regular: ["poppins-regular"],
        poppins_light: ["poppins-light"],
      },
      backgroundImage: {
        home: "url('/home_bg.png')",
      },
      zIndex: {
        1000: "1000",
      },
      colors: {
        main: {
          50: "#F1F6F8",
          100: "#E4EDF2",
          200: "#C1D7E1",
          300: "#98BDCD",
          400: "#649CB4",
          500: "#3C697C",
          600: "#355D6E",
          700: "#305464",
          800: "#26434F",
          900: "#1E343E",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
