class Gradientify {
  constructor (input) {
    this.gradients = []
    this.mainElement = input.element
    this.mainGradientIndex = 0
    this.animate = this.animate.bind(this)
    this.init = this.init.bind(this)

    this.init(input)
  }

  init (input) {
    input.gradients.map((gradient, gradientIndex) => {
      let newElement = document.createElement('div')

      if (input.fixed) this.mainElement.style.overflow = `hidden`

      Object.assign(newElement.style, {
        backgroundImage: gradient,
        opacity: (gradientIndex === this.mainGradientIndex) ? 1 : 0,
        width: `100%`,
        height: `100%`,
        transitionTimingFunction: `linear`,
        transitionDuration: `${input.interval / 1000}s`,
        position: input.fixed ? `fixed` : `absolute`,
        top: `0`,
        left: `0`,
        zIndex: `-999`
      })

      this.gradients.push(newElement)
      this.mainElement.append(newElement)
    })

    this.animate()

    setInterval(() => {
      this.animate()
    }, input.interval + input.delay + 40)
  }

  animate () {
    this.gradients.map((gradient, gradientIndex) => {
      if (gradientIndex === this.mainGradientIndex) gradient.style.opacity = 1
      else gradient.style.opacity = 0
    })

    this.mainGradientIndex = (++this.mainGradientIndex % this.gradients.length)
  }
}
