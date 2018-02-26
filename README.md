# gradientify.js

![](https://image.ibb.co/fT8O3H/Screenshot_137.png)

## Getting Started

Basic initalisation:

```javascript
new Gradientify({
  element: document.body, // Main element where gradients will appear
  gradients: [ // The gradients which will appear in transitions
    `linear-gradient(60deg, rgb(255, 0, 0), rgb(0, 0, 255))`,
    `linear-gradient(10deg, rgb(25, 123, 23), #ff22af)`,
    `radial-gradient(rgb(25, 123, 223), red)` // All valid CSS gradients are supported
  ],
  fixed: false, // Position of the gradients, if true - overflow of the main element will be hidden to prevent gradients from escaping the element
  delay: 0, // Delay between gradient transitions
  interval: 1300 // How often the gradients will be changed
})
```

## Contributing

I'm open for any contributors and pull requests.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


