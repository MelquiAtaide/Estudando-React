import React from 'react';
import './user.css';
import { useState } from 'react';

function User() {

    const [user, setUser ] = useState({
        id:1,
        name: 'Melquisedeque',
      });

    return (
        <user className='user'>
            <br/>
            <p>Bem vindo, <b>{user.name}</b></p>
        </user>
    );
}

export default User;