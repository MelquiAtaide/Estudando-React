import React from 'react';
import './footer.css';

//tel='(82) 9 3286-4444' email='empresa@gmail.com' insta='@empresa' linkedin='empresaLTDA'

function Footer(props) {
    return (
        <Footer>
            <div className='footer'>
                <li><b>Telefone: </b>{props.tel}</li>
                <li><b>E-mail: </b>{props.email}</li>
                <li><b>Intagram: </b>{props.insta}</li>
                <li><b>LinkedIn: </b>{props.linkedin}</li>
            </div>
        </Footer>
    );
}

export default Footer;