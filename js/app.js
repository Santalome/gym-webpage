const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('header-nav');
const closeButton = document.getElementById('close');

console.log(hamburger, navUL);

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
})