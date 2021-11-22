/*slider*/
const slider = document.querySelector(".slider-section .container .slider");
const container = document.querySelector(".slider-section .container");
const images = document.querySelectorAll(".slider img");

const pervbtn = document.querySelector(".container .left-btn");
const nextbtn = document.querySelector(".container .right-btn");

const dots = document.querySelectorAll(".container-dots-container .counter-dots");

let counter = 1;
let widthOfimages = container.offsetWidth;
const numberOfImages = images.length;

slider.style.transform = "translateX(" + (-widthOfimages *counter ) + "px)";


function autoSlider() {
  setInterval(function(){ goToNextImageInSlider(); }, 3000);
}
autoSlider();

nextbtn.addEventListener("click",() => {
  goToNextImageInSlider();
});
pervbtn.addEventListener("click",() => {
goToPervImageInSlider();  
});

slider.addEventListener("transitionend", () => {
  if(images[counter].id === "last-clone"){
    slider.style.transition = "none";
    counter = 4;
    slider.style.transform = "translate(" + (-widthOfimages*counter) + "px)";
  }
  if(images[counter].id === "first-clone"){
    slider.style.transition = "none";
    counter = 1;
    slider.style.transform = "translate(" + (-widthOfimages*counter) + "px)";

  }
});

function goToNextImageInSlider(){
  if(counter >=images.length - 1) return;
  slider.style.transition = "transform .4s ease-in-out";
  counter++;
  slider.style.transform = "translate(" + (-widthOfimages*counter) + "px)";
}
function goToPervImageInSlider(){
  if(counter <=0) return;
  slider.style.transition = "transform .4s ease-in-out";
  counter--;
  slider.style.transform = "translate(" + (-widthOfimages*counter) + "px)";
}

/*mini slider */

