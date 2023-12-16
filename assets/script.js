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
//clic flèche gauche et flèche droite ETAPE 2
	let arrows = document.querySelectorAll(".arrow img")

	for (let i=0; i<arrows.length; i++) {
		let listArrow = arrows[i];
		console.log(listArrow);

		listArrow.addEventListener("click", (event) => {
		myArrow = event.target
		console.log(`cliquable : ${myArrow.className}`)
	})
}

//Faire apparaitre des bulletPoints, 1 bulletPoint = 1 slide ETAPE 3
	function createAndInsertDot(className, id, targetSelector) {
		// Création de la nouvelle div
		let newDiv = document.createElement("div");
		newDiv.className = className;
		newDiv.id = id;
	  
		// Obtention de l'élément cible
		let targetElement = document.querySelector(targetSelector);
	  
		// Ajout de la nouvelle div à l'élément cible
		targetElement.appendChild(newDiv);
	  }

	  // Utilisation de la fonction pour créer et insérer les divs
	  createAndInsertDot("dot", "slide1", ".dots");
	  createAndInsertDot("dot", "slide2", ".dots");
	  createAndInsertDot("dot", "slide3", ".dots");
	  createAndInsertDot("dot", "slide3", ".dots");

//carrousel d'images
let numero = 0;

function changeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slides.length - 1;
    if (numero > slides.length - 1)
        numero = 0;

//récupération des images de chaque slide
	let imgSlide = document.querySelector(".banner-img")
    imgSlide.src = "./assets/images/slideshow/" + slides[numero].image;

//récupération des tags de chaque slide
	let tagSlide = document.querySelector("#banner p")
	tagSlide.innerHTML = slides[numero].tagLine;

	// ajouter la classe dot_selected à la dot correspondante
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === numero) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

setInterval("changeSlide(1)", 4000)
//récupérer les images
