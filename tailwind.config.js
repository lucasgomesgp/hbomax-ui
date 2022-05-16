module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      // sans: ["Roboto", "sans-serif"],
    },
    screens: {
      min_screen: { min: "425px" },
      small_screen: { max: "980px" },
      md_screen: { max: "1024px" },
      md_min_screen: { min: "1024px" },
      lg: "1440px",
    },
    extend: {
      colors: {
        first: "rgba(154, 53, 239, 1)",
        secondary: "rgba(75, 0, 196, 1)",
        third: "rgba(65, 118, 214, 1)",
        profile_first: "rgba(0, 48, 92, 1)",
        profile_secondary: "rgba(64, 19, 122, 1)",
        hover_purple: "#5B1CE6",
      },
      animation: {
        bounce_1s: "bounce 2s infinite 1s",
        bounce_2s: "bounce 3s infinite 3s",
      },
      backgroundImage: {
        friends: "url(/assets/friends.png)",
        gradient_hbo:
          "linear-gradient(90deg, #9A35EF 0.97%, #4B00C4 46.41%, #4176D6 101.25%)",
        gradient_profile: "url(/assets/bg_profile.png)",
        btn: "linear-gradient(90.36deg, #4710C1 3.28%, #7857FF 50.58%, #819BFD 96.22%)",
      },
    },
  },
  plugins: [],
};
