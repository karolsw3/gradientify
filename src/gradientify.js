/*
 * Gradientify.js
 * ------------
 * Version : 3.0.0
 * Author  : Karol Świerczek (@karolsw2)
 */

;(function () {
  'use strict'

  var gf

  function Gradientify () {
    if (typeof this === `undefined` || Object.getPrototypeOf(this) !== Gradientify.prototype) {
      return new Gradientify()
    }
    gf = this
    return gf
  }

  Gradientify.prototype.defaults = {
    interval: 3000,
    target: document.body
  }

  Gradientify.prototype.gradientifize = function (target, gradients, interval) {
    let elements
    if (gradients.constructor !== Array) {
      loadPresetsJSON((presets) => {
        interval = presets[gradients].interval
        gradients = presets[gradients].gradients
        elements = appendGradientsOnTarget(target, gradients, interval)
        initialiseInterval(elements, interval)
      })
    } else {
      elements = appendGradientsOnTarget(target, gradients, interval)
      initialiseInterval(elements, interval)
    }
  }

  function loadPresetsJSON (callback) {
    let xobj = new XMLHttpRequest()
    xobj.overrideMimeType('application/json')
    xobj.open('GET', 'https://raw.githubusercontent.com/karolsw2/gradientify.js/master/build/presets.json', true)
    xobj.onreadystatechange = function () {
      if (xobj.readyState === 4 && xobj.status === 200) {
        let presets = JSON.parse(xobj.responseText)
        callback(presets)
      }
    }
    xobj.send(null)
  }

  function appendGradientsOnTarget (target, gradients, interval) {
    return gradients.map((gradient, index) => {
      let gradientElement = createGradientElement(gradient, index, interval)
      target.append(gradientElement)
      return gradientElement
    })
  }

  function createGradientElement (gradient, index, interval) {
    let gradientElement = document.createElement(`div`)

    Object.assign(gradientElement.style, {
      backgroundImage: gradient,
      opacity: (index === 0) ? 1 : 0,
      transitionDuration: `${interval / 1000}s`
    })

    gradientElement.classList.add(`gradientify-gradient`)

    return gradientElement
  }

  function initialiseInterval (elements, interval) {
    setInterval(() => {
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.opacity === `1`) {
          elements[i].style.opacity = 0
          elements[++i % elements.length].style.opacity = 1
        }
      }
    }, interval + 40)
  }

  window.Gradientify = Gradientify
})()
