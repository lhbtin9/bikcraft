$('.owl-your-choose').owlCarousel({
    loop:true,
    margin: 30,
    nav:false,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

$('.owl-partner').owlCarousel({
    loop:true,
    margin: 0,
    nav:false,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// Toggle menu bar 
const btnOpen = document.getElementById('fn-open-btn');
const btnClose = document.getElementById('fn-close-btn');
const menuELement = document.getElementById('nav-menu');
const bodyElement = document.getElementsByTagName("BODY")[0];

const openMenu = () => {
    menuELement.classList.add('active');
    bodyElement.classList.add('no-scroll');
}

const closeMenu = () => {
    menuELement.classList.remove('active');
    bodyElement.classList.remove('no-scroll');
}

btnOpen.addEventListener("click", openMenu);
btnClose.addEventListener("click", closeMenu);