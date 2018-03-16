/*
 * Gradientify.js
 * ------------
 * Version : 3.2.0
 * Author  : Karol Świerczek (@karolsw2)
 */

;(function () {
  'use strict'

  var gf
  var presets = []

  function Gradientify () {
    if (typeof this === `undefined` || Object.getPrototypeOf(this) !== Gradientify.prototype) {
      return new Gradientify()
    }
    gf = this
    return gf
  }

  // Create gradient background from own specified set
  Gradientify.prototype.create = function (target, gradients, interval) {
    let elements
    elements = createGradientElements(gradients, interval, target)
    appendElementsOnTarget(elements, target)
    initialiseInterval(elements, interval)
  }

  // When the presets.json are loaded - create gradient background from specified preset
  Gradientify.prototype.loadFromPreset = function (target, hash, interval) {
    let elements, gradients
    presets.map(preset => {
      if (preset.hash === hash) {
        interval = preset.interval
        gradients = preset.gradients
      }
    })
    elements = createGradientElements(gradients, interval, target)
    appendElementsOnTarget(elements, target)
    initialiseInterval(elements, interval)
  }

  // Load gradient presets.json from specified url
  Gradientify.prototype.getPresets = function (url, callback) {
    let xobj = new XMLHttpRequest()
    xobj.overrideMimeType('application/json')
    xobj.open('GET', url, true)
    xobj.onreadystatechange = function () {
      if (xobj.readyState === 4 && xobj.status === 200) {
        presets = JSON.parse(xobj.responseText)
        callback()
      }
    }
    xobj.send(null)
  }

  // Append gradient elements on the target element
  function appendElementsOnTarget (elements, target) {
    elements.map(element => {
      target.appendChild(element)
    })
  }

  // Create gradient elements from specified set of gradient backgrounds
  function createGradientElements (gradients, interval, target) {
    return gradients.map((gradient, index) => {
      let gradientElement = document.createElement(`div`)

      Object.assign(gradientElement.style, {
        backgroundImage: gradient,
        opacity: (index === 0) ? 1 : 0,
        transitionDuration: `${interval / 1000}s`,
        zIndex: target === document.body ? -999 : 2
      })

      gradientElement.classList.add(`gradientify-gradient`)

      return gradientElement
    })
  }

  // Initialise interval to animate gradients
  function initialiseInterval (elements, interval) {
    setInterval(() => {
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.opacity === `1`) {
          elements[i].style.opacity = 0
          elements[++i % elements.length].style.opacity = 1
        }
      }
    }, interval + 200)
  }

  window.Gradientify = Gradientify
})()
