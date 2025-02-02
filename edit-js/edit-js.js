const header = document.querySelector("header");
const times = header.querySelector(".times");
const bars = header.querySelector(".bars");

bars.addEventListener("click", (e) => {
  header.classList.add("show");
});
times.addEventListener("click", (e) => {
  header.classList.remove("show");
});

window.addEventListener("scroll", (e) => {
  if (scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.01) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

var swiper = new Swiper(".swiper-testi", {
  loop: true,
  spaceBetween: 35,
  grabCursor: true,
  slidesPerView: 2,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      // Initialize card height equalization
      equalizeCardHeights();
    },
    slideChangeTransitionEnd: function () {
      // Re-equalize card heights after slide change
      equalizeCardHeights();
    },
  },
  speed: 2000,
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

function equalizeCardHeights() {
  var cards = document.querySelectorAll(".testi-content");
  var maxHeight = 0;

  cards.forEach(function (card) {
    card.style.height = "auto"; // Reset card heights first
    var cardHeight = card.offsetHeight;
    maxHeight = Math.max(maxHeight, cardHeight);
  });

  // Set all card heights to the maximum height found
  cards.forEach(function (card) {
    card.style.height = maxHeight + "px";
  });
}
