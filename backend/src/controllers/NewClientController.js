const connection = require('../database/connection');

module.exports = {
    async create(request, response) {

        // recebe os dados enviados pelo front
        const { name, telephone, type_account, cpf_cnpj, birth_date, gender, func_account } = request.body; 

        // compara o CPF/CNPJ enviado pelo front com os já cadastrados na DB e retorna se tiver encontrado.
        const client = await connection('clients').where('cpf_cnpj', cpf_cnpj).select('cpf_cnpj').first();

        if ( !client ){
            // insere os dados no banco de dados
            await connection('clients').insert({
                name,
                telephone,
                type_account,
                cpf_cnpj,
                birth_date,
                gender,
                func_account
            });
        }else{
            return response.status(409).json({ error: "CPF/CNPJ já existe, tente novamente." });

        }

        return response.status(200).json("Cadastrado com sucesso");
    }
};