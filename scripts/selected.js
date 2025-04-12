const langBtn = document.querySelector(".lang-btn");
const langDropdown = document.querySelector(".lang-dropdown");
const selectedLang = document.querySelector(".selected-lang");

langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  langDropdown.style.display =
    langDropdown.style.display === "block" ? "none" : "block";
  langBtn.classList.toggle("active");
});

document.querySelectorAll(".lang-dropdown li").forEach((item) => {
  item.addEventListener("click", () => {
    selectedLang.textContent = item.dataset.lang;
    langDropdown.style.display = "none";
    langBtn.classList.remove("active");
  });
});

document.addEventListener("click", () => {
  langDropdown.style.display = "none";
  langBtn.classList.remove("active");
});
