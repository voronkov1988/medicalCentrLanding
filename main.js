// 'use strict'
const buttons = document.querySelectorAll('button.btn')
const modal = document.querySelector('.wrapperModal')
const body = document.querySelector('body')
const close = document.querySelector('.close')

buttons.forEach(item => {
   item.addEventListener('click', () => {
      modal.classList.toggle('modalActive')
   })
})
close.addEventListener('click', () => {
   modal.classList.remove('modalActive')
})

body.addEventListener('click', (e) => {
   if(!e.target.closest('.wrapperModal') 
      && !e.target.closest('button.btn') 
      ){
      modal.classList.remove('modalActive')
   }
})