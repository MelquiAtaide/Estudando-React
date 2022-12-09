import React from 'react';
import './form.css';
//import { Button } from 'reactstrap';
import Botao from '../button';

function Form() {
    return (
        <form className='form'>
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
                <br/>
                <Botao />
            </form>
        </form>
    );
}

export default Form;