let burgerElem = document.querySelector(".header-burger")
let menuElem = document.querySelector(".header-menu")
burgerElem.addEventListener("click", function(){
  burgerElem.classList.toggle("active") 
  menuElem.classList.toggle("active") 
  document.body.classList.toggle("lock")
})


let openForm = document.getElementById("form-btn")
let form = document.querySelector(".form-wrapper")
let closeForm = document.querySelector(".form-cross")

openForm.addEventListener("click", function(){
  form.style.display = "block"
  document.body.classList.toggle("lock")
})
closeForm.addEventListener("click", function(){
  form.style.display = "none"
  document.body.classList.toggle("lock")
})



let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
});





