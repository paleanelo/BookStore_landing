const menuBtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.nav-list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('nav-lixt__link--active');
});