import React from 'react';
import './header.css';

import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Cliente from '../../pages/cliente';
import Funcionario from '../../pages/funcionario';
import Listar from '../../pages/listar';
import Footer from '../Footer';

function NavBar() {
    return (
        <Router>
            <header className='header'>
                <nav>
                    <img src="/img/logo.jpg" />
                    <ul>
                        <li><Link to="/cliente">Clientes</Link></li>
                        <li><Link to="/">Listar</Link></li>
                        <li><Link to="/funcionario">Funcionário</Link></li>
                    </ul>
                </nav>
            </header>
            <br />
            <br />
            <div>
                <Routes>
                    <Route path="/" element={<Listar />} />
                    <Route path="/cliente" element={<Cliente />} />
                    <Route path="/funcionario" element={<Funcionario />} />
                </Routes>
            </div>
            
            <Footer tel='(82) 9 3286-4444' email='empresa@gmail.com' insta='@empresa' linkedin='empresaLTDA'/>
        </Router>
    );
}

export default NavBar;