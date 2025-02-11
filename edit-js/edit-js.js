const header = document.querySelector("header");
const times = header.querySelector(".times");
const bars = header.querySelector(".bars");
const dropdown = document.querySelector(".dropdown-link");
const subMenu = document.querySelector(".sub-menu");
const inputBoxs = document.querySelectorAll(".input-box");

inputBoxs.forEach((input) => {
  const inputLabel = input.querySelector("label");
  const inputField = input.querySelector("input");
  console.log(inputField.value);
  input.addEventListener("input", (e) => {
    inputLabel.classList.add("show");
    if (inputField.value == "") {
      inputLabel.classList.remove("show");
    } else {
      inputLabel.classList.add("show");
    }
    inputBoxs.forEach((input2) => {
      if (input != input2) {
        const inputLabel2 = input2.querySelector("label");
        const inputField2 = input2.querySelector("input");
        inputLabel2.classList.remove("show");
        if (inputField2.value == "") {
          inputLabel2.classList.remove("show");
        } else {
          inputLabel2.classList.add("show");
        }
      }
    });
  });
});

// window.addEventListener("mouseup", (e) => {
//   inputBoxs.forEach((input) => {
//     const inputLabel = input.querySelector("label");
//     const inputField = input.querySelector("input");

//     if (!input.contains(e.target)) {
//       if (inputField.value == "") {
//         inputLabel.classList.remove("show");
//       } else {
//         inputLabel.classList.add("show");
//       }
//     }
//   });
// });

dropdown.addEventListener("click", (e) => {
  subMenu.classList.toggle("active");
});

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

var swiper = new Swiper(".swiper-hero", {
  loop: true,
  effect: "fade",
  spaceBetween: 0,
  grabCursor: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  // autoHeight: true,
  // height: 200,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-paginationn",
    clickable: true,
  },
  speed: 1000,
});

var swiper = new Swiper(".swiper-offer", {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  autoHeight: true,
  height: 200,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-paginationnn",
    clickable: true,
  },
  speed: 1000,
});

var swiper = new Swiper(".swiper-blog", {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  autoHeight: true,
  height: 200,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-pagination-blog",
    clickable: true,
  },
  speed: 1000,
});

var swiper = new Swiper(".swiper-blog2", {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  slidesPerView: 1,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  autoHeight: true,
  height: 200,
  navigation: {
    nextEl: ".single-swiper-btn-next",
    prevEl: ".single-swiper-btn-prev",
  },
  pagination: {
    el: ".swiper-pagination-blog",
    clickable: true,
  },
  speed: 1000,
});

function equalizeCardHeights() {
  var cards = document.querySelectorAll(".testi-content");
  var maxHeight = 0;

  cards.forEach(function (card) {
    card.style.height = "auto";
    var cardHeight = card.offsetHeight;
    maxHeight = Math.max(maxHeight, cardHeight);
  });

  cards.forEach(function (card) {
    card.style.height = maxHeight + "px";
  });
}

$(function () {
  let visibleBoxes = 6;
  const boxes = document.querySelectorAll(".blog-col");
  const loadMoreBtn = document.querySelector(".load-more-btn");

  function showInitialBoxes() {
    for (let i = 0; i < visibleBoxes; i++) {
      if (boxes[i]) {
        boxes[i].classList.add("show");
      }
    }
  }

  function loadMore() {
    let newVisibleCount = visibleBoxes + 6;
    for (let i = visibleBoxes; i < newVisibleCount; i++) {
      if (boxes[i]) {
        boxes[i].classList.add("show");
      }
    }
    visibleBoxes = newVisibleCount;

    if (visibleBoxes >= boxes.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  loadMoreBtn.addEventListener("click", loadMore);

  showInitialBoxes();
});

(function () {
  const priceAccs = document.querySelectorAll(".pricing-acc");
  const pricingBtmOuters = document.querySelectorAll(".pricing-btm-outer");
  const icons = document.querySelectorAll(".icon span");
  pricingBtmOuters[0].style.maxHeight = pricingBtmOuters[0].scrollHeight + "px";
  icons[0].textContent = "-";

  priceAccs.forEach((price) => {
    const priceTop = price.querySelector(".pricing-acc-top");
    const priceBtm = price.querySelector(".pricing-btm-outer");
    const icon = price.querySelector(".icon span");
    priceTop.addEventListener("click", (e) => {
      price.classList.toggle("active");
      if (priceBtm.style.maxHeight) {
        priceBtm.style.maxHeight = null;
        icon.textContent = "+";
      } else {
        priceBtm.style.maxHeight = priceBtm.scrollHeight + "px";
        icon.textContent = "-";
      }

      priceAccs.forEach((price2) => {
        if (price != price2) {
          const priceTop2 = price2.querySelector(".pricing-acc-top");
          const priceBtm2 = price2.querySelector(".pricing-btm-outer");
          const icon2 = price2.querySelector(".icon span");

          priceBtm2.style.maxHeight = null;
          icon2.textContent = "+";
        }
      });
    });
  });
})();

$(function () {});
