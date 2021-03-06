require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const errorHandler = require('./errorHandler')
const memberRouter = require('./members/member-router')
const operatorList = require('./operatorList')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.get('/', (req,res) => {
  res.send('Hello, world!')
})

app.use('/members', memberRouter)

app.use( errorHandler )

module.exports = app