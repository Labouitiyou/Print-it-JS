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
function createDot(){
	let dot= document.createElement("div")
	dot.className="dot"
	const dots= document.querySelector(".dots")
	dots.appendChild(dot)
	return dot
	}


function addimage(){
const image = document.querySelector(".banner-img")
const text = document.querySelector("#banner p")
let i =0
image.src= ("./assets/images/slideshow/" + slides[i].image) 
listedots[i].className="dot dot_selected" 
let arrow_right = document.querySelector(".arrow_right");
    arrow_right.addEventListener("click", () => {
	    if (i === slides.length-1){
		i=0;
	    image.src= ("./assets/images/slideshow/" + slides[i].image) 
        listedots[i].className="dot dot_selected"
		listedots[slides.length-1].className="dot"
		text.innerHTML= slides[i].tagLine

	   }
	   else{
	   i++
	   image.src= ("./assets/images/slideshow/" + slides[i].image) 
        listedots[i].className="dot dot_selected" 
	    listedots[i-1].className="dot"
		text.innerHTML= slides[i].tagLine
       }
    });
let arrow_left = document.querySelector(".arrow_left");
    arrow_left.addEventListener("click", () => {
	    if(i===0){
		i = slides.length-1
		image.src= ("./assets/images/slideshow/" + slides[i].image) 
        listedots[i].className="dot dot_selected" 
	    listedots[0].className="dot"
		text.innerHTML= slides[i].tagLine
	    }
	    else{
	    i--
        image.src= ("./assets/images/slideshow/" + slides[i].image) 
        listedots[i].className="dot dot_selected"
        listedots[i+1].className="dot"
	    text.innerHTML= slides[i].tagLine
       }
    });
}


