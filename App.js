const sticky = document.querySelector('header')
window.addEventListener('scroll', stickyNav)

function stickyNav() {
  if(window.scrollY > sticky.offsetHeight + 90) {
    sticky.classList.add('active')
  } else {
    sticky.classList.remove('active')
  }
}