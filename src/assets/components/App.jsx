import React, { useState } from 'react';
import '../../../public/styles/app.css';



export default function App() {
  const [increment, setIncrement] = useState(0);
  const [mensagem, setMensagem] = useState("");

  const contadorDiv = document.querySelector('.contador-conteiner');

  const incrementar = () => {
    if(increment == 10  ){
      setMensagem("Chegou ao limite rapaz, volta!!");
      contadorDiv.classList.toggle('contador-limite');
    } 
    else{
    setIncrement(increment + 1);
    setMensagem("");
    contadorDiv.classList.remove('contador-limite');
  }
  }
    
  const decrementar = () => {
    if(increment <= 0){
      setMensagem("Chegou ao limite rapaz, avance!!!!");
      contadorDiv.classList.toggle('contador-limite');
      
    } 
    else{
    setIncrement(increment - 1);
    setMensagem("");
  }
  }

  return (
    <>
     <section className='contador-conteiner'>
      <div className='contador'>
        <button onClick={incrementar}> + </button>
          <h2>{increment}</h2>
          <button onClick={decrementar}> - </button>
          </div>
          <h2 className='mensagem'>{mensagem}</h2>
     </section>
    </>
  )
}


