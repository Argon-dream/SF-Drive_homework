// menu
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


    // collapsible
    let coll = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

}

