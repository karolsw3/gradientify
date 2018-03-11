/*
 * Gradientify.js
 * ------------
 * Version : 3.0.0
 * Author  : Karol Świerczek (@karolsw2)
 */

;(function () {
  'use strict'

  var gf
  var presets

  function Gradientify () {
    if (typeof this === `undefined` || Object.getPrototypeOf(this) !== Gradientify.prototype) {
      return new Gradientify()
    }
    gf = this
    return gf
  }

  Gradientify.prototype.data = {
    target: document.body,
    gradients: [],
    interval: 2000
  }

  Gradientify.prototype.gradientifize = function (target, gradients, interval) {
    let elements
    this.data.target = target
    this.data.gradients = gradients
    this.data.interval = interval
    if (gradients.constructor !== Array) {
      loadPresetsJSON((presets) => {
        presets.find(preset => {
          if (preset.id === gradients) {
            interval = preset.interval
            this.data.gradients = preset.gradients
          }
        })
        elements = appendGradientsOnTarget()
        initialiseInterval(elements)
      })
    } else {
      elements = appendGradientsOnTarget()
      initialiseInterval(elements)
    }
  }

  function loadPresetsJSON (callback) {
    if (!presets) {
      let xobj = new XMLHttpRequest()
      xobj.overrideMimeType('application/json')
      xobj.open('GET', 'https://rawgit.com/karolsw2/gradientify.js/master/build/presets.json', true)
      xobj.onreadystatechange = function () {
        if (xobj.readyState === 4 && xobj.status === 200) {
          presets = JSON.parse(xobj.responseText)
          callback(presets)
        }
      }
      xobj.send(null)
    } else {
      callback(presets)
    }
  }

  function appendGradientsOnTarget () {
    var gradients = Gradientify.prototype.data.gradients
    console.log(gradients)
    return gradients.map((gradient, index) => {
      let gradientElement = createGradientElement(gradient, index)
      Gradientify.prototype.data.target.append(gradientElement)
      return gradientElement
    })
  }

  function createGradientElement (gradient, index) {
    let gradientElement = document.createElement(`div`)

    Object.assign(gradientElement.style, {
      backgroundImage: gradient,
      opacity: (index === 0) ? 1 : 0,
      transitionDuration: `${Gradientify.prototype.data.interval / 1000}s`,
      zIndex: Gradientify.prototype.data.target === document.body ? -999 : 2
    })

    gradientElement.classList.add(`gradientify-gradient`)

    return gradientElement
  }

  function initialiseInterval (elements) {
    setInterval(() => {
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.opacity === `1`) {
          elements[i].style.opacity = 0
          elements[++i % elements.length].style.opacity = 1
        }
      }
    }, Gradientify.prototype.data.interval + 40)
  }

  window.Gradientify = Gradientify
})()
