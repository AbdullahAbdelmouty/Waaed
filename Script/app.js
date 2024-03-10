const btn_burger = document.querySelector('.menu-btn__burger');
const menu = document.querySelector('nav');
const clsoe_menu = document.querySelector('.menu-btn__close');
const project_card = document.querySelectorAll('.project_card');
console.log(menu);
btn_burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    }
);
clsoe_menu.addEventListener('click', () => {
    menu.classList.remove('active');
    }
);
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
      const context = this, args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function checkFade() {
    const projectCards = document.querySelectorAll('.project_card');
    projectCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight) {
        card.classList.add('fade-in');
      }
    });
  }

  window.addEventListener('scroll', debounce(checkFade));
  window.addEventListener('resize', debounce(checkFade));
  document.addEventListener('DOMContentLoaded', checkFade);

