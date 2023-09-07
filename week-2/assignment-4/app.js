const welcomeBlock = document.querySelector('.landing-page-img')
const readMoreButton = document.querySelector('.landing-page-button')
const hiddenContainer = document.querySelector('.hide')
const hamburgerBar = document.querySelector('.hamburger-bar')
const dropdownMenu = document.querySelector('.hamburger-items')
const closeIcon = document.querySelector('.close-icon')

// Click the welcome block to change text
welcomeBlock.addEventListener('click', (event) => {
  if (event.target.classList.contains('welcome-message')) {
    event.target.textContent = 'Have a Good Time!'
  } else {
    event.target.firstElementChild.textContent = 'Have a Good Time!'
  }
})

// Click the call-to-action button to show more cards
readMoreButton.addEventListener('click', (event) => {
  if (!hiddenContainer.style.display) {
    hiddenContainer.style.display = 'flex'
    event.target.textContent = 'HIDE CONTENT'
    event.target.style.backgroundColor = '#666666'
  } else {
    hiddenContainer.removeAttribute('style')
    event.target.removeAttribute('style')
    event.target.textContent = 'READ MORE'
  }
})

// Click the hamburger icon to show menu
hamburgerBar.addEventListener('click', (event) => {
  dropdownMenu.style.right = '0px'
})

// Click the close icon on the menu to close it
closeIcon.addEventListener('click', (event) => {
  dropdownMenu.style.right = '-200px'
})