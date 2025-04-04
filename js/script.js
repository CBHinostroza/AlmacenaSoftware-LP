// Selecciona el botón, el menú y los elementos del menú
const button = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");
const body = document.body;
const menuLinks = document.querySelectorAll(".header__menu-item a");

// Agrega el evento de click al botón para alternar la clase 'active' en el menú
button.addEventListener("click", () => {
  nav.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

// Agrega el evento de click a cada elemento del menú para cerrar el menú
menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("active");
    body.classList.remove("no-scroll");
  });
});
