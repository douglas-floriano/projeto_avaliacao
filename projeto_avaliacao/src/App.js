// import React, {useState} from 'react';
import React from 'react';
import './App.css';

import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'
import Desafio from './components/Dasafio'

function App() {
  // const [min, setMin] = useState(10)
  // const [max, setMax] = useState(100)

  return (
    <div className='App'>
      <h1>Projeto-Redux</h1>
      
      <div className='linha'>
        {/* <Intervalo min={min} max={max} 
        onMinChanged={setMin} onMaxChanged={setMax}></Intervalo> */}
        <Media ></Media>
        
      </div>

      <div className='linha'>
        {/* <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio> */}
        <Intervalo></Intervalo>
        <Soma></Soma>
        <Sorteio></Sorteio> 
      </div>

    </div>
  )
}

export default App;