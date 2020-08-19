'use strict';

const WHATSAPP_NUMBER = 5584999357378;
const cards = document.querySelectorAll('div.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    window.location.assign(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`)
  });
})
