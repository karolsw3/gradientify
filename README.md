<img src="logo.png" height="60">

Create beautiful, animated gradients with ease.

Ever wanted to animate a gradient background, but CSS transitions dissapointed you with its unfunnily lack of this in-extremely-high-demand functionality? Worry no more!

See it in action: (link to a demo will soon be there)

## Installation

For wizards:
```
npm i gradientify
```


For less-experienced wizards:
```html
<script src="https://gitcdn.link/cdn/karolsw3/gradientify/e921b5a569d07207ed8a41a79ed3adc547f2ff48/dist/gradientify.min.js"></script>
```

## Usage

```javascript
let gradientify = new Gradientify(
  '.yourClass',
  [
    "linear-gradient(60deg, rgb(255, 0, 0), rgb(0, 0, 255))", // Array of CSS gradients
    "linear-gradient(10deg, rgb(25, 123, 23), #ff22af)",
    "radial-gradient(rgb(25, 123, 223), red)"
  ],
  3000 // Interval in miliseconds
)
```


