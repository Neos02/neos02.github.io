window.addEventListener("load", updateScrollItems);
window.addEventListener("scroll", updateScrollItems);

function updateScrollItems() {
  const scrollUpdateItems = [
    ...document.getElementsByTagName("nav"),
    document.getElementById("scroll-indicator"),
  ];

  scrollUpdateItems.forEach((item) => {
    if (window.scrollY > 64) {
      item.classList.add("scrolled");
    } else {
      item.classList.remove("scrolled");
    }
  });
}

createParticleEventListeners("particle-btn");

const media448 = window.matchMedia("(max-width: 448px)");

media448.onchange = shortenName;

shortenName(media448);
hackerText(document.getElementById("name"));
