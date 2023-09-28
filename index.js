const burgerBtn = document.getElementById("burger-btn");
const closeBtn = document.getElementById("close-btn");
const burgerIconContainer = document.getElementById("burger-icon-container");

burgerBtn.addEventListener("click", function (event) {
  event.preventDefault();
  burgerIconContainer.style.display = "block";
  burgerBtn.style.opacity = 0;
  setTimeout(function () {
    burgerIconContainer.style.opacity = 1;
  }, 10);
});

closeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  burgerIconContainer.style.opacity = 0;
  burgerBtn.style.opacity = 1;
});

burgerIconContainer.addEventListener("transitionend", function () {
  if (burgerIconContainer.style.opacity === "0") {
    burgerIconContainer.style.display = "none";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 800) {
    burgerIconContainer.style.display = "none";
    burgerIconContainer.style.opacity = 0;
    burgerBtn.style.opacity = 1;
  }
});

// Scrolling sections into view
const navBar = document.querySelector(".top-nav");
const section1 = document.querySelector(".songs-covers-row");
navBar.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("nav")) return;
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

const mediaQueryList = window.matchMedia("(min-width: 800px)");
const stickyNavQuery = function () {
  if (!mediaQueryList.matches) return;
  const navHeight = navBar.getBoundingClientRect().height;
  const stickyObs = document.querySelector(".logo-container");

  const obsFn = function (entries) {
    const [entry] = entries;
    !entry.isIntersecting
      ? navBar.classList.add("sticky-nav")
      : navBar.classList.remove("sticky-nav");
  };

  const obsOpt = {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  };

  const containerObs = new IntersectionObserver(obsFn, obsOpt);
  containerObs.observe(stickyObs);
};
stickyNavQuery();
