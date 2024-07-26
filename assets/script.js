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

/*************/
/* VARIABLES */
/*************/
const parentElement = document.querySelector(".dots");
let text = document.querySelector("#banner p");
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let index = 0;
let imgDisplay = document.querySelector(".banner-img");


/* Loop display dots */
for (index = 0; index < slides.length; index++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	parentElement.appendChild(dot);
};
index = 0; // Reset index to 0

parentElement.firstChild.classList.add("dot_selected"); // First dot is selected

let tabDots = document.querySelectorAll(".dot");

/*************/
/* FUNCTIONS */
/*************/

/* Slide function */
function doSlice (index) {
	tabDots[index].classList.add('dot_selected');
	imgDisplay.src = `./assets/images/slideshow/${slides[index].image}`;
	text.innerHTML = slides[index].tagLine;
}


/**********/
/* METHOD */
/**********/

/* Click on arrow */
/* Left arrow */
arrowLeft.addEventListener("click", () => {
	tabDots[index].classList.remove("dot_selected");
	if (index > 0) {
		doSlice(index-1);
		index-=1;
	}
	else {
		doSlice(tabDots.length-1);
		index = tabDots.length-1;
	}
	
});

/* Right arrow */
arrowRight.addEventListener("click", () => {
	tabDots[index].classList.remove("dot_selected");
	if (index < tabDots.length-1) {
		doSlice(index+1);
		index+=1;
	}
	else {
		doSlice(0);
		index = 0;
	}
});