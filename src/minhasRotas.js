import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Home
import Home from "./Home";

// Atividade 01
import Atividade01 from "./components/atividade01/Atividade01";
import Relogio from "./components/atividade01/Relogio";
import Frase from "./components/atividade01/Frase";

// Atividade 02
import Atividade02 from "./components/atividade02/Atividade02";
import Contador from "./components/atividade02/Contador";

// Atividade 03
import Atividade03 from "./components/atividade03/Atividade03";
import Gallery from './components/atividade03/Gallery';
import TodoList from './components/atividade03/TodoList';

// Atividade 04
import Atividade04 from "./components/atividade04/Atividade04";
import Toolbar from "./components/atividade04/Toolbar";
import CounterList from "./components/atividade04/CounterList";

// Atividade 05
import Atividade05 from './components/atividade05/Atividade05';
import Accordion from './components/atividade05/Accordion';
import Messenger from './components/atividade05/Messenger';
import FormQuiz from './components/atividade05/FormQuiz';
import FormTicket from './components/atividade05/FormTicket';

const MinhasRotas = () => {
    return (
        <BrowserRouter>
            <Routes>   
                // Home
                <Route path="/" element={<Home />} />

                // Atividade 01
                <Route path="/Atividade01" element={<Atividade01 />} />
                <Route path="/Relogio" element={<Relogio />} />
                <Route path="/Frase" element={<Frase />} />

                // Atividade 02
                <Route path="/Atividade02" element={<Atividade02 />} />
                <Route path="/Contador" element={<Contador />} />

                // Atividade 03
                <Route path="/Atividade03" element={<Atividade03 />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/TodoList" element={<TodoList />} />

                // Atividade 04
                <Route path="/Atividade04" element={<Atividade04 />} />
                <Route path="/Toolbar" element={<Toolbar />} />
                <Route path="/CounterList" element={<CounterList />} />

                // Atividade 05
                <Route path="/Atividade05" element={<Atividade05 />} />
                <Route path="/Accordion" element={<Accordion />} />
                <Route path="/Messenger" element={<Messenger />} />
                <Route path="/FormQuiz" element={<FormQuiz />} />
                <Route path="/FormTicket" element={<FormTicket />} />

            </Routes>
        </BrowserRouter>
    );
}

export default MinhasRotas;