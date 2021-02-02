require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const errorHandler = require('./errorHandler')
const authRouter = require('./auth/auth-router')
const memberRouter = require('./members/member-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

// let members = [
//     {
//         id: 1,
//         name: "Swankstah",
//         rank: "3600",
//         last_modified: "Nov 08 2020"
//     },
//     {
//         id: 2,
//         name: "Xanman.",
//         rank: "3200",
//         last_modified: "Nov 08 2020"
//     },
//     {
//         id: 3,
//         name: "Anbu.Senjutsu",
//         rank: "3000",
//         last_modified: "Nov 08 2020"
//     },
//     {
//         id: 4,
//         name: "Cybr..",
//         rank: "3650",
//         last_modified: "Nov 08 2020"
//     },
//     {
//         id: 5,
//         name: "Jammer1213",
//         rank: "2650",
//         last_modified: "Nov 08 2020"
//     }
// ]

// app.get('/members', (req, res) => {
//     res.json(members)
// })

app.use('/auth', authRouter)

app.use('/members', memberRouter)

app.use( errorHandler )

module.exports = app