/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'background-color': '#23272a',
				'shade-color': '#2c2f33',
				'accent-color': '#8a2be2'
			}
		}
	},
	plugins: []
};
