const faqs = document.querySelectorAll(".faq");

for (const faq of faqs) {
  const header = faq.querySelector(".faq-header");
  header.addEventListener("click", () => {
    faq.classList.toggle("open");
  });
}

const infoCardPricings = document.querySelectorAll(".info-card-pricing");

for (const infoCardPricing of infoCardPricings) {
  const dropdown = infoCardPricing.querySelector(
    ".info-card-price.btn-dropdown"
  );
  if (!dropdown) continue;

  dropdown.addEventListener("click", () => {
    infoCardPricing.classList.toggle("open");
  });
}
