
import React, { useState, useEffect } from "react";

function Frase() {
  const [totalPessoas, setTotalPessoas] = useState(0);
  const [totalHomens, setTotalHomens] = useState(0);
  const [totalMulheres, setTotalMulheres] = useState(0);

  const handleTotalPessoas = (value) => {
    setTotalPessoas(totalPessoas + value);
  };

  const handleTotalHomens = (value) => {
    setTotalHomens(totalHomens + value);
    handleTotalPessoas(value);
  };

  const handleTotalMulheres = (value) => {
    setTotalMulheres(totalMulheres + value);
    handleTotalPessoas(value);
  };

  return (
    <div>
      <p> Exercicio - Contador Pessoas </p>
      <h4>Total de pessoas: {totalPessoas}</h4>
      <div>
        <h4>Homens</h4>
        <span>{totalHomens}</span>
        <button onClick={() => handleTotalHomens(1)}>+</button>
        <button onClick={() => handleTotalHomens(-1)}>-</button>
      </div>
      <div>
        <h4>Mulheres</h4>
        <span>{totalMulheres}</span>
        <button onClick={() => handleTotalMulheres(1)}>+</button>
        <button onClick={() => handleTotalMulheres(-1)}>-</button>
      </div>
    </div>
  );
}

export default Frase;
