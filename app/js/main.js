
let btn = document.querySelector(".header__btn-box");
let menu = document.querySelector('.menu');

btn.addEventListener("click", function(){
  btn.classList.toggle('header__btn-box--active');
  menu.classList.toggle("menu--active");
})

