var gradientify = (function () {
  var gradientify = {}

  var interval = 3000
  var gradients = []
  var gradientElements = []
  var mainElement = document.body
  var mainGradientIndex = 0

  gradientify.init = function (input) {
    mainElement = input.element
    gradients = input.gradients

    appendGradientsOnMainElement({
      interval: input.interval
    })

    clearInterval(interval)
    initialiseInterval({
      interval: input.interval
    })
  }

  gradientify.loadPreset = function (preset) {
    mainElement = preset.element

    loadJSON((data) => {
      gradients = data[preset.hash].gradients
      appendGradientsOnMainElement({
        interval: data[preset.hash].interval
      })

      clearInterval(interval)
      initialiseInterval({
        interval: data[preset.hash].interval
      })
    })
  }

  function appendGradientsOnMainElement (input) {
    gradients.map((gradient, gradientIndex) => {
      let newGradient = createGradientElement({
        backgroundImage: gradient,
        index: gradientIndex,
        transitionDuration: input.interval
      })

      gradientElements.push(newGradient)
      mainElement.append(newGradient)
    })
  }

  function createGradientElement (config) {
    let newElement = document.createElement('div')

    Object.assign(newElement.style, {
      backgroundImage: config.backgroundImage,
      opacity: (config.index === mainGradientIndex) ? 1 : 0,
      transitionDuration: `${config.transitionDuration / 1000}s`
    })

    newElement.classList.add(`gradientify-gradient`)

    return newElement
  }

  function loadJSON (callback) {
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

  function initialiseInterval (config) {
    makeNewGradientVisible()
    interval = setInterval(() => {
      makeNewGradientVisible()
    }, config.interval + 40)
  }

  function makeNewGradientVisible () {
    gradientElements.map((gradient, gradientIndex) => {
      if (gradientIndex === mainGradientIndex) gradient.style.opacity = 1
      else gradient.style.opacity = 0
    })
    mainGradientIndex = (++mainGradientIndex % gradientElements.length)
  }

  return gradientify
})()
