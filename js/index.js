
var background = {...gradientify}
background.init({
  element: document.body,
  gradients: ['linear-gradient(60deg, rgb(255, 91, 91), rgb(0, 0, 255))',
    'linear-gradient(10deg, rgb(180, 132, 203), rgb(255, 0, 155))',
    'radial-gradient(at center center, rgb(75, 35, 148), rgb(0, 71, 57))',
    'linear-gradient(130deg, rgb(235, 23, 223), rgb(25, 89, 135), rgb(15, 189, 176))'],
  fixed: !1,
  delay: 0,
  interval: 2600
})

var app = new Vue({
  el: '#presets',
  data: {
    gradients: [],
    presets: ''
  },
  updated: function () {
    this.gradients.push({...gradientify})
    this.gradients[0].loadPreset({
      element: document.getElementById(`f4a4dF`),
      hash: `f4a4dF`
    })
  }
})

gradientify.loadPresetsJSON('https://raw.githubusercontent.com/karolsw2/gradientify.js/master/build/presets.json', () => {
  app.presets = gradientify.presets
  console.log(`Presets loaded!`)
})
