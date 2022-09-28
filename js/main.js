const burger = document.querySelector(".header__burger")
const menu = document.querySelector(".header__nav")

document.querySelector("body").addEventListener("click", function(e) {
    if (e.target != burger) {
        burger.classList.remove("header__burger--close");
        menu.classList.remove("header__nav--action");
    } else {
        e.preventDefault();
        burger.classList.toggle("header__burger--close");
        menu.classList.toggle("header__nav--action");
    }
})