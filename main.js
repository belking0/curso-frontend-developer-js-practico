const navEmail = document.querySelector(".navbar-right");
const desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('Cclick');
    desktopMenu.classList.toggle('inactive')
    return
}
