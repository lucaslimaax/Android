const express = require('express')
const app =  express.Router()

const ContactController = require('./controllers/ContactController')

app.get('/', (req, res)=>{
    res.send('Hello Word!')
})

app.post('/contact', ContactController.store)
app.get('/contact', ContactController.index)
app.get('/contact/:id', ContactController.search)
app.put('/contact/:id', ContactController.update)
app.delete('/contact/:id', ContactController.destroy)


module.exports = app
