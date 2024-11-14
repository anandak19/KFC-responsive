const menuIcon = document.querySelector('.menu-icon-container');
const moreNavPhone = document.querySelector('.more-nav-phone');
const menuClose = document.querySelector('.menu-close-icon');

menuIcon.addEventListener('click', () => {
    moreNavPhone.classList.toggle('visible');
});

menuClose.addEventListener('click', () => {
    moreNavPhone.classList.remove('visible');
})

