const swiper = new Swiper('.swiper', {

  keyboard: {
    enabled: true,
    onlyUnViewport: true,
    pageUpDown: true
},

mousewheel: {
    sensitivity: 1
},

// If we need pagination
pagination: {
  el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
scrollbar: {
  el: '.swiper-scrollbar',
},
});