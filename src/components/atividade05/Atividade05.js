import React from 'react';
import {Link} from 'react-router-dom';

import '../../css/home/home.css';

export default function Atividade05 () {
    return (
        <div className="container-main">
            <nav>
                <ul>
                    <li>
                        <h1>Atividade 05</h1>
                    </li>
                    <li>
                        <Link to='/accordion'>Accordion</Link>
                    </li>
                    <li>
                        <Link to='/messenger'>Messenger</Link>
                    </li>
                    <li>
                        <Link to='/formquiz'>Form Quiz</Link>
                    </li>
                    <li>
                        <Link to='/formticket'>Form Ticket</Link>
                    </li>
                    <li>
                        <Link to='/'>Voltar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}