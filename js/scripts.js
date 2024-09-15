/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

//Coloca o botão em uma varivel
var btn_subir = $(".botao-voltar-ao-topo");


//Faz a primeira verificacao ao carregar a pagina
$(document).ready(function(){
    var minhaposicao = $(this).scrollTop();
    if(minhaposicao >=100){
        btn_subir.fadeIn();
    }
    else{
        btn_subir.fadeOut();
    }
});

//Fica monitorando a rolagem de pagina
$(window).scroll(function(){
    var minhaposicao = $(this).scrollTop();
    
    if(minhaposicao >=100){
        btn_subir.fadeIn();
    }
    else{
        btn_subir.fadeOut();
    }
});

btn_subir.click(function(){
    $('html,body').animate({scrollTop:0},500);
})



window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
