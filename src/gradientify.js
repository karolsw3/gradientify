class Gradientify {

	constructor(){
		this.background = []
		this.errorMessage = `Gradientify:`
		this.changeBackground = this.changeBackground.bind(this)
	}

	changeBackground(element, gradients, options) {
		if(typeof gradients !== `object`){
			throw `${this.errorMessage} Invalid gradients`
			return
		}

		gradients.map((gradient, i) => {

			if(gradient.opacity > 0){
				gradient.opacity = Math.round(gradient.opacity*255)
				gradient.colors = gradient.colors.replace(/\s/g, '').split(`,`).map(c => {
					var hex = gradient.opacity.toString(16)
					console.log(hex)
					return c+(hex.length === 1 ? "0" + hex : hex)
				}).join(`,`)

				if(options.debug){ 
					console.log(gradient.colors)
				}
			}

			switch (gradient.type) {
				case `linear`:
					this.background.push(`linear-gradient(${gradient.angle}, ${gradient.colors})`)
					break
				case `radial`:
					if (gradient.shape === undefined) gradient.shape = `ellipse`
					this.background.push(`radial-gradient(${gradient.shape}, ${gradient.colors})`)
					break
				default:
					throw `${this.errorMessage} Invalid gradient type "${gradient.type}"`
					break
			}

		})

		if(options.debug){ 
			console.log(this.background.toString())
		}

		element.style.backgroundImage = this.background.toString()
	}
}

/* Tests */

var gradientify = new Gradientify()

gradientify.changeBackground(document.body, [{
	type: `linear`,
	angle: `60deg`,
	colors: `#11ff33, #aa3fff`,
	opacity: .5
},{
	type: `radial`,
	angle: `94deg`,
	colors: `#1133ff, #22ffff`,
	opacity: 1
}], {
	debug: true
})