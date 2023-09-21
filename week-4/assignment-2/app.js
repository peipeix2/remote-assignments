const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

async function ajax(url) {
  try {
  const response = await fetch(url)
  const data = await response.json()
  return data
  } catch(error) {
    console.error(`Something is wrong: ${error.message}`)
  }
}

function render(data) {
  const dataPanel = document.querySelector('.row')
  let contentHTML = ''
  data.forEach(item => {
    contentHTML += `
      <div class="col">
        <div class="card-container supervisor">
          <div class="inner-card">
            <h3 class="card-title">${item.name}</h3>
            <span class='price'>${item.price}</span>
            <p>${item.description}</p>
          </div>
        </div>
      </div>
    `
  })
  dataPanel.innerHTML = contentHTML
}

ajax(url)
  .then(data => render(data))