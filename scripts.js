document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
})

function toggleMenu() {
    toggler = document.querySelector('#menu-toggler');
    navLinks = document.querySelector('#navLinks')
    toggler.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    })
}