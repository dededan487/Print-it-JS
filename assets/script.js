const slides = [
	{
		"image": "assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"

	},
	{
		"image": "assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"

	},
	{
		"image": "assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right ");
console.log(arrow_left, arrow_right); // Appeler les fleches dans le DOM

arrow_left.addEventListener("click", () => {
	console.log("Flèche gauche cliquée"); // evenement au click GH

	index--; // Incrémentation de l'index pour la prochaine image

	if (index < 0) {
		index = slides.length - 1; // Si l'index devient négatif, revenir à la dernière diapositive
	}

	displaySlide(index); // Appel initial de la fonction avec l'index actuel
	updateDotSelection(index);
});

arrow_right.addEventListener("click", () => {
	console.log("Flèche droite cliquée"); // evenement au click DT

	index++; // Incrémentation de l'index pour la prochaine image

	if (index >= slides.length) {
		index = 0; // Réinitialisation de l'index à 0 pour revenir à la première image
	}
	displaySlide(index); // Appel initial de la fonction avec l'index actuel
	updateDotSelection(index);

});

let dots = document.querySelector(".dots"); // Sélectionnez le conteneur des points

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("p"); // Créez un nouvel élément p pour représenter le point
	dot.classList.add("dot"); // Ajoutez la classe CSS "dot" à l'élément dot
	dot.setAttribute("data-index", i); // Ajouter l'attribut data-index avec la valeur de l'index
	dots.appendChild(dot); // Ajoutez l'élément dot au conteneur des points

}

let index = 0;
displaySlide(0); // Appel initial de displaySlide avec l'index 0
updateDotSelection(index); // Mettre à jour la sélection du premier point

function displaySlide(index) {
	const slide = slides[index];
	const image = slide.image;
	const tagLine = slide.tagLine;

	const slideImage = document.getElementById("slideImage");
	const slideTagLine = document.getElementById("slideTagLine");

	// Mettre à jour la source de l'image avec l'image correspondante
	slideImage.src = image;
	// Afficher la légende associée à l'image
	slideTagLine.innerHTML = tagLine;

	// Afficher l'image dans le DOM 
	console.log("Affichage de l'image :", image);
}

function updateDotSelection(index) {
	 allDot = document.querySelectorAll(".dot");
	allDot.forEach(function(point){
		point.classList.remove("dot_selected");
	});
	allDot[index].classList.add("dot_selected");
}

console.log("Element dot:", dots);






