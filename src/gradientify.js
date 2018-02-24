class Gradientify {

	constructor(input){
		this.gradients = []
		this.mainElement = input.element
		this.mainGradientIndex = 0
		this.animate = this.animate.bind(this)

		input.gradients.map((gradient, gradientIndex) => {
			let newElement = document.createElement("div")

			Object.assign(newElement.style, {
				backgroundImage: gradient,
				opacity: (gradientIndex === this.mainGradientIndex) ? 1:0,
				width: `100%`,
				height: `100%`,
				position: `absolute`,
				transitionTimingFunction: `linear`,
				transitionDuration: `${input.interval/1000}s`,
				top: `0`,
				left: `0`,
				zIndex: `-999`
			})

			this.gradients.push(newElement)
			this.mainElement.append(newElement)
		})

		this.animate()

		setInterval(()=>{
			this.animate()
		}, input.interval+input.delay+50)
	}

	animate(){
		this.gradients.map((gradient, gradientIndex) => {
			if(gradientIndex === this.mainGradientIndex) gradient.style.opacity = 1
			else gradient.style.opacity = 0
		})

		this.mainGradientIndex = (++this.mainGradientIndex % this.gradients.length)
	}
}