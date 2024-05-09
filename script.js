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

//validacion contacto
const nameError = document.getElementById('name-error')
const telError = document.getElementById('tel-error')
const emailError = document.getElementById('email-error')
const msgError = document.getElementById('msg-error')
const submitError = document.getElementById('submit-error')

function validateName() {
  let name = document.getElementById('nombre').value;

  if(name.length == 0){
    nameError.innerHTML = 'Completar tu nombre'
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Escribe tu nombre completo';
    return false;
  }
  nameError.innerHTML = '<i class="bi bi-check"></i>';
  return true;
}

function validateTel() {
  let telefono = document.getElementById('telefono').value;

  if(telefono.length == 0){
    telError.innerHTML = 'Completar tu telefono'
    return false;
  }
  if(telefono.length !== 10){
    telError.innerHTML = 'El numero debe contener 10 digitos'
    return false;
  }
  if(!telefono.match(/^[0-9]{10}$/)){
    telError.innerHTML = 'Completar tu telefono'
    return false;
  }
  telError.innerHTML = '<i class="bi bi-check"></i>';
    return true;
}

function validateEmail() {
  let telefono = document.getElementById('telefono').value;
}


