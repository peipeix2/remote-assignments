const dataPanel = document.querySelector('.row')
const pageDisplay = document.querySelector('.page-display')
const readMore = document.querySelector('.readmore-btn')
const returnBtn = document.querySelector('.return-btn')
const url = 'https://api.github.com/orgs/facebook/repos?per_page=5&'
let page = 1


fetchData(url + 'page=1')

readMore.addEventListener('click', () => {
  page += 1
  fetchData(url + `page=${page}`)
})

returnBtn.addEventListener('click', () => {
  page -= 1
  fetchData(url + `page=${page}`)
})

function fetchData(url) {
  fetch(url)
    .then(checkStatus)
    .then(res => res.json())
    .then(renderCard)
    .catch(error => console.error(error))
}

function checkStatus(res) {
  if (res.status === 200) {
    return Promise.resolve(res)
  } else {
    return Promise.reject(new Error(res.statusText))
  }
}

function renderTopics(item) {
  let topicsArray = item.topics
  let topicsContent = ''
  topicsArray.forEach(topic => {
    topicsContent += `
        <li>${topic}</li>
      `
  })
  return topicsContent
}

function renderCard(data) {
  let contentHTML = ''
  data.forEach(item => {
    contentHTML += `
        <div class="card-container course">
          <div class="course-inner-card">
            <p class="course-name">${item.name}</p>
            <span>${item.visibility}</span>
            <p class="course-intro">${item.description}</p>
            <ul class='topics-wrapper'>
              ${renderTopics(item)}
            </ul>
          </div>
        </div>
    `
    dataPanel.innerHTML = contentHTML
    renderPage(page)
  })
}

function renderPage(page) {
  pageDisplay.innerHTML = `<p>- ${page} - </p>`
}




