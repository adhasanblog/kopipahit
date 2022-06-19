window.onscroll = function() {
    const nav = document.querySelector('nav');
    const navPosition = nav.offsetTop;

    if(window.pageYOffset > navPosition) {
        nav.classList.add('nav-sticky');
    } else {
        nav.classList.remove('nav-sticky');
    }
}

const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    if(hamburgerMenu.classList.contains('active')) {
        mobileMenu.classList.add('active-ul');
        hamburgerMenu.setAttribute('src', 'assets/images/hamburger-close.svg');
        mobileMenu.classList.remove('delete-ul');
    } else {
        hamburgerMenu.setAttribute('src', 'assets/images/hamburger.svg');
        mobileMenu.classList.remove('active-ul');
        mobileMenu.classList.add('delete-ul');
    }
    
})

window.onclick = function(click) {
    if(!click.target.matches('.hamburger-menu') && hamburgerMenu.classList.contains('active')) {
        hamburgerMenu.classList.remove('active');
        hamburgerMenu.setAttribute('src', 'assets/images/hamburger.svg');
        mobileMenu.classList.remove('active-ul');
        mobileMenu.classList.add('delete-ul');
    }
}