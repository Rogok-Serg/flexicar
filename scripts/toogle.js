document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll('[data-action="toggle"]');

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const card = toggle.closest(".extra");
      const icon = toggle.querySelector(".icon-toggle use");
      const isActive = card.classList.contains("active");

      if (isActive) {
        card.classList.remove("active");
        icon.setAttribute("href", "assets/symbol-defs.svg#plus");
      } else {
        card.classList.add("active");
        icon.setAttribute("href", "assets/symbol-defs.svg#minus");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".insurance-condition");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      cards.forEach((c) => c.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
