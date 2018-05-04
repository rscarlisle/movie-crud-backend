const express = require('express')
const cors = require('cors')
const server = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

server.use(cors())
server.use(bodyParser.json())
server.disable('x-powered-by')
if (process.env.NODE_ENV === 'development') server.use(morgan('dev'))

const moviesPath = require('./src/routes/movies')
server.use('/movies', moviesPath)

server.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

server.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

const listener = () => console.log(`Listening on port ${port}`)
server.listen(port, listener)

module.exports = server
