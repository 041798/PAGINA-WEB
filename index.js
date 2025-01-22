const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-list ul");
const menuItem = document.querySelectorAll(".nav-list ul li a");
const header = document.querySelector(".header.container");

// Al hacer clic en el botón hamburguesa
hamburger.addEventListener("click", () => {
  // Alternar la clase 'active' para abrir/cerrar el menú
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Al hacer clic en los enlaces del menú
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    // Alternar la clase 'active' para cerrar el menú cuando un enlace es clickeado
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});

// Cambiar el fondo del header cuando se hace scroll
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";  // Cambia el fondo a gris oscuro cuando se hace scroll
  } else {
    header.style.backgroundColor = "transparent";  // Lo restaura a transparente
  }
});

