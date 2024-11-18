/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(
			function ({ addVariant }) {
				addVariant("glow", ".glow-capture .glow-overlay &");
			},
			{
				theme: {
					extend: {
						colors: {
							glow: "color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)",
						}
					}
				}
			}
		),
	],
	darkMode: "class",
};
