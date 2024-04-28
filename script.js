//funcionalidades para slider

const sliderContainer = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.imagen-slider');
const totalImages = sliderImages.length;
 
let currentIndex = 0;


function showNextImage() {
    sliderImages[currentIndex].style.display = 'none';
    currentIndex++;
    if (currentIndex >= totalImages) {
      currentIndex = 0;
    }
    sliderImages[currentIndex].style.display = 'block';
  }
  
  
  function startTimer() {
     sliderImages[currentIndex].style.display = 'block';
      setInterval(showNextImage, 5000);
  }
  
  window.addEventListener('load', startTimer);
  
   
const navBar = document.querySelector("#nav-bar");
const botonCerrar =document.querySelector("#boton-cerrar");
const botonesBarra = document.querySelectorAll("#item-link")
const buttonNavBarOpen = document.querySelector('#btn-nav-bar')

buttonNavBarOpen.addEventListener('click', function () {
    navBar.classList.add('nav-active')
  })
botonCerrar.addEventListener("click", () =>{
    navBar.classList.remove("nav-active")
})

botonesBarra.forEach((boton) =>{
  boton.addEventListener("click", () =>{
    navBar.classList.remove("nav-active")
  })
})