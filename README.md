<p align="center">
  <img src="https://image.ibb.co/eGhiZc/logo.png"><br>
  <b>Animated backgrounds made easy</b>
</p>

## Getting Started

To include the library you can download it, or simply use CDN links:
```html
<!-- Place this in the <head> tag -->
<link rel='stylesheet' type='text/css' href='https://cdn.rawgit.com/karolsw2/gradientify.js/06564801/build/gradientify.css'>
<!-- And this before </body> closing tag -->
<script src='https://cdn.rawgit.com/karolsw2/gradientify.js/master/build/gradientify.js'>
```

Basic initialisation:

```javascript
var gf = Gradientify();

gf.create(document.body, [ // Target element
  "linear-gradient(60deg, rgb(255, 0, 0), rgb(0, 0, 255))", // Gradients CSS
  "linear-gradient(10deg, rgb(25, 123, 23), #ff22af)",
  "radial-gradient(rgb(25, 123, 223), red)"
], 2000); // Interval
```

You can also load ready-made presets:

```javascript
var gf = Gradientify();

gf.getPresets("https://rawgit.com/karolsw2/gradientify.js/master/build/presets.json", () => { 
  gf.loadFromPreset(document.body,"b3aff9", 4000) // element, hash number, interval
  gf.loadFromPreset(document.getElementById("yourElementId"),"a9bb02", 3600)
});
```
You can load specific preset by using its hash number.
Just visit https://karolsw3.github.io/gradientify.js/ , search for your favourite gradient and copy its hash number.

Remember that if you want your gradients to be placed properly into the target element, you have to set your targets CSS position to relative.


## Contributing

I'm open for any contributors and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


