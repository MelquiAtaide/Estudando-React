import React from 'react';
import './form.css';

function Form() {
    return (
        <form className='form'>
            <h3>Cadastrar Novo Cliente</h3>
            <form method='POST' className='flexform'>
                <label for="name">Nome completo*</label>
                <input type="text" name="Name" />
                <label for="email">E-mail*</label>
                <input type="email" name="email" />
                <label for="telefone">Telefone com (DDD)*</label>
                <input type="text" name="telefone" />
                <label for="edereco">Endereço completo*</label>
                <input type="text" name="edereco" />
                <label for="data-nasci">Data de nascimento*</label>
                <input type="date" name="data-nasci" />
                <button className='bnt' type='submit'>Salvar</button>
            </form>
        </form>
    );
}

export default Form;