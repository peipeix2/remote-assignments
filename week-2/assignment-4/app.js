const welcomeBlock = document.querySelector('.landing-page-img')
const readMoreButton = document.querySelector('.landing-page-button')
const hiddenContainer = document.querySelector('.hide')

// Click the welcome block to change text
welcomeBlock.addEventListener('click', (event) => {
  event.target.firstElementChild.textContent = 'Have a Good Time!'
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