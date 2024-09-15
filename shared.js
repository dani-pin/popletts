const siteNavHamburger = document.querySelector("#site-nav-hamburger");
const mobileSiteNavClose = document.querySelector("#mobile-site-nav-close");

siteNavHamburger.addEventListener("click", () => {
  document.body.classList.add("show-mobile-nav");
});

mobileSiteNavClose.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-nav");
});
