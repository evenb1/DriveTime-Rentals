module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ["Inter", "sans-serif"],
      },
      
      colors: {
        'custom-gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(51,9,121,1) 0%, rgba(43,41,142,1) 0%, rgba(38,63,156,1) 0%, rgba(33,82,169,1) 0%, rgba(30,94,177,1) 18%, rgba(21,128,200,1) 100%, rgba(0,212,255,1) 100%)',
        customBlue: '#0378C9',
        charcoal: '#101820',
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero.jpg')",
        'features': "url('/features.jpg')"
      }
    },
  },
  plugins: [],
};