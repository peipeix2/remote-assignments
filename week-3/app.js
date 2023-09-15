const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cookieParser())

app.set('view engine', 'pug')

// Solution to Assignment-1
app.get('/', (req, res) => {
  res.send('<h1>Hello World. This is the solution to Week-3 Assignment 1.</h1>')
})

// Solution to Assignment-2
app.get('/getData', (req, res) => {
  const number = req.query.number
  if (!number) {
    return res.json('Lack of Parameter.')
  } else if (isNaN(number)) {
    return res.json('Wrong Parameter.')
  }

  let sum = 0
  for (let i = 1; i <= number; i++) {
    sum += i
  }
  res.send(`${sum}`)
})

// Solution to Assignment-5
app.get('/myName', (req, res) => {
  const { username } = req.cookies
  if (!username) {
    return res.render('signup')
  }
  res.render('signup', { username })
})

// Add Logout Feature
app.post('/myName', (req, res) => {
  res.clearCookie('username')
  res.redirect('/myName')
})

app.get('/trackName', (req, res) => {
  res.cookie('username', req.query.name)
  res.redirect('/myName')
})

// Error Handling
app.use((req, res, next) => {
  const err = new Error("Can't find this page")
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.error = err
  res.status(err.status)
  res.render('error', { err })
})

app.listen(3000, () => {
  console.log('The application is running on localhost:3000')
})