const navToggle = document.querySelector('.mobile-nav-toggle');
const menu = document.getElementById('primary-navigation');

navToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
    let expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    let visible = menu.getAttribute('data-visible') === 'true' || false;
    menu.setAttribute('data-visible', !visible);

}