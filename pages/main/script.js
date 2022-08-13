const swiper = new Swiper('.swiper', {

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    keyboard: {
        enabled: true,
        onlyUnViewport: true,
        pageUpDown: true
    },
    
    mousewheel: {
        sensitivity: 1
    },

    a11y: {
      enabled: true,
      prevSliderMessage: 'Предыдущий слайд',
      nextSliderMessage: 'Следующий слайд',
      firstSliderMessage: 'Первый слайд',
      lastSliderMessage: 'Последний слайд',
    },

    speed: 600,

    centeredSlides: true,

    loop: true,
    
  });

  const swiper2 = new Swiper2('.swiper2', {
  
    scrollbar: {
      el: '.swiper2-scrollbar',
    },

    keyboard: {
        enabled: true,
        onlyUnViewport: true,
        pageUpDown: true
    },
    
    mousewheel: {
        sensitivity: 1
    },

    a11y: {
      enabled: true,
      prevSliderMessage: 'Предыдущий слайд',
      nextSliderMessage: 'Следующий слайд',
      firstSliderMessage: 'Первый слайд',
      lastSliderMessage: 'Последний слайд',
    },



  });