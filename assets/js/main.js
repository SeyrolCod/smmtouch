const itemDown = document.getElementsByClassName("item-down");
for (let i = 0; i < itemDown.length; i++) {
    itemDown[i].addEventListener("click", function () {
        itemDown[i].classList.toggle("active");
    });
}

const header = document.getElementById("header");
window.addEventListener("scroll", function () {
    let scrollOffset = window.pageYOffset;
    if (scrollOffset >= 150) {
        header.classList.add("active");
    } else if (scrollOffset < 150) {
        if (header.classList.contains("active")) {
            header.classList.remove("active");
        }
    }
});

const navItem = document.getElementsByClassName("nav__item");
const navDownist = document.getElementsByClassName("nav__down-list");
for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function () {
        navDownist[i].classList.toggle("active");
    });
    window.addEventListener("click", function (event) {
        if (!event.target.matches('.nav__down-list__link') && !event.target.matches('.nav__down-list') && !event.target.matches('.nav__link>span')) {
            navDownist[i].classList.remove("active");
        }
    });
}


const burgerNavLink = document.getElementsByClassName("burger-nav__link");
for (let i = 0; i < burgerNavLink.length; i++) {
    burgerNavLink[i].addEventListener("click", function () {
        burgerNavLink[i].parentElement.getElementsByClassName("burger-nav-down")[0].classList.toggle("active");
    });
}

const burgerNav = document.getElementById("burger-nav");
const burgerNavBtn = document.getElementById("burger-nav-btn");
const burgerNavBack = document.getElementById("burger-nav-back");

burgerNavBtn.addEventListener("click", function () {
    burgerNav.classList.toggle("active");
});

burgerNavBack.addEventListener("click", function () {
    burgerNav.classList.toggle("active");
});

const burgerNavDownLink = document.getElementsByClassName("burger-nav-down__link");


for (let i = 0; i < burgerNavDownLink.length; i++) {
    burgerNavDownLink[i].addEventListener("click", function () {
        burgerNavDownLink[i].parentElement.parentElement.parentElement.classList.remove("active");
        burgerNav.classList.remove("active");
    });
}