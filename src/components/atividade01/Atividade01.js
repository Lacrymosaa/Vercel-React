import React from 'react';
import {Link} from "react-router-dom";

import '../../css/home/home.css';

export default function Atividade01 () {
    return (
        <div className="container-main">
            <nav>
                <ul>
                    <li>
                        <h1>Atividade 01</h1>
                    </li>
                    <li>
                        <Link to='/Relogio'>Relogio</Link>
                    </li>
                    <li>
                        <Link to='/Frase'>Frase</Link>
                    </li>
                    <li>
                        <Link to='/'>Voltar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}