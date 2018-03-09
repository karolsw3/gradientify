# gradientify.js

![](https://image.ibb.co/fT8O3H/Screenshot_137.png)

## Getting Started

Live demo: https://karolsw2.github.io/gradientify.github.io/

Basic initialisation:

```javascript
var gf = Gradientify()

gf.gradientifize(document.body, [ // Specify target element
  'linear-gradient(60deg, rgb(255, 0, 0), rgb(0, 0, 255))', // Gradients CSS
  'linear-gradient(10deg, rgb(25, 123, 23), #ff22af)',
  'radial-gradient(rgb(25, 123, 223), red)'
], 2000) // Interval
```

You can also load ready-made presets:

```javascript
var gf = Gradientify()
gf.gradientifize(document.body,'f4a4dF', 2000)
```
Presets will be loaded from presets.json located in the build/ folder.
All presets are shown on the webiste. 

Remember that if you want your gradients to be placed properly into the target element, you have to set your targets CSS position to relative.


## Contributing

I'm open for any contributors and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


