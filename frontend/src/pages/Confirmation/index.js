import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import './style.css';

export default function Confirmation() {

    const name = localStorage.getItem('name');
    const telephone = localStorage.getItem('telephone');
    const type_account = localStorage.getItem('type_account');
    const cpf_cnpj = localStorage.getItem('cpf_cnpj');
    const birth_date = localStorage.getItem('birth_date');
    const gender = localStorage.getItem('gender');
    const func_account = localStorage.getItem('func_account');

    const history = useHistory();

    function handleConfirmation(e) {
        e.preventDefault();

        history.push('/clients');
    }

    return (
        <div className="container">
            <div className="content-confirmation">
                <h1>Confirme seus dados</h1>
                <p><span>Nome:</span> {name}</p>
                <p><span>Telefone:</span> {telephone}</p>
                <p><span>Tipo de conta:</span> {type_account}</p>
                <p><span>CPF/CNPJ:</span> {cpf_cnpj}</p>
                <p><span>Data de Nascimento:</span> { birth_date}</p>
                <p><span>Gênero:</span></p>
                <p>{gender}</p>
                <p><span>Funcões desejadas:</span></p>
                <p>{func_account}</p>
                
                <div className="buttons">
                    <Link className="back" to="/newclient" >
                        <FiChevronLeft className="icon" size={14} color="#000"/>
                        Voltar
                    </Link>
                    <button className="finish" onClick={handleConfirmation}>FINALIZAR</button>
                </div>
                
            </div>
        </div>
    );

};