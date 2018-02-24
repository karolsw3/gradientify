
var gradientify = new Gradientify()

gradientify.setBackground({
	element: document.body,
	gradients: [
		{type: `linear`, angle: `60deg`, colors: [`red`,`blue`], opacity: 1},
		{type: `radial`, colors: [`#1133ff`, `#22ffff`], opacity: 0}
	],
	options: {
		debug: false
	}
})

gradientify.animate({
	delay: 100,
	interval: 20
})