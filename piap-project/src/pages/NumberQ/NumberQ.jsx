import { useState } from 'react';
import './NumberQ.css';

function NumberQ() {
  const [numero, setNumero] = useState(0);

  const aumentarNumero = () => {
    setNumero(numero + 1);
  };

  const diminuirNumero = () => {
    setNumero(numero - 1);
  };

  return (
    <div className="App">
      <button onClick={aumentarNumero} className="botao">
        +1
      </button>
      <div className="numero">{numero}</div>
      <button onClick={diminuirNumero} className="botao">
        -1
      </button>
    </div>
  );
}

export default NumberQ;
