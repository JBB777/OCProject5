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


// let divParentBanner = document.getElementById("banner")

/* Affichage des deux flèches gauche et droite du carousel*/
// let imgArrowLeft = document.createElement("img")
// 	imgArrowLeft.src = './assets/images/arrow_left.png'
// 	imgArrowLeft.alt = 'Arrow Left'
// 	imgArrowLeft.classList.add("arrow")
// 	imgArrowLeft.classList.add("arrow_left")
// 	divParentBanner.appendChild(imgArrowLeft)

// let imgArrowRight = document.createElement("img")
// 	imgArrowRight.src = './assets/images/arrow_right.png'
// 	imgArrowRight.alt = 'Arrow Right'
// 	imgArrowRight.classList.add("arrow")
// 	imgArrowRight.classList.add("arrow_right")
// 	divParentBanner.appendChild(imgArrowRight)



let parentElement = document.querySelector(".dots")

/* Boucle permettant l'affichage des dots */
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div")
	dot.classList.add("dot")
	parentElement.appendChild(dot)

	/* Définition du dot n°1 qui sera selected */
	if (i == 0 ) {
		dot.classList.add("dot_selected")
	}
}
	


let text = document.querySelector("#banner p")
let tabDots = document.querySelectorAll(".dot")

// console.log(tabDots.length)



/* Fonction affichage du dot suivant ou précédent au clic */
function dotSuivant(tabDots, i) {
	if (tabDots[i].className == 'dot dot_selected') {
		tabDots[i].classList.remove("dot_selected")
		if (i == tabDots.length-1) {
			tabDots[0].classList.add('dot_selected')
		}
		else {
			tabDots[i+1].classList.add('dot_selected');
		}
	}
}

function dotPrecedent(tabDots, i) {
	if (tabDots[i].className == 'dot dot_selected') {
		tabDots[i].classList.remove("dot_selected")
		if (i == 0) {
			tabDots[tabDots.length-1].classList.add('dot_selected')
		}
		else {
			tabDots[i-1].classList.add('dot_selected');
		}
	}
}


// for (let i = 0; i<tabDots.length; i++){
// 	console.log(tabDots[i].className)
// };


/* Gestion des clic sur les flèches */
/* Flèche gauche */
let arrowLeft = document.querySelector(".arrow_left");
	arrowLeft.addEventListener("click", (event) => {
	let imgAffichee = document.querySelector(".banner-img")
	let imgName = imgAffichee.src.substring(imgAffichee.src.lastIndexOf("/")+1, imgAffichee.src.length)

	for (let i = 0; i < slides.length; i++) {
		dotPrecedent(tabDots, i)
		if (imgName == slides[i].image) {
			if (i == 0) {
				imgAffichee.src = './assets/images/slideshow/' + slides[slides.length-1].image
				text.innerHTML = slides[slides.length-1].tagLine
				break
			}
			else {
				imgAffichee.src = './assets/images/slideshow/' + slides[i-1].image
				text.innerHTML = slides[i-1].tagLine
				break
			}
		}
	}
	
});

/* Flèche droite */
let arrowRight = document.querySelector(".arrow_right");
	arrowRight.addEventListener("click", (event) => {
	let imgAffichee = document.querySelector(".banner-img")
	let imgName = imgAffichee.src.substring(imgAffichee.src.lastIndexOf("/")+1, imgAffichee.src.length)

	for (let i = 0; i < slides.length; i++) {
		dotSuivant(tabDots, i)
		if (imgName == slides[i].image) {
			if (i == slides.length-1) {
				imgAffichee.src = './assets/images/slideshow/' + slides[0].image
				text.innerHTML = slides[0].tagLine
				break
			}
			else {
				imgAffichee.src = './assets/images/slideshow/' + slides[i+1].image
				text.innerHTML = slides[i+1].tagLine
				break
			}
		}
	}
});