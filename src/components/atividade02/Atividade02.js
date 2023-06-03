import React from 'react';
import {Link} from 'react-router-dom';

import '../../css/home/home.css';

export default function Atividade02 () {
    return (
        <div className="container-main">
            <nav>
                <ul>
                    <li>
                        <h1>Atividade 02</h1>
                    </li>
                    <li>
                        <Link to='/contador'>Contador</Link>
                    </li>
                    <li>
                        <Link to='/'>Voltar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}