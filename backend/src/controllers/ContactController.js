const mongoose = require('mongoose')

//atribuindo a estrutura da tabela contato a variável Contact
const Contact = mongoose.model('Contact')

module.exports = {

    async index(req, res){

        const contact = await Contact.find()
        
        return res.json(contact)
    },

    async store(req, res) {

        const contact = await Contact.create(req.body)

        return res.json(contact)
    }

}