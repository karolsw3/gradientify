
new Gradientify({
	element: document.getElementById(`header`),
	gradients: [
		`linear-gradient(60deg, rgba(255, 0, 0), rgba(0, 0, 255))`,
		`linear-gradient(10deg, rgba(25, 123, 23), rgba(255, 0, 155))`,
		`radial-gradient(rgba(25, 123, 223), rgba(5, 133, 5))`,
		`linear-gradient(130deg, rgba(25, 23, 223), rgba(25, 89, 5), rgba(15, 189, 176))`,
	],
	fixed: false,
	delay: 0,
	interval: 1300
})
