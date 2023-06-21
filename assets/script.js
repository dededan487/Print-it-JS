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


const arrow_left = document.querySelector(".arrow_left"); // declarations des fleches dans le DOM
const arrow_right = document.querySelector(".arrow_right ");
let index = 0;  //Cette variable est initialisée à 0, la première image du diaporama.

function leftClick() {
	console.log("Flèche gauche cliquée");

	index = index - 1; // click gauche on retire 1 de l'index pour revenir en arriere
	if (index < 0) {
		index = slides.length - 1; // Si l'index devient négatif, revenir à la dernière diapositive
	}
	displaySlide(index); // Appel initial de la fonction avec l'index actuel
	updateDotSelection(index); //Appel de la fonction pour selectionner le point associer à l'image et changer sa classe
};
arrow_left.addEventListener("click", leftClick); // Ajout  événements de clic à la flèches gauche

function rightClick() {
	console.log("Flèche droite cliquée");

	index++; // Incrémentation de l'index pour la prochaine image
	if (index >= slides.length) {
		index = 0; // Réinitialisation de l'index à 0 pour revenir à la première image
	}
	displaySlide(index); // Appel initial de la fonction avec l'index actuel
	updateDotSelection(index); // Appel de la fonction pour selectionner le point associer à l'image et changer sa classe
}
arrow_right.addEventListener("click", rightClick); // Ajout  événements de clic à la flèches droite

// fonction initialisation des bullet point et association avec les images
function dotInit() {
	const dots = document.querySelector(".dots"); // Sélectionnez le conteneur des points dans const locale
	
	// boucle pour associer tous les elements aux images
	for (let i = 0; i < slides.length; i++) {
		let dot = document.createElement("p"); // Créez un nouvel élément p pour représenter le point
		dot.classList.add("dot"); // Ajout de  la classe CSS "dot" à l'élément dot pour afficher sur banner
		dot.setAttribute("data-index", i); // Ajout de l'attribut data-index avec la valeur de l'index
		dots.appendChild(dot); // Ajout de l'élément dot au conteneur des points
	}
}

function displaySlide() {
	// Récupérer la diapositive correspondant à l'index actuel
	const slide = slides[index];

	// Extraire l'image et la légende de la diapositive
	const image = slide.image;
	const tagLine = slide.tagLine;

	// Sélectionner l'élément de l'image et de la légende dans le DOM
	const slideImage = document.getElementById("slideImage");
	const slideTagLine = document.getElementById("slideTagLine");

	// Mettre à jour la source de l'image avec l'image correspondante
	slideImage.src = image; 

	// Afficher la légende associée à l'image
	slideTagLine.innerHTML = tagLine; 

	// Afficher l'image dans le DOM
	console.log("Affichage de l'image :", image);  
}

function updateDotSelection() {
	// Sélectionner tous les éléments dot
	let allDot = document.querySelectorAll(".dot"); 

	// Parcourir chaque élément dot
	allDot.forEach((point)=> {
		// Supprimer la classe dot_selected pour tous les éléments
		point.classList.remove("dot_selected");
	});

	// Ajouter la classe dot_selected à l'élément dot correspondant à l'index actuel
	allDot[index].classList.add("dot_selected");
}

dotInit() // Appel pour la mise en place des points
displaySlide(); // Appel initial de displaySlide avec l'index 0
updateDotSelection(); // Mettre à jour la sélection du premier point







