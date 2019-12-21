(Imagine a nice logo there)

#Gradientify

Create beautiful, animated gradients with ease.

Ever wanted to animate a gradient background, but CSS transitions dissapointed you with its unfunnily lack of this extremely-high-demand functionality? Worry no more!

See it in action: (link to a demo will soon be there)

## Installing

For wizards:

`npm i gradientify`


For less-experienced wizards:

``

## Usage

```javscript
let gradientify = new Gradientify(
  document.getElementById('fun'),
  [
    "linear-gradient(60deg, rgb(255, 0, 0), rgb(0, 0, 255))",
    "linear-gradient(10deg, rgb(25, 123, 23), #ff22af)",
    "radial-gradient(rgb(25, 123, 223), red)"
  ],
  5000 // Interval in miliseconds
)
```


