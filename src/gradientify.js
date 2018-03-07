/**
 * Gradientify.js
 * ------------
 * Version : 3.0.0
 * Author  : Karol Świerczek (@karolsw2)
 */

;(function () {
  'use strict'

  var gf

  function Gradientify () {
    if (typeof this === 'undefined' || Object.getPrototypeOf(this) !== Gradientify.prototype) {
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
    appendGradientsOnTarget(target, gradients, interval)
  }

  function appendGradientsOnTarget (target, gradients, interval) {
    gradients.map((gradient, index) => {
      let gradientElement = createGradientElement(gradient, index, interval)
      target.append(gradientElement)
    })
  }

  function createGradientElement (gradient, index, interval) {
    let gradientElement = document.createElement('div')

    Object.assign(gradientElement.style, {
      backgroundImage: gradient,
      opacity: (index === 0) ? 1 : 0,
      transitionDuration: `${interval / 1000}s`
    })

    gradientElement.classList.add(`gradientify-gradient`)

    return gradientElement
  }

  window.Gradientify = Gradientify
})()
