const faqs = document.querySelectorAll(".faq")

for (const faq of faqs) {
  const header = faq.querySelector(".faq-header")
  header.addEventListener("click", () => {
    faq.classList.toggle("open")
  })
}

const infoCardPricings = document.querySelectorAll(".info-card-pricing")

for (const infoCardPricing of infoCardPricings) {
  const dropdown = infoCardPricing.querySelector(
    ".info-card-price.btn-dropdown"
  )
  if (!dropdown) continue

  dropdown.addEventListener("click", () => {
    infoCardPricing.classList.toggle("open")
  })
}

const swiper = new Swiper(".swiper", {
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    730: {
      slidesPerView: 2,
    },
    1047: {
      slidesPerView: 3,
    },
  },
})
