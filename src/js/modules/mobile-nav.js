export function mobileNav() {
  const navBtnOpen = document.querySelector("#modal-open");
  const navBtnClose = document.querySelector("#modal-close");

  const navOverlay = document.querySelector("#mobile-nav-overlay");
  const mobileNav = document.querySelector("#mobile-nav");

  const toggleMobileNav = () => {
    navOverlay.classList.toggle("mobile-nav-overlay--open");
    mobileNav.classList.toggle("mobile-nav--open");
    ReportBody.classList.toggle("no-scroll");
  };

  navBtnOpen.addEventListener("click", toggleMobileNav);
  navBtnClose.addEventListener("click", toggleMobileNav);
  navOverlay.addEventListener("click", toggleMobileNav);
}
