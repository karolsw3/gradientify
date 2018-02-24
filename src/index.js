
var gradientify = new Gradientify()

gradientify.setBackground({
	element: document.body,
	gradients: [
		{gradient: `linear-gradient(60deg, rgba(255, 0, 0), rgba(0, 0, 255))`, opacity: 1},
		{gradient: `linear-gradient(10deg, rgba(25, 123, 23), rgba(255, 0, 155))`, opacity: 0},
		{gradient: `radial-gradient(rgba(25, 123, 223), rgba(5, 133, 5))`, opacity: 0}
	]
})

gradientify.animate({
	delay: 0,
	interval: 2300
})