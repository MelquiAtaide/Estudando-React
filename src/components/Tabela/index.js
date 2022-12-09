import React from 'react';
import { Container, Table } from 'reactstrap';
import { useState, useEffect } from 'react';

const Tabela = () => {
  const [clientes, setClientes]=useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/cliente')
    .then((res)=>res.json())
    .then(
      (resultado)=>{
        setClientes(resultado)
      })

  })

    return (
        <Container className='pt-5'>
            <h3>Listagem dos Clientes Cadastrados</h3>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Id</th>
                <th>Nome completo</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>Data de nascimento</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map(

                    cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefone}</td>
                            <td>{cliente.endereco}</td>
                            <td>{cliente.data_nasci}</td>
                        </tr>
                ))}
            </tbody>
            </Table>
      </Container>
    )
}

export default Tabela;