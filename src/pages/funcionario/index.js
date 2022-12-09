import React from 'react';
import Form from '../../components/Form';
import Alerta from '../../components/alerta';

function Funcionario () {
    return (
        <div>
            <br />
            <Alerta />
            <h3>Cadastrar novo funcionário</h3>
            <Form />
        </div>
    )
}

export default Funcionario;