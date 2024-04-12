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

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 700) {
        scrollbtn.style.display = "block";
    }
    else {
        scrollbtn.style.display = "none";
    }
});