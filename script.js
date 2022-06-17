const navMenu =  document.getElementById('responssive_nav')
const close =  document.getElementById('close')
const open =  document.getElementById('open')
const overlay = document.getElementById('overlay')

open.addEventListener('click', () => {
    navMenu.classList.toggle('show')
    overlay.classList.toggle('show')
})

close.addEventListener('click', () => {
    navMenu.classList.remove('show')
    overlay.classList.remove('show')

})