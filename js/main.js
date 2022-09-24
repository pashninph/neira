const burger = document.querySelector(".header__burger")
const menu = document.querySelector(".header__nav")

burger.addEventListener("click", function(evt) {
    evt.preventDefault();
    burger.classList.toggle("header__burger--close");
    menu.classList.toggle("header__nav--action");
});