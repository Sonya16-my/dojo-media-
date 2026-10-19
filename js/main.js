document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    
    // Если бургер и меню существуют на странице
    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Переключаем классы открытия
            nav.classList.toggle('nav--open');
            burger.classList.toggle('burger--active');
        });
    }
});