class Gradientify {
	constructor() {

	}

	create(element, gradients, options) {

		var background = []

		gradients.map((gradient, i) => {
			switch (gradient.type) {
				case `linear`:
					background.push(`linear-gradient(${gradient.angle}, ${gradient.colors})`)
					break
				case `radial`:
					if (gradient.shape === undefined) gradient.shape = `ellipse`
					background.push(`radial-gradient(${gradient.shape}, ${gradient.colors})`)
					break
				default:
					throw `Gradientify: Invalid gradient type "${gradient.type}"`
					break
			}
		})

		if(options.debug) console.log(background.toString())
		element.style.backgroundImage = background.toString()+`;`
	}
}

/* Tests */

var gradientify = new Gradientify()

gradientify.create(document.body, [{
	type: `linear`,
	angle: `60deg`,
	colors: `red, blue, black`
},{
	type: `radial`,
	angle: `94deg`,
	colors: `orange, white`
}], {
	debug: true
})