/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
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



/* انیمیشن بکگراند هنگام اسکرول 
window.addEventListener('scroll', () => {
    const parallaxBackground = document.querySelector('.parallax-background');
    const scrollPosition = window.scrollY;

    // حرکت بک‌گراند به نسبت اسکرول
    if (parallaxBackground) {
        parallaxBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});*/

document.addEventListener("scroll", function () {
    const masthead = document.querySelector(".masthead");
    const scrollPosition = window.scrollY;
    
    // تغییر موقعیت پس‌زمینه بر اساس اسکرول
    masthead.style.backgroundPosition = `center ${scrollPosition * 0.3}px`; // سرعت حرکت (0.5) قابل تنظیم است
  });