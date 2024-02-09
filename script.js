const sidebar = document.getElementById("side-bar");
const header = document.querySelector("header");

btn.addEventListener("click", () => {
    sidebar.classList.toggle("active")
});

header.addEventListener("click", () => {
    sidebar.classList.remove("active")
});