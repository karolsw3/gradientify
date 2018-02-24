class Gradientify {

	constructor(){
		this.backgrounds = []
		this.mainElement = document.body
		this.currentGradientIndex = 0
		this.errorMessage = `Gradientify:`

		this.setBackground = this.setBackground.bind(this)
		this.animate = this.animate.bind(this)
	}

	animate(input) {
		setTimeout(()=>{
			setInterval(()=>{

			}, input.interval)
		}, input.delay)
	}

	setBackground(input) {

		this.mainElement = input.element

		input.gradients.map(gradient => {
			let newElement = document.createElement("div")

			newElement.style.backgroundImage = gradient.gradient
			newElement.style.opacity = gradient.opacity
			newElement.style.width = `100%`
			newElement.style.height = `100%`
			newElement.style.position = `absolute`
			newElement.style.top = `0`
			newElement.style.left = `0`

			this.backgrounds.push(newElement)
			this.mainElement.append(newElement)

		})
	}
}