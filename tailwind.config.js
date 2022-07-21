module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "primary-blue": "#355C7D",
      "primary-grey": "#707070",
      "primary-yellow": "#FFDF6C"
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
