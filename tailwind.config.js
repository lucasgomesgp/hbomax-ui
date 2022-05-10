module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        first: "rgba(154, 53, 239, 1)",
        secondary: "rgba(75, 0, 196, 1)",
        third: "rgba(65, 118, 214, 1)",
      },
      animation: {
        bounce_1s: "bounce 2s infinite 1s",
        bounce_2s: "bounce 3s infinite 3s",
      },
    },
  },
  plugins: [],
};
