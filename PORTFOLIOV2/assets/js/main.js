 /*==================================== MENU OCULTAR / MOSTRAR==================================== */
 
 const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'),
 navClose = document.getElementById('nav-close');
 

 
 // MOSTRAR MENU
 if(navToggle){
     navToggle.addEventListener('click', () =>{
         navMenu.classList.add('show-menu')
        })
    }
    // OCULTAR MENU
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }
    
    /*==================================== MENU OCULTAR / MOSTRAR (MOBILE)==================================== */
    const navLink = document.querySelectorAll(".nav__link");

    function linkAction() {
      const navMenu = document.getElementById("nav-menu");
      // Clickeando en nav__link, se remueve la clase show-menu
      navMenu.classList.remove("show-menu");
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction));

    /*===================== SWIPPER WORK ========================= */
    let swiper = new Swiper(".work__container", {
      cssMode: true,
      loop: true,
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });