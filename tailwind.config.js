/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      sm2: "576px",
      md: "768px",
      lg: "976px",
      lg2: "1250px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
      },
      backgroundImage: {
        "hero-pattern-desktop": "url('/images/desktop/image-hero.jpg')",
        "hero-pattern-mobile": "url('/images/mobile/image-hero.jpg')",
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [],
};
