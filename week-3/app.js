const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('<h1>Hello World. This is the solution to Week-3 Assignment 1.</h1>')
})

app.get('/getData', (req, res) => {
  const number = req.query.number
  if (!number) {
    return res.send('Lack of Parameter.')
  } else if (isNaN(number)) {
    return res.send('Wrong Parameter.')
  }

  let sum = 0
  for (let i = 1; i <= number; i++) {
    sum += i
  }
  res.send(`${sum}`)
})

app.listen(3000, () => {
  console.log('The application is running on localhost:3000')
})