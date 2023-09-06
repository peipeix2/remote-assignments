const welcomeBlock = document.querySelector('.landing-page-img')

// Click the welcome block to change text
welcomeBlock.addEventListener('click', (event) => {
  event.target.firstElementChild.textContent = 'Have a Good Time!'
})