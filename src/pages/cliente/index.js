import React from 'react';
import Form from '../../components/Form';
import Alerta from '../../components/alerta';

const Cliente = () => {
    return (
        <div>
            <br />
            <Alerta />
            <h3>Cadastrar novo Cliente</h3>
            <br />
            <br />
            <Form />
        </div>
    );
}

export default Cliente;