import React from 'react';
import { Link } from 'react-router-dom';

// importando o aquivo de estilo
import './style.css';

import api from '../../services/api';

export default function EditClients(){    //renderiza o html da página

    async function handleEditClient(e){
        e.preventDefault();

        try {
            const data = await api.put('/client', )
        } catch (error) {
            
        }
    }

    return (
        <div className="container">
            <div className="content-NewClient">
                <h1>Edite os dados</h1>
                <form name="form" onSubmit={handleEditClient}>
                    <label htmlFor="name" >Nome * </label>
                    <input id="name" placeholder="Naum Santos Mourão" />

                    <label htmlFor="telephone">Telefone *</label>
                    <input
                        id="telefone"
                        placeholder="(99) 9 9999-9999"
                    />

                    <label htmlFor="account">Tipo de conta</label>
                    <div className="account">
                        <select id="account" name="account">
                            <option>Pessoa Física</option>
                            <option>Pessoa Juridica</option>
                        </select>
                    </div>

                    <label htmlFor="cpf">CPF/CNPJ *</label>
                    <input
                        id="cpf"
                        placeholder="999.999.999-99"
                        maxLength="14"
                    />

                    <label htmlFor="birth_date">Data de Nascimento</label>
                    <input id="birth_date" type="birth_date" />

                    <label htmlFor="gender">Gênero</label>
                    <div className="gender">
                        <input
                            id="gender"
                            type="radio"
                            name="masculino"
                            value="Masculino"
                        />
                        <text> Masculino </text>
                        <input
                            id="gender"
                            type="radio"
                            name="feminino"
                            value="Feminino"
                        />
                        <text> Feminino </text>
                    </div>

                    <label htmlFor="typeAccount">Função desejada *</label>
                    <div className="typeAccount">
                        <input
                            id="typeAccount"
                            type="checkbox"
                            name="credit"
                        />
                        <text>Crédito</text>

                        <input
                            id="typeAccount"
                            type="checkbox"
                            name="debit"
                        />
                        <text>Débito</text>
                    </div>

                    <div className="buttons">
                        <Link className="advanced" to="/confirmation">Cancelar</Link>
                        <button className="clean" type="submit">ATUALIZAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

