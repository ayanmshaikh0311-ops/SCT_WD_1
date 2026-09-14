const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
        navbar.style.color="Black";
    } else {
        navbar.classList.remove("scrolled");
    }
});