const mongoose = require('mongoose')

//Estrutura da tabela contato
const ContactSchema = new mongoose.Schema({

    contactname: {
        type: String,
        required: true
    },

    contactphone: {
        type: String,
        required: true,
        unique: true
    },

    contactemail: {
        type: String
    }, 
}, {
    timestamps: true
})

mongoose.model('Contact', ContactSchema)


