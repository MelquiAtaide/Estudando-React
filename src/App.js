import React from 'react';
import './App.css';
import Header from './components/header';
import { useState } from 'react';
import User from './components/User';
import Form from './components/Form';
import { Button } from 'reactstrap';
import Footer from './components/Footer';

function App () {

  const [user, setUser ] = useState({
    id:1,
    name: 'Melquisedeque',
  });

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <User />
        <Form />
        <Footer tel='(82) 9 3286-4444' email='empresa@gmail.com' insta='@empresa' linkedin='empresaLTDA'/>
      </div>
    </div>
  );
};

export default App;
