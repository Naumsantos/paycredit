import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

export default function Clients() {
    const [clients, setClient] = useState([]);
    
    useEffect(() => {
        api.get('clients').then(
            response => {
                setClient(response.data);
            }
        );
    }, []);

    async function handleDeleteClient(id){
        try {
            const element = document.getElementById('delete')
            await api.delete(`clients/${element}`);
        } catch (error) {
            alert('Erro ao excluir o cliente');
        }
    }

    return (
        <div className="container">
            <div className="content-client">
                <div className="header">
                    <h1>Clientes</h1>
                    <button onClick={() => handleDeleteClient(clients.id)} type="button" className="button-delete">
                        <FiTrash2 size={25} color="#000" />
                    </button>
                </div>
                
                <ul>
                    {clients.map(client => (
                        <li key={client.id}>
                            <div className="description">
                                <div>
                                    <input id="delete" value={client.id} type="checkbox" />
                                </div>
                                <div>
                                    <strong>{client.name}</strong>
                                    <p>Telefone: {client.telephone}</p>
                                    <p>CPF: {client.cpf_cnpj} </p>
                                </div>
                            </div>

                            <div className="right">
                                <p>Código: {client.id}</p>
                                <Link to="/editclients" className="edit">
                                    <FiEdit2 size={20} color="#000" />
                                </Link>
                            </div>
                        </li>
                    ))}

                    <div className="buttons">
                        <button className="cancel" type="reset" > Cancelar </button>
                        <button className="delete" type="submit">EXCLUIR</button>
                    </div>
                </ul>
            </div>
        </div>
    );
}