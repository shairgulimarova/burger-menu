const btnToggler = document.querySelector('.btn-toggler');
const menu = document.querySelector('.menu'); 


btnToggler.addEventListener("click", function (){
    menu.classList.toggle("menu-show");
});