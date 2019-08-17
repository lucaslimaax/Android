const express = require('express')
const server = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const mongodb = 'mongodb://localhost:27017/apiagenda'
const port = 3333

//conexão com banco de dados
mongoose.connect(mongodb, {
    useNewUrlParser: true
})

require('./src/models/Contact')

server.use(morgan('dev'))

server.use(express.json())
server.use(express.urlencoded({extended: false}))

server.use('/', require('./src/routes'))

server.listen(port, ()=>{
    console.log('Server is runing in port', port)
})
