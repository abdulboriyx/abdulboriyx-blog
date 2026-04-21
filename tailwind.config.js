/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#24211c",
        paper: "#f6f1e6",
        line: "#d8cfbd",
        sage: "#5d7052",
        brick: "#9a4f3f",
        bluebook: "#365f7d"
      }
    }
  },
  plugins: []
};
