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

    let service = document.querySelectorAll('.option');
  
    service[0].addEventListener('click', () => {
      if(service[1].classList.contains('active')){
        service[1].classList.remove('active');
        service[0].classList.add('active');
      }
    })

    service[1].addEventListener('click', () => {
      if(service[0].classList.contains('active')){
        service[0].classList.remove('active');
        service[1].classList.add('active');
      }
    })
});