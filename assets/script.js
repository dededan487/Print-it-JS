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

	displaySlide(index); // Appel initial de la fonction avec l'index actuel
	index--; // Incrémentation de l'index pour la prochaine image

	if (index < 0) {
		index = slides.length - 1;
	}
});

arrow_right.addEventListener("click", () => {
	console.log("Flèche droite cliquée"); // evenement au click DT
	displaySlide(index); // Appel initial de la fonction avec l'index actuel
	index++; // Incrémentation de l'index pour la prochaine image

	if (index >= slides.length) {
		index = 0; // Réinitialisation de l'index à 0 pour revenir à la première image
	}

});

// Appel initial de displaySlide avec l'index 0
displaySlide(0);
let dots = document.querySelector(".dots"); // Sélectionnez le conteneur des points

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("p"); // Créez un nouvel élément p pour représenter le point
	dot.classList.add("dot"); // Ajoutez la classe CSS "dot" à l'élément dot
	dot.setAttribute("data-index", i); // Ajouter l'attribut data-index avec la valeur de l'index
	dots.appendChild(dot); // Ajoutez l'élément dot au conteneur des points

}

let index = 0;
function displaySlide(index) {
	const slide = slides[index];
	const image = slide.image;
	const slideImage = document.getElementById("slideImage");

	// Mettre à jour la source de l'image avec l'image correspondante
	slideImage.src = image;

	// Afficher l'image dans le DOM (par exemple, en utilisant un élément <img>)
	// Remplacez la ligne ci-dessous par le code approprié pour afficher l'image
	console.log("Affichage de l'image :", image);

}
console.log("Element dot:", dots);






