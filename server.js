const express = require('express')
const { Nuxt } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
// Import and set Nuxt.js options
const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
// Give Nuxt middleware to express
app.use(nuxt.render)
// Listen the server
app.listen(port, host)
