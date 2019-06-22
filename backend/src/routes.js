const express = require('express')
const app =  express.Router()

const ContactController = require('./controllers/ContactController')

app.get('/', (req, res)=>{
    res.send('Hello Word!')
})

app.post('/contact', ContactController.store)
app.get('/contact', ContactController.index)

module.exports = app
