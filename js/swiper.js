
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

  // OWL CAROUSEL PLUGIN DEFINITION
  document.addEventListener("DOMContentLoaded", function () {
    var brandCarousel = document.querySelector('.brand-carousel');
  
    // Initialize Owl Carousel
    var owl = new OwlCarousel(brandCarousel, {
      loop: true,
      margin: 10,
      autoplay: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  });
  
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
  