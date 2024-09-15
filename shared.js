const siteNavHamburger = document.querySelector("#site-nav-hamburger");
const mobileSiteNavClose = document.querySelector("#mobile-site-nav-close");
const mobileSiteNavLinks = document.querySelectorAll(".mobile-site-nav-link");

siteNavHamburger.addEventListener("click", () => {
  document.body.classList.add("show-mobile-nav");
});

mobileSiteNavClose.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-nav");
});

for (const mobileSiteNavLink of mobileSiteNavLinks) {
  const url = new URL(mobileSiteNavLink.href);

  if (isInternalPageLink(url)) {
    mobileSiteNavLink.addEventListener("click", (e) => {
      document.body.classList.remove("show-mobile-nav");
    });
  }
}

function isInternalPageLink(url) {
  return (
    url.origin === window.location.origin &&
    url.pathname === window.location.pathname
  );
}
