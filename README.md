# gradientify.js

![](https://image.ibb.co/fT8O3H/Screenshot_137.png)

## Getting Started

Live demo: https://karolsw2.github.io/gradientify.github.io/

Basic initialisation:

```javascript
gradientify.init({
  element: document.body, // Main element where gradients will appear
  gradients: [ // The gradients which will appear in transitions
    `linear-gradient(60deg, rgb(255, 0, 0), rgb(0, 0, 255))`,
    `linear-gradient(10deg, rgb(25, 123, 23), #ff22af)`,
    `radial-gradient(rgb(25, 123, 223), red)` // All valid CSS gradients are supported
  ],
  interval: 1300 // How often the gradients will be changed
})
```

You can also load ready-made presets:

```javascript
gradientify.loadPresetsJSON('https://raw.githubusercontent.com/karolsw2/gradientify.js/master/build/presets.json',()=>{
  gradientify.loadPreset({element: document.body, hash: `f4a4dF`})
})
```


## Contributing

I'm open for any contributors and pull requests.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


