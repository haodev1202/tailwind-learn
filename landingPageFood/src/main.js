const menu = document.querySelector("#menu");
const menubtn = document.querySelector("#menu-btn");

menubtn.addEventListener("click", () => {
    menu.classList.toggle("invisible");
});
