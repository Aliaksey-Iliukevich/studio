"use strict"

document.addEventListener('DOMContentLoaded', function() {

const iconMenu = document.querySelector('.menu-icon');

if(iconMenu){
    const menuBody = document.querySelector('.menu-body');
    iconMenu.addEventListener("click", function(e) {
    iconMenu.classList.toggle('__active');
    menuBody.classList.toggle('__active');
    document.body.classList.toggle('__lock');
    });
}

const openPopup = document.getElementsByClassName('popup-link');
console.log(openPopup)
const closePopup = document.getElementsByClassName('close-popup');
const popup = document.getElementById('popup');
const submit = document.getElementsByClassName('submit');
    


for(let i= 0; i < openPopup.length; i++){
    openPopup[i].addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.add('active');
    document.body.classList.add('lock');
    });
}

for(let i = 0; i < openPopup.length; i++) {
    closePopup[i].addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.remove('active');
    document.body.classList.remove('lock');
    });
}

});