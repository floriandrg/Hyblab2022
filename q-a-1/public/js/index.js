"use strict";

// Init of the (touch friendly) Swiper slider
/*const swiper = new Swiper("#mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});*/


// Wait for the video to preload and display 1st slide
//const video = videojs(document.querySelector('#background-video'));
 
  // fade out the loader "slide"
  // and send it to the back (z-index = -1)
  anime({
    delay: 1000,
    targets: '#loader',
    opacity: '0',
    'z-index' : -1,
    easing: 'easeOutQuad',
  });
  // Init first slide
  initSlide1();
  // Debug trace because the loadeddata event is
  // sometime not fired
  console.log("Video loaded");

function go_to_page2(){
  document.location.href = "sommaire.html";
}


let bouton1 = document.querySelector("#bouton_to_page_accueil");
bouton1.addEventListener('click', go_to_page2);


