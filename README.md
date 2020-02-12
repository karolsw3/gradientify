<img src="logo.png" height="45">

Create beautiful, animated gradients with ease.

Ever wanted to animate a gradient background, but CSS transitions disappointed you with their lack of this in-extremely-high-demand functionality? Worry no more!

<b style="font-size: 17px">
<a href="https://codepen.io/karolsw3/pen/povPevb">DEMO</a>
</b>

## Installation

For wizards:
```
npm i gradientify
```


For less-experienced wizards:
```html
<script src="https://rawcdn.githack.com/karolsw3/gradientify/7f5a74cd8380a843477b7abfa9baca2fd127013a/dist/gradientify.min.js"></script>
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
  3000 // Fading interval in miliseconds
)
```


