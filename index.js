const burgerBtn = document.getElementById("burger-btn");
const closeBtn = document.getElementById("close-btn");
const burgerIconContainer = document.getElementById("burger-icon-container");
const lazyImgs = document.querySelectorAll(".lazy--img");
const allSections = document.querySelectorAll("section");
const form = document.querySelector(".feedback-message");
const message = document.querySelector(".feedb");
const feedbackBtn = document.querySelector(".fb-btn");
const overlay = document.querySelector(".overlay");
burgerBtn.addEventListener("click", function (event) {
  event.preventDefault();
  burgerIconContainer.style.display = "block";
  burgerBtn.style.opacity = 0;
  setTimeout(function () {
    burgerIconContainer.style.opacity = 1;
  }, 10);
});

burgerIconContainer.addEventListener("click", function (event) {
  event.preventDefault();
  burgerIconContainer.style.opacity = 0;
  burgerBtn.style.opacity = 1;
});

burgerIconContainer.addEventListener("transitionend", function () {
  if (burgerIconContainer.style.opacity === "0") {
    burgerIconContainer.style.display = "none";
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

const stickyNavQuery = function () {
  const navHeight = navBar.getBoundingClientRect().height;
  const stickyObs = document.querySelector(".logo-container");

  const obsFn = function (entries, observer) {
    const [entry] = entries;
    !entry.isIntersecting
      ? navBar.classList.add("sticky-nav")
      : navBar.classList.remove("sticky-nav");
    if (window.innerWidth < 800 && !entry.isIntersecting) {
      navBar.classList.remove("sticky-nav");
      observer.unobserve(entry.target);
    }
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
window.addEventListener("resize", function () {
  stickyNavQuery();
  navBar.classList.remove("sticky-nav");
  burgerIconContainer.style.display = "none";
  burgerIconContainer.style.opacity = 0;
  burgerBtn.style.opacity = 1;
});

// Lazy-img load
document.addEventListener("DOMContentLoaded", function () {
  const loadImg = function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.src = entry.target.dataset.src;
      entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy--img");
      });
      observer.unobserve(entry.target);
    });
  };
  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0.3,
    rootMargin: "200px",
  });

  lazyImgs.forEach(function (img) {
    imgObserver.observe(img);
  });
});

// Section reveal

const sectionFn = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("hidden--section");
    observer.unobserve(entry.target);
  });
};

const sectionObs = new IntersectionObserver(sectionFn, {
  root: null,
  threshold: 0.1,
});

allSections.forEach((section) => sectionObs.observe(section));

// Form interaction
form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.style.display = "none";
  const h6 = feedbackBtn.closest("h6");
  h6.style.display = "none";
  overlay.classList.add("hidden");
  message.textContent = "Thank you!";
  message.style.margin = "5em 1.5em";
  message.style.fontSize = "3.5em";
  message.style.border = "none";
});

// Feedback modal for media queries
feedbackBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const h6 = e.target.closest("h6");
  h6.style.borderStyle = "none";
  overlay.classList.remove("hidden");
  form.classList.add("modal");
  form.style.display = "block";
});
