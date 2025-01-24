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



  document.addEventListener("scroll", function () {
    const masthead = document.querySelector(".masthead-portfolio");
    const scrollPosition = window.scrollY;
    
    // تغییر موقعیت پس‌زمینه بر اساس اسکرول
    masthead.style.backgroundPosition = `center ${scrollPosition * -0.08}px`; // سرعت حرکت (0.5) قابل تنظیم است
  });


















// ELEVATOR
  window.addEventListener('scroll', () => {
    const elevatorSection = document.querySelector('.elevator-container');
    const leftDoor = document.querySelector('.left-door');
    const rightDoor = document.querySelector('.right-door');
    const elevatorText = document.querySelector('.elevator-text');
    const parkSection = document.querySelector('.park-container');

    const elevatorRect = elevatorSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // بررسی اینکه بخش آسانسور در دید کاربر است
    if (elevatorRect.top < windowHeight && elevatorRect.bottom > 0) {
        // محاسبه درصد اسکرول
        const scrollPercentage = Math.min(
            Math.max((windowHeight - elevatorRect.top) / (windowHeight * 0.8), 0),
            1
        );

        // حرکت درها
        if (scrollPercentage < 0.33) {
            // باز بودن درها در ابتدا
            leftDoor.style.transform = `translateX(0)`;
            rightDoor.style.transform = `translateX(0)`;
        } else if (scrollPercentage < 0.9) {
            // بسته شدن درها در میانه
            leftDoor.style.transform = `translateX(-100%)`;
            rightDoor.style.transform = `translateX(100%)`;
        } else if (scrollPercentage > 0.9) {
            // دوباره باز شدن درها
            leftDoor.style.transform = `translateX(0)`;
            rightDoor.style.transform = `translateX(0)`;
        }

        // تغییر شفافیت متن آسانسور
       // elevatorText.style.opacity = 1 - scrollPercentage;
        // elevatorText.classList.add('delayed');


        // نمایش یا پنهان کردن بخش پارک
    //    if (scrollPercentage >= 1) {
    //        parkSection.style.display = 'flex';
     //   } else {
    //        parkSection.style.display = 'none';
     //   }
    }
});








window.addEventListener('scroll', () => {
    const parkSection = document.querySelector('.park-container');
    const parkContent = document.querySelector('.park-content');

    const parkRect = parkSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = parkSection.offsetHeight;

    // بررسی اینکه بخش پارک وارد دید شده است
    if (parkRect.top < windowHeight && parkRect.bottom > 0) {
        // محاسبه درصد اسکرول دقیق درون سکشن پارک
        const scrollPercentage = Math.min(
            Math.max((windowHeight - parkRect.top) / (windowHeight + sectionHeight), 0),
            1
        );

        // زوم بک‌گراند
        const maxScale = 1.3; // حداکثر مقدار زوم
        const scale = 1 + scrollPercentage * (maxScale - 1);
        parkSection.style.backgroundSize = `${scale * 100}% ${scale * 100}%`;
        parkSection.style.backgroundPosition = 'center top';

        // محو شدن متن (اختیاری)
        parkContent.style.opacity = 1 - scrollPercentage * 0; // متن محو نمی‌شود
    }
});




// walk
// تعریف متغیر زمان‌بندی
let delayBetweenTexts = 0.5;

// تعریف تابع برای تنظیم مقدار بر اساس سایز صفحه
const updateSettings = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    delayBetweenTexts = 1.4; // تنظیم برای موبایل
  } else {
    delayBetweenTexts = 0.5; // تنظیم برای دسکتاپ
  }
};

// مقداردهی اولیه
updateSettings();

// شنونده تغییر سایز صفحه
window.addEventListener("resize", updateSettings);

// اسکرول
document.addEventListener("scroll", () => {
  const walkSection = document.querySelector(".walk-section");
  const walkImage = document.querySelector(".walk-image");
  const walkTexts = document.querySelectorAll(".walk-text");

  const sectionRect = walkSection.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // زوم تصویر بدون خروج از محدوده سکشن
  if (sectionRect.top <= 0) {
    const zoomFactor = 1 + Math.abs(sectionRect.top / sectionRect.height) * 0.5;
    walkImage.style.transform = `scale(${zoomFactor})`;
  } else {
    walkImage.style.transform = "scale(1)";
  }

  // نمایش متن‌ها به ترتیب
  walkTexts.forEach((text, index) => {
    const textStart = viewportHeight * (index + delayBetweenTexts * index) * 0.2; 
    const textEnd = textStart + viewportHeight * 0.5;

    if (Math.abs(sectionRect.top) >= textStart && Math.abs(sectionRect.top) < textEnd) {
      text.style.opacity = 1;
      text.style.transform = "translateY(0)";
    } else {
      text.style.opacity = 0;
      text.style.transform = "translateY(50px)";
    }
  });
});
  
  
  
  
  
  
  
  