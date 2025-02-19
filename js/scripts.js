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


















// Elevator Door Animation
window.addEventListener('scroll', () => {
  const elevatorSection = document.querySelector('.elevator');
  const leftDoor = document.querySelector('.left-door');
  const rightDoor = document.querySelector('.right-door');

  const sectionRect = elevatorSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // بررسی اندازه صفحه (موبایل یا دسکتاپ)
  const isMobile = window.innerWidth <= 768; // شرط برای موبایل (768px یا کمتر)

  if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
    const scrollPercentage = Math.min(
      Math.max((windowHeight - sectionRect.top) / windowHeight, 0),
      1
    );

    // انیمیشن درها
    if (scrollPercentage < 0.60) {
      // مرحله اول: درها باز هستند
      leftDoor.style.transform = `translateX(0)`;
      rightDoor.style.transform = `translateX(0)`;
    } else if (scrollPercentage >= 0.60 && scrollPercentage < 0.9) {
      // مرحله دوم: درها بسته می‌شوند
      if (isMobile) {
        // تنظیم برای موبایل
        leftDoor.style.transform = `translateX(-100%)`; // مقدار متفاوت برای موبایل
        rightDoor.style.transform = `translateX(100%)`;
      } else {
        // تنظیم برای دسکتاپ
        leftDoor.style.transform = `translateX(-60%)`;
        rightDoor.style.transform = `translateX(60%)`;
      }
    } else if (scrollPercentage >= 0.9) {
      // مرحله سوم: درها دوباره باز می‌شوند
      leftDoor.style.transform = `translateX(0)`;
      rightDoor.style.transform = `translateX(0)`;
    }
  }
});






//walk
document.addEventListener("scroll", () => {
  const walkSection = document.querySelector(".walk-section");
  const walkImage = document.querySelector(".walk-image");
  const walkTexts = document.querySelectorAll(".walk-text");

  if (!walkSection || !walkImage || walkTexts.length === 0) return;

  const sectionRect = walkSection.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // زوم تصویر وقتی به بالای صفحه رسید
  if (sectionRect.top <= 0) {
      let zoomFactor = 1 + Math.abs(sectionRect.top / sectionRect.height) * 0.7;
      if (zoomFactor > 2) zoomFactor = 2; // محدود کردن زوم
      walkImage.style.transform = `scale(${zoomFactor})`;
  } else {
      walkImage.style.transform = "scale(1)";
  }

  // نمایش متن‌ها به ترتیب با افکت محو و بونس
  walkTexts.forEach((text, index) => {
    const textStart = viewportHeight * (index * (window.innerWidth <= 768 ? 0.4 : 0.4));
    const textEnd = textStart + viewportHeight * (window.innerWidth <= 768 ? 0.55 : 0.4);

      if (Math.abs(sectionRect.top) >= textStart && Math.abs(sectionRect.top) < textEnd) {
          text.classList.add("active");
      } else {
          text.classList.remove("active");
      }
  });
});


  
  
  
 // کرسر
 document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  let trailTimeout; // زمان تایم‌اوت برای حذف دنباله‌ها

  // برای موبایل و تبلت رویداد "touchmove" اضافه می‌کنیم
  document.addEventListener("mousemove", (e) => {
    if (window.innerWidth > 768) {  // فقط در حالت دسکتاپ
      // حرکت کرسر اصلی
      requestAnimationFrame(() => {
          cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    }
    
    // ایجاد رد پا در محل موس
    createTrail(e.clientX, e.clientY);

    // حذف دنباله‌ها پس از 0.6 ثانیه
    clearTimeout(trailTimeout);
    trailTimeout = setTimeout(() => {
        removeTrails();
    }, 600);  // زمان برای از بین بردن رد پاها
  });

  // رویداد لمس برای موبایل و تبلت
  document.addEventListener("touchmove", (e) => {
    const touch = e.touches[0]; // اولین تماس انگشت
    createTrail(touch.clientX, touch.clientY);
  });

  // تابع برای ایجاد دنباله‌ها
  function createTrail(x, y) {
    for (let i = 0; i < 5; i++) {  // ایجاد 3 دایره
      const trail = document.createElement("div");
      trail.classList.add("trail");
      document.body.appendChild(trail);

      // ایجاد یک تغییر کوچک در موقعیت به‌طور تصادفی برای هر دایره
      const offsetX = (Math.random() - 0.5) * 10;  // تغییرات تصادفی در موقعیت
      const offsetY = (Math.random() - 0.5) * 10;

      trail.style.left = `${x + offsetX}px`;
      trail.style.top = `${y + offsetY}px`;

      // حذف دنباله بعد از 0.6 ثانیه
      setTimeout(() => {
        trail.remove();
      }, 600);  // زمان انیمیشن
    }
  }

  // حذف تمامی دنباله‌ها
  function removeTrails() {
    const trails = document.querySelectorAll(".trail");
    trails.forEach((trail) => trail.remove());
  }
});






  
  