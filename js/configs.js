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
                items:4,
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

// Cookies
const $sectionCookies = document.querySelector('.cookies');
const $btnCookies = document.querySelector('.btn-closed-cookies');

// Condicional pengando os 7 dias que o usuário acessou e aceitou o cookies e não mostrando novamente a msg para confirmar.
if (Cookies.get('closed')) {
    $sectionCookies.classList.remove('is-open')
}

$btnCookies.addEventListener('click', function() {
    // 7 dias para expirar a sessão do usuário e voltar a aparecer a confirmação de cookies.
    Cookies.set('closed', true, { expires: 7 })
    $sectionCookies.classList.remove('is-open')
})

