import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';

// importando o aquivo locais
import './style.css';
import api from '../../services/api';

export default function NewClient(props) {

        
    const [ name, setName ] = useState('');
    const [ telephone, setTelephone ] = useState('');
    let [ type_account, setTypeaccount ] = useState('Pessoa Física');
    const [ cpf_cnpj, setCpfcnpj ] = useState('');
    const [ birth_date, setBirthdate ] = useState('');
    let [ gender, setGender ] = useState('');
    const [ func_account, setFuncaccount ] = useState('');

    const history = useHistory();

    async function handleNewClient(e){
        e.preventDefault();

        const data = { // os dados que serão enviados para o DB
            name,
            telephone,
            type_account,
            cpf_cnpj,
            birth_date,
            gender,
            func_account
        }

        try{
            await api.post("/newclient", data); // conecta com o DB e envia os dados

            localStorage.setItem('name', name);
            localStorage.setItem('telephone', telephone);
            localStorage.setItem('type_account', type_account);
            localStorage.setItem('cpf_cnpj', cpf_cnpj);
            localStorage.setItem('birth_date', birth_date);
            localStorage.setItem('gender', gender);
            localStorage.setItem('func_account', func_account);

            history.push('/confirmation'); //envia o usuário para a aba de confirmação
        } catch (err) {
            document.getElementById("alert").innerHTML = "O CPF/CNPJ já existe, tente novamente.";
        }

    }
    return (
        <div className="container">
            <div className="content-NewClient">
                <h1>Novo Cliente</h1>
                <form onSubmit={handleNewClient} id="form">
                    <label htmlFor="name" >Nome * </label>
                    <input
                        id="name"
                        placeholder="Naum Santos Mourão"
                        value={name}
                        onChange={e => setName(e.target.value)}    
                    />

                    <label htmlFor="telephone">Telefone *</label>
                    <InputMask
                        id="telephone"
                        placeholder="(99) 9 9999-9999"
                        mask="(99) 9 9999-9999"
                        value={telephone}
                        onChange={e => setTelephone(e.target.value)}
                    />

                    <label htmlFor="typeAccount">Tipo de conta</label>
                    <div className="typeAccount">                                
                        <select name="account"  onChange={e => setTypeaccount(e.target.value)}>
                            <option
                                value={type_account = "Pessoa Física"}
                                >Pessoa Física</option>
                            <option
                                value={type_account = "Pessoa Jurídica"}
                                >Pessoa Jurídica</option>
                        </select>
                    </div>

                    <label htmlFor="cpf_cnpj">CPF/CNPJ *</label>
                    <InputMask
                        id="cpf_cnpj"
                        placeholder="999.999.999-99"
                        mask="999.999.999-99"
                        value={cpf_cnpj}
                        onChange={e => setCpfcnpj(e.target.value)}
                    />

                    <div className="alert" id="alert"></div>

                    <label htmlFor="birth_date">Data de Nascimento</label>
                    <input
                        id="birth_date"
                        type="date"
                        value={birth_date}
                        onChange={e => setBirthdate(e.target.value)}
                    />

                    <label htmlFor="gender">Gênero</label>
                    <div className="gender">
                        <input
                            id="gender"
                            name="gender"
                            type="radio"
                            value={gender, "Masculino"}
                            onChange={e => setGender(e.target.value)}
                        />
                        <text> Masculino </text>
                    
                        <input
                            id="gender"
                            name="gender"
                            type="radio"
                            value={gender, "Feminino"}
                            onChange={e => setGender(e.target.value)}
                        />
                        <text> Feminino </text>
                    </div>

                    <label htmlFor="func_account">Função desejada *</label>
                    <div className="func_account">
                        <input
                            id="typeAccount"
                            type="checkbox"
                            name="credit"
                            value={func_account, "Crédito"}
                            onChange={e => setFuncaccount(e.target.value)}
                        />
                        <text value="Crédito">Crédito</text>

                        <input
                            id="typeAccount"
                            type="checkbox"
                            name="debit"
                            value={func_account, "Débito"}
                            onChange={e => setFuncaccount(e.target.value)}
                        />
                        <text value="Débito">Débito</text>
                    </div>

                    <div className="buttons">
                        <button className="clean">Limpar</button>
                        <button className="advanced" type="submit">AVANÇAR</button>
                        
                        {/* <Link className="advanced" to="/confirmation">AVANÇAR</Link> */}
                    </div>
                </form>
            </div>
        </div>
    );
};