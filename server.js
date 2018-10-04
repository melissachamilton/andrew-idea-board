// IMPORTING DEPENDENCIES
require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')

// CONNECTING DATABASE
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
)
const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})
// If the connection throws an error
connection.on('error', err => {
  console.log(`Mongoose default connection error: ${err}`)
})

// INSTANTIATING EXPRESS AND ADDING MIDDLEWARE
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(`${__dirname}/client/build/`))

// ROUTES

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

const usersController = require('./routes/usersController')

app.use('/api/users', usersController)

module.exports = app
