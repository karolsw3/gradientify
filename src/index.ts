export default class Gradientify {
  public target: string
  public gradients: string[]
  public fadeInterval: number // In miliseconds

  private gradientElements!: HTMLElement[][]
  private interval!: number // setInterval type (yes, it's a number. lol)

  constructor (
    target: string,
    gradients: string[],
    fadeInterval: number
  ) {
    this.target = target
    this.gradients = gradients
    this.fadeInterval = fadeInterval
    this.createGradientElements()
    this.appendGradients()
    this.startAnimation()
  }

  /*
    This guy beneath is responsible for creating
    divs with gradient backgrounds, which are going
    to be appended to the target element(s) 👩🏻‍🔬
  */
  private createGradientElements () {
    let targetElements = Array.from(document.querySelectorAll(this.target))
    this.gradientElements = targetElements.map(() => {
      return this.gradients.map((gradient, index) => {
        let gradientElement = document.createElement('div')
        Object.assign(gradientElement.style, {
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: index === 0 ? 1:0,
          top: 0,
          left: 0,
          transitionTimingFunction: 'linear',
          backgroundImage: gradient,
          transitionDuration: `${this.fadeInterval / 1000}s`,
        })
        return gradientElement
      })
    })
  }

  // Time to append our gradients! 🧚‍♀️
  private appendGradients () {
    let targetElements = document.querySelectorAll(this.target)
    targetElements.forEach((targetElement, targetIndex) => {
      if (targetElement instanceof HTMLElement) {
        if (targetElement.style.position !== 'absolute') {
          targetElement.style.position = 'relative'
        }
        this.gradientElements[targetIndex].forEach(element => {
          targetElement.appendChild(element)
        })
      } else {
        throw new Error(`Element ${this.target} doesn't exists!`)
      }
    })
  }

  /*
    Here lies the whole magic of this library:
    Every X seconds we set the opacity of the next
    gradient element to 1, and a CSS transition does the rest. Yay!
    *uncomfortably complex computations grinning in the background*
  */
  public startAnimation () {
    this.interval = setInterval(() => {
      for (let [targetIndex, gradientElements] of this.gradientElements.entries()) {
        for (let [elementIndex, element] of gradientElements.entries()) {
          if (element.style.opacity === '1') {
            element.style.opacity = '0'
            let nextElement = this.gradientElements[targetIndex][++elementIndex % this.gradientElements[targetIndex].length]
            nextElement.style.opacity = '1'
            break
          }
        }
      }
    }, this.fadeInterval)
  }

  // Fairly straightforward
  public stopAnimation () {
    clearInterval(this.interval)
  }
}
