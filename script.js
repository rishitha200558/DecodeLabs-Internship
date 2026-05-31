const themeBtn = document.getElementById("theme-btn");
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

themeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});

menuBtn.addEventListener("click", () => {
navMenu.classList.toggle("active");
});