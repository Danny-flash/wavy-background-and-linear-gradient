const navSlide = () =>{
     const burger = document.querySelector('.burger')
     const navLinks = document.querySelector('.nav-links')
     burger. addEventListener ('click', ()=> {
        navLinks.classList.toggle('nav-active');



        burger.classList.toggle('toggle')
    });
}
navSlide();

AOS.init({
    duration: 1000
});
