import React from 'react'
import {Link} from "react-router-dom"

import '../../css/home/home.css';

export default function Atividade04 () {
    return (
        <div className="container-main">
            <nav>
                <ul>
                    <li>
                        <h1>Atividade 04</h1>
                    </li>
                    <li>
                        <Link to='/Toolbar'>Toolbar</Link>
                    </li>
                    <li>
                        <Link to='/CounterList'>Counter List</Link>
                    </li>
                    <li>
                        <Link to='/'>Voltar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}