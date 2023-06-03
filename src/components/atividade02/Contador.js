import React, { useState } from 'react';
import './Contador.css';
import maleImage from './homem.jpg';
import femaleImage from './mulher.jpg';

function ContadorPessoas() {
  const [total, setTotal] = useState(0);
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const HomensAdd = () => {
    setTotal(total + 1);
    setHomens(homens + 1);
  };

  const HomensRemove = () => {
    setTotal(total - 1);
    setHomens(homens - 1);
  };

  const MulheresAdd = () => {
    setTotal(total + 1);
    setMulheres(mulheres + 1);
  };

  const MulheresRemove = () => {
    setTotal(total - 1);
    setMulheres(mulheres - 1);
  };

  const Refresh = () => {
    setTotal(0);
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className='container'>
      <h1>Total: {total}</h1>
      <div className='title-container'>
        <div className='men-container'>
          <h2>Homens: {homens}</h2>
          <div className='buttons-container'>
            <button className='button-add' onClick={HomensAdd}>+</button>
            <button className='button-remove' onClick={HomensRemove}>-</button>
          </div>
        </div>
        <div className='women-container'>
          <h2>Mulheres: {mulheres}</h2>
          <div className='buttons-container'>
            <button className='button-add' onClick={MulheresAdd}>+</button>
            <button className='button-remove' onClick={MulheresRemove}>-</button>
          </div>
        </div>
      </div>
      <div className='image-container'>
        <img className='male-image' src={maleImage} alt='Homem' />
        <img className='female-image' src={femaleImage} alt='Mulher' />
      </div>
      <button className='refresh-button' onClick={Refresh}>Refresh</button>
    </div>
  );
}

export default ContadorPessoas;
