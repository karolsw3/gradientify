class Gradientify {

	constructor(){
		this.gradients = []
		this.mainElement = document.body
		this.mainGradientIndex = 0

		this.setBackground = this.setBackground.bind(this)
		this.animate = this.animate.bind(this)
	}

	animate(input) {

		this.gradients.map(gradient => {
			gradient.style.transitionDuration = `${input.interval/1000}s`
		})

		setInterval(()=>{
			this.gradients.map((gradient, gradientIndex) => {
				if(gradientIndex === this.mainGradientIndex) gradient.style.opacity = 1
				else gradient.style.opacity = 0
			})
			this.mainGradientIndex = (++this.mainGradientIndex % this.gradients.length)
		}, input.interval+input.delay+50)

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
			newElement.style.transitionTimingFunction = `linear`
			newElement.style.top = `0`
			newElement.style.left = `0`
			newElement.style.zIndex = `-999`

			this.gradients.push(newElement)
			this.mainElement.append(newElement)

		})
	}
}