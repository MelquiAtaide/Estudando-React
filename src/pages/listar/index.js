import React from 'react';
import { Container, Table } from 'reactstrap';
import { useState, useEffect } from 'react';
import Tabela from '../../components/Tabela';
import Card from '../../components/card';

const Listar = () => {
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
      <div>
        <Tabela />
        
      </div>
    )
}

export default Listar;