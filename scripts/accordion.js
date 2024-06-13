const accordionItems = document.querySelectorAll(".accordion-item");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
