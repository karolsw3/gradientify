class Gradientify {
  constructor (input) {
    this.input = input
    this.interval = null
    this.gradients = []
    this.mainElement = input.element
    this.mainGradientIndex = 0

    this.init = this.init.bind(this)
    this.createGradientElement = this.createGradientElement.bind(this)
    this.initialiseInterval = this.initialiseInterval.bind(this)
    this.makeNewGradientVisible = this.makeNewGradientVisible.bind(this)
    this.loadJSON = this.loadJSON.bind(this)

    this.init()
  }

  init () {
    this.gradients = []
    this.input.gradients.map((gradient, gradientIndex) => {
      let newGradient = this.createGradientElement({
        backgroundImage: gradient,
        index: gradientIndex,
        position: this.input.fixed,
        transitionDuration: this.input.interval
      })
      if (this.input.fixed) this.mainElement.style.overflow = `hidden`

      this.gradients.push(newGradient)
      this.mainElement.append(newGradient)
    })

    clearInterval(this.interval)
    this.initialiseInterval({
      interval: this.input.interval,
      delay: this.input.delay
    })
  }

  createGradientElement (gradientConfig) {
    let newElement = document.createElement('div')

    Object.assign(newElement.style, {
      backgroundImage: gradientConfig.backgroundImage,
      opacity: (gradientConfig.index === this.mainGradientIndex) ? 1 : 0,
      transitionDuration: `${gradientConfig.transitionDuration / 1000}s`,
      position: gradientConfig.fixed ? `fixed` : `absolute`
    })

    newElement.classList.add(`gradientify-gradient`)

    return newElement
  }

  getPreset (presetHash) {
    this.loadJSON((data) => {
      this.input.gradients = data[presetHash].gradients
      console.log(data[presetHash].gradients)
      this.init()
    })
  }

  loadJSON (callback) {
    var xobj = new XMLHttpRequest()
    xobj.overrideMimeType('application/json')
    xobj.open('GET', './src/presets.json', true)
    xobj.onreadystatechange = function () {
      if (xobj.readyState === 4 && xobj.status === 200) {
        callback(JSON.parse(xobj.responseText))
      }
    }
    xobj.send(null)
  }

  initialiseInterval (intervalConfig) {
    this.makeNewGradientVisible()
    this.interval = setInterval(() => {
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
