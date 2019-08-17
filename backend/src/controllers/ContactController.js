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
    },

    async search (req, res){

        const contact = await Contact.findById(req.params.id)

        return res.json(contact)
    },

    async update (req, res) {
        
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        })

        return res.json(contact)
    },

    async destroy(req, res){

        await Contact.findByIdAndRemove(req.params.id)
        
        res.send('Excluído com sucesso!')
    }

}