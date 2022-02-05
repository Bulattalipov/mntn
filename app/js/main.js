
let btn = document.querySelector(".header__btn-box");
let menu = document.querySelector('.menu');

btn.addEventListener("click", function(){
  btn.classList.toggle('header__btn-box--active');
  menu.classList.toggle("menu--active");
})



let header = document.querySelector('.header');

    window.addEventListener('scroll', ()=>{
        if(pageYOffset >= header.clientHeight){
            header.style['background-color'] = '#66757A';
        } else{
            header.style['background-color'] = 'transparent';
        }
    });
