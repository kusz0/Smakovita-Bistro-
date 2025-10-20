const hamburger = document.querySelector("nav .hamburger");
const navMenu = document.querySelector("nav .nav-list");

hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})