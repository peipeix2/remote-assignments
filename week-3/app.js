const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World. This is the solution to Week-3 Assignment 1.</h1>')
})

app.listen(3000, () => {
  console.log('The application is running on localhost:3000')
})