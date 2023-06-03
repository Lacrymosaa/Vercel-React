import React from 'react'
import {Link} from "react-router-dom"

export default function Atividade04 () {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/toolbar'>Toolbar</Link>
                    </li>
                    <li>
                        <Link to='/counterlist'>Counter List</Link>
                    </li>
                    <li>
                        <Link to='/'>Voltar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}