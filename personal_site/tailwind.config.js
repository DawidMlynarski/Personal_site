/** @type {import('tailwindcss').Config} */
module.exports = { 
	content: [ 
		'./templates/**/*.html'
	], 
	theme: { 
		extend: {
			keyframes: { 
				appear_indicator: {
				'0%': {
					opacity:'0'
				},
				'25%': {
					opacity:'0'
				},
				'50%': {
					opacity: '0'
				},
				'75%': {
					opacity:'0'
				},
				'100%': {
					opacity:'100'
				}
				}
			
			
			},
			animation: {
				appear_indicator: 'appear_indicator 5s, bounce 1s infinite',
			  }
		}, 
	}, 
	plugins: [], 
}



