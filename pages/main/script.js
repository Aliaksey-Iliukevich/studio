"use strict"

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
  e.preventDefault();

  const error = 0;
  let formData = new FormData(form);

  if (error === 0){
    form.classList.add('_sending');
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });
  
    if(response.ok){
      let result = await response.json();
      alert(result.message);
      formPreview.innerHTML = '';
      form.reset();
      form.classList.remove('_sending');
    } else{
      alert('Ой... Что-то пошло не так!');
      form.classList.remove('_sending');
    }
  }
    
  }

    let service = document.getElementsByClassName('option');
    console.log(service);
    service.forEach(item => {
      service.addEventListener('click', () => {
        if (item.classList.contains('active')){
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      })
    });
  
});

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
    }
  });


