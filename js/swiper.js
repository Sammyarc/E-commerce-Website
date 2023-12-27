
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Selectors for both carousels
    var brandCarousel = document.querySelector('.brand-carousel');
    var flashCarousel = document.querySelector('.flash-carousel');
    var productCarousel = document.querySelector('.product-carousel');

    // Initialize both carousels with different timeouts
    initializeCarousel(brandCarousel, {
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    }, 800);

    initializeCarousel(flashCarousel, {
        loop: true,
        margin: 10,
        autoplay: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    }, 1200);

    initializeCarousel(productCarousel, {
        loop: true,
        margin: 10,
        autoplay: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    }, 1200);
});

// Reusable function to initialize Owl Carousel
function initializeCarousel(element, options, timeout) {
    // Wrap the initialization inside a setTimeout with the specified delay
    setTimeout(function () {
        // Initialize Owl Carousel
        var owl = new OwlCarousel(element, options);
    }, timeout);
}

// OwlCarousel constructor function
function OwlCarousel(element, options) {
    this.element = element;
    this.options = options;

    this.init();
}

OwlCarousel.prototype.init = function () {
    // Initialize the Owl Carousel
    this.owlInstance = $(this.element).owlCarousel(this.options);
};
