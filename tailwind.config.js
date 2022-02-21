module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
			xs: "440px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        Montserrat: ["Montserrat"],
        Newake: ["Newake"],
        'montserrat': ['Montserrat'],
      },
    },
  },
  plugins: [],
}