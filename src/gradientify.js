class Gradientify {
	constructor(){

	}

	create(element, angle, colors, type){
		var gradient = `linear-gradient(${angle}, ${colors.toString()})`
		console.log(gradient)
		element.style.background = gradient
	}
}

/* Tests */

var gradientify = new Gradientify()

gradientify.create(document.body, `60deg`, ['red','black'], `linear`)