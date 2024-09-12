const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			width: {
				A4: "210mm",
			},
			height: {
				A4: "297mm",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				'primary': colors.black,
				'link': colors.sky[500],

			},
		},
	},
	plugins: [],
};
