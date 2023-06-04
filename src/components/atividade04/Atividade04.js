import React from 'react'
import {Link} from "react-router-dom"

export default function Atividade04 () {
    return (
        <div>
            <nav>
                <ul>
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