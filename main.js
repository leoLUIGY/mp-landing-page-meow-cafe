window.onload = function(){
    const hamburgerButton = document.querySelector('.navbar__hamburguer-button button');


    hamburgerButton.addEventListener('click', function(){
        const navbarMobile = document.querySelector('.navbar__mobile');
        navbarMobile.classList.toggle('open');
    });
}