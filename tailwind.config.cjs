/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2b2141",
      },
      backgroundImage: (theme) => ({
        "landingPage-lg": "url(assets/bg1.jpg)",
      }),
    },
  },
  plugins: [],
};
