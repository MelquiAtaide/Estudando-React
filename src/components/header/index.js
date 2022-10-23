import React from 'react';
import './header.css';

function Header() {
    return (
        <header className='header'>
            <nav>
                <img src="/img/logo.jpg" />
                <ul>
                    <li><a href="http://github.com">Cadastrar Cliente</a></li>
                    <li><a href="http://github.com">Cadastrar Produtos</a></li>
                    <li><a href="http://github.com">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;