class Gradientify {
  constructor (input) {
    this.gradients = []
    this.mainElement = input.element
    this.mainGradientIndex = 0

    this.init = this.init.bind(this)
    this.createGradient = this.createGradient.bind(this)
    this.initialiseInterval = this.initialiseInterval.bind(this)
    this.makeNewGradientVisible = this.makeNewGradientVisible.bind(this)

    this.init(input)
  }

  init (input) {
    input.gradients.map((gradient, gradientIndex) => {
      let newGradient = this.createGradient({
        backgroundImage: gradient,
        index: gradientIndex,
        position: input.fixed,
        transitionDuration: input.interval
      })
      if (input.fixed) this.mainElement.style.overflow = `hidden`

      this.gradients.push(newGradient)
      this.mainElement.append(newGradient)
    })

    this.initialiseInterval({
      interval: input.interval,
      delay: input.delay
    })
  }

  createGradient (gradientConfig) {
    let newElement = document.createElement('div')
    Object.assign(newElement.style, {
      backgroundImage: gradientConfig.backgroundImage,
      opacity: (gradientConfig.index === this.mainGradientIndex) ? 1 : 0,
      width: `100%`,
      height: `100%`,
      transitionTimingFunction: `linear`,
      transitionDuration: `${gradientConfig.transitionDuration / 1000}s`,
      position: gradientConfig.fixed ? `fixed` : `absolute`,
      top: `0`,
      left: `0`,
      zIndex: `-999`
    })
    return newElement
  }

  initialiseInterval (intervalConfig) {
    this.makeNewGradientVisible()
    setInterval(() => {
      this.makeNewGradientVisible()
    }, intervalConfig.interval + intervalConfig.delay + 40)
  }

  makeNewGradientVisible () {
    this.gradients.map((gradient, gradientIndex) => {
      if (gradientIndex === this.mainGradientIndex) gradient.style.opacity = 1
      else gradient.style.opacity = 0
    })
    this.mainGradientIndex = (++this.mainGradientIndex % this.gradients.length)
  }
}
