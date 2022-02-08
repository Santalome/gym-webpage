const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('header-nav');
const closeButton = document.getElementById('close');
const header = document.getElementById('header-wrapper');

console.log(hamburger, navUL);

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});

let prevScroll = window.pageYOffset;
window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;

    if(prevScroll < currentScroll){
        header.classList.add('hide');
    }else{
        header.classList.remove('hide');
    }

    prevScroll = currentScroll;
});
