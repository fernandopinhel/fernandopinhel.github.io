// Iniciando OWL Carousel de artigos
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:false
            }
        }
    })
  });

// Iniciando animações na página
  AOS.init({
    duration: 800,
    once: true
});