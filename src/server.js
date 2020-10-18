const express = require('express')
const path = require('path');
const pages = require('./pages.js')

const server = express()

server
    // use req.body 
    .use(express.urlencoded({ extended: true }))
    // using static files
    .use(express.static('public'))
    // configure template engine t
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // route page create
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)


// server on
server.listen(5500) 