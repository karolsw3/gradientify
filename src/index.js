
var gradientify = new Gradientify()

gradientify.setBackground({
	element: document.body,
	gradients: [
		{gradient: `linear-gradient(60deg, rgba(255, 0, 0), rgba(0, 0, 255))`, opacity: 1}
	]
})

gradientify.animate({
	delay: 100,
	interval: 400
})