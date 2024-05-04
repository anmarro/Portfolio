document.addEventListener("DOMContentLoaded", function () {
  const filterLinks = document.querySelectorAll(".portfolio__link");
  const galleryItems = document.querySelectorAll(".gallery__item");

  filterLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      const category = this.textContent.trim().toLowerCase();

      // Resalta el enlace activo
      filterLinks.forEach(function (link) {
        link.classList.remove("portfolio__link--active");
      });
      this.classList.add("portfolio__link--active");

      // Filtra los elementos de la galería según la categoría seleccionada
      galleryItems.forEach(function (item) {
        const itemCategory = item
          .querySelector(".gallery__category")
          .textContent.trim()
          .toLowerCase();

        if (category === "todo" || category === itemCategory) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
