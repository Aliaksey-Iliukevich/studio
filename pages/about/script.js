const swiper = new Swiper('.swiper', {

    pagination: {
        el: '.swiper-pagination',
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
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
  
      effect: 'fade',
      fadeEffect: {
          crossFade: true
      },
  
      a11y: {
        enabled: true,
        prevSliderMessage: 'Предыдущий слайд',
        nextSliderMessage: 'Следующий слайд',
        firstSliderMessage: 'Первый слайд',
        lastSliderMessage: 'Последний слайд',
      }
  });