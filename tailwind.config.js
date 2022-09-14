/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/sections/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0b65c6",
				secondary: "#eef1f6",
				tertiary: "#0e1133",

				lightBlue: "#e1f6fe",
				lightPink: "#fdeedc",
				lightGreen: "#e1fde2",
			},
			lineHeight: {
				12: "1.2",
				13: "1.3",
				16: "1.6",
			},
		},
		screens: {
			lg: { max: "1800px" },
			md: { max: "990px" },
			sm: { max: "600px" },
			xs: { max: "400px" },
			minmd: "1700px",
			minlg: "2100px",
		},
		fontFamily: {
			IBMPlex: ["IBM Plex Sans", "sans-serif"],
		},
	},
	plugins: [],
};
