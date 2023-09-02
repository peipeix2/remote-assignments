const devProducts = [
  {
    name: 'Android',
    logo: './assets/Android_Robot.png',
    intro: 'Modern tools to help you build experiences that people love across every Android device'
  },
  {
    name: 'Google Cloud',
    logo: './assets/google_cloud_64dp.png',
    intro: 'Build apps faster, makes smarter business decisions, and connect people everywhere.'
  },
  {
    name: 'TensorFlow',
    logo: './assets/tensorflow-logo-196.png',
    intro: 'An end-to-end platform that makes it easy to build and deploy ML models in any environment.'
  },
  {
    name: 'Google Chrome',
    logo: './assets/chromeos-logo.svg',
    intro: 'Modern tools and features that help you build high quality web experiences.'
  },
  {
    name: 'Google Play',
    logo: './assets/play_prism_64dp.png',
    intro: 'Grow your business, improve app quality, engage your audience, and earn revenue.'
  },
  {
    name: 'Firebase',
    logo: './assets/firebase_64dp.png',
    intro: 'An app development platform that helps you build and grow apps and games users love.'
  },
  {
    name: 'PaLM',
    logo: './assets/palm-logo.svg',
    intro: `An easy and safe API to experiment with Google's large language models.`
  },
  {
    name: 'MakerSuite',
    logo: './assets/makersuite.png',
    intro: 'Quickly prototype generative AI applications in a browser - no ML expertise or coding required.'
  },
  {
    name: 'Flutter',
    logo: './assets/flutter_64dp.png',
    intro: 'Build, test, and deploy beautiful web, mobile, desktop and embedded apps from one codebase.'
  },
  {
    name: 'Google Ads',
    logo: './assets/google-ads.svg',
    intro: 'Promote your website, products, and app to the right users with Google Ads.'
  },
  {
    name: 'Kaggle',
    logo: './assets/kaggle.svg',
    intro: 'A platform to share machine learning data sets, explore and build models, and compete in competitions'
  },
  {
    name: 'Angular',
    logo: './assets/angular.png',
    intro: 'A web development framework for building the future.'
  }
]

const socialMedia = [
  {
    name: 'Youtube',
    logo: './assets/yt.svg',
    intro: 'Subscribe to join a community of creative developers and learn the latest in Google technology.'
  },
  {
    name: 'Instagram',
    logo: './assets/ig.webp',
    intro: 'Follow and discover developer resources, community events, and inspirational stories.'
  },
  {
    name: 'LinkedIn',
    logo: './assets/li_96.png',
    intro: 'Join a community of creative developers and learn how to use the latest in technology.'
  },
  {
    name: 'X',
    logo: './assets/x.svg',
    intro: 'Join the conversation to discover the latest developer tools, resources, events, and announcements.'
  }
]

const dataPanel = document.querySelector('.card-container')
const socialMediaPanel = document.querySelector('.sm-card-container')
let cardHTML = ''
let smHTML = ''

devProducts.forEach(product => {
  cardHTML += `
            <a class="card-link" href="#">
              <div class="card">
                <div class="card-img">
                  <img class="dev-logo" src="${product.logo}" alt="${product.name}-logo">
                </div>
                <div class="card-content">
                  <p class="card-title">${product.name}</p>
                  <p class="card-intro" >${product.intro}</p>
                </div>
              </div>
            </a>
  `
})

dataPanel.innerHTML = cardHTML

socialMedia.forEach(item => {
  smHTML += `
        <div class="sm-card">
          <div class="sm-card-img">
            <img class="sm-logo" src="${item.logo}" alt="${item.name}-logo">
          </div>
          <div class="sm-content">
            <p class="sm-title">${item.name}</p>
            <p class="sm-intro">${item.intro}</p>
            <button class="btn-white sm-read-more">Learn more</button>
          </div>
        </div>`
})

socialMediaPanel.innerHTML = smHTML