import React from 'react';
import {Link} from 'react-router-dom';

import '../../css/home/home.css';

export default function Atividade03 () {
    return (
        <div className="container-main">
            <nav>
                <ul>
                    <li>
                        <h1>Atividade 03</h1>
                    </li>
                    <li>
                        <Link to='/Gallery'>Gallery</Link>
                    </li>
                    <li>
                        <Link to='/TodoList'>ToDo List</Link>
                    </li>
                    <li>
                        <Link to='/'>Voltar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}