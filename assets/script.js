const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowLeft = document.querySelector(".arrow_left");
	arrowLeft.addEventListener("click", (event) => {
	console.log("Vous avez cliqué sur la flèche gauche")
});

let arrowRight = document.querySelector(".arrow_right");
	arrowRight.addEventListener("click", (event) => {
	console.log("Vous avez cliqué sur la flèche droite")
});


/*let dotsNumber = slides.length;
console.log(dotsNumber)*/

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div")
	dot.classList.add("dot")
	let parentElement = document.querySelector(".dots")
	parentElement.appendChild(dot)
	if (i == 0 ) {
		dot.classList.add("dot_selected")
	}
}