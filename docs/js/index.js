'use strict'

var gf = Gradientify()

gf.create(document.body, ['linear-gradient(60deg, rgb(255, 91, 91), rgb(0, 0, 255))', 'linear-gradient(10deg, rgb(180, 132, 203), rgb(255, 0, 155))', 'radial-gradient(at center center, rgb(75, 35, 148), rgb(0, 71, 57))', 'linear-gradient(130deg, rgb(235, 23, 223), rgb(25, 89, 135), rgb(15, 189, 176))'], 2600)

var app = new Vue({
  el: '#presets',
  data: {
    presets: []
  }
})

function shuffleArray (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

var xobj = new XMLHttpRequest()
xobj.overrideMimeType('application/json')
xobj.open('GET', 'https://cdn.rawgit.com/karolsw2/gradientify.js/master/build/presets.json', true)
xobj.onreadystatechange = function () {
  if (xobj.readyState === 4 && xobj.status === 200) {
    app.presets = shuffleArray(JSON.parse(xobj.responseText))
    Vue.nextTick().then(function () {
      gf.getPresets('https://cdn.rawgit.com/karolsw2/gradientify.js/master/build/presets.json', function () {
        app.presets.map(function (preset) {
          gf.loadFromPreset(document.getElementById(preset.hash), preset.hash, 2000)
        })
      })
    })
  }
}
xobj.send(null)

document.addEventListener('scroll', () => {
  var scroll = document.documentElement.scrollTop
  document.getElementsByClassName('header__image')[0].style.top = scroll * 0.45 + "px"
})
