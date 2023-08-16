export function siteLoader() {
  const loader = document.querySelector("#loader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("loader-wrapper--hidden");
    }, 800);
  });
}
