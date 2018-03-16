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

  Gradientify.prototype.create = function (target, gradients, interval) { // Create gradient background from own specified set
    let elements
    elements = createGradientElements(gradients, interval, target)
    appendElementsOnTarget(elements, target)
    initialiseInterval(elements, interval)
  }

  Gradientify.prototype.loadFromPreset = function (target, hash, interval) { // When the presets.json are loaded - create gradient background from specified preset
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

  Gradientify.prototype.getPresets = function (url, callback) { // Load gradient presets.json from specified url
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

  function appendElementsOnTarget (elements, target) { // Append gradient elements on the target element
    elements.map(element => {
      target.appendChild(element)
    })
  }

  function createGradientElements (gradients, interval, target) { // Create gradient elements from specified set of gradient backgrounds
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

  function initialiseInterval (elements, interval) { // Initialise interval to animate gradients
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
