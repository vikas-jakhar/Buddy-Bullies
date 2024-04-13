var btn = document.querySelector('.btn-21');

btn.addEventListener("click", function () {
    btn.classList.toggle("not-active");
    btn.classList.toggle("active");
});

let menuicon = document.querySelector(".menu-icon");
let menulist = document.querySelector(".menu-list");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
});



const scrollbtn = document.querySelector(".scrollToTopBtn");

scrollbtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
    })
});

let menu = document.querySelector(".menu");

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 700) {
        scrollbtn.style.display = "block";
    }
    else {
        scrollbtn.style.display = "none";
    }
});

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 100) {
        menu.classList.add("menu1");
    }
    else {
        menu.classList.remove("menu1")
    }
});

var preloader = document.querySelector(".preloader");

preloader.style.display = "flex";

setTimeout(() => {
    preloader.style.display = "none";
}, 2000);