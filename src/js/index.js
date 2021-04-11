// menu.js
document.addEventListener("DOMContentLoaded", pageLoaded);

function pageLoaded() {
    const menuBurger = document.querySelector(".mobile__burger");
    const menuCloseBtn = document.querySelector(".menu__mobile-close");
    const menu = document.querySelector(".menu__mobile");

    menuBurger.addEventListener("click", openMenu);
    menuCloseBtn.addEventListener("click", closeMenu);

    function openMenu() {
        menu.classList.add("is-active");
    }

    function closeMenu() {
        menu.classList.remove("is-active");
    }

}
