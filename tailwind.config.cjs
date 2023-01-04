/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				primary: "#D65A31",
				black: "#111111",
				darkGrey: "#222222",
				grey: "#3E3E3E",
				midLightGrey: "#555555",
				lightGrey: "#777777",
				lightestGrey: "#999999",
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
