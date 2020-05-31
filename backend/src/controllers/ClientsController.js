const connection = require('../database/connection');

module.exports = {
    // lista todos os clientes.
    async index(request, response) {
        const clients = await connection('clients').select("*");

        return response.json(clients);
    },

    async delete(request, response) {
        const { id } = request.params; //pega o cpf a ser excluido

        // procura o cpf no DB
        const client = await connection('clients').where('id', id).select('cpf_cnpj').first();


            //aqui deu erro
        if (!client) {
            return response.status(401).json({ error: 'User not exist in data base.' });
        } else {
            await connection('clients').where('id', id).delete();
        };
            
        

        return response.status(204).send();
    }
};