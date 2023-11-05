import { useState } from 'react';
import './NumberQ.css';
import {useNavigate} from "react-router-dom"

function NumberQ() {
  const [numero, setNumero] = useState(0);
  const navigate = useNavigate();

  const aumentarNumero = () => {
    setNumero(numero + 2);
  };

  const diminuirNumero = () => {
    setNumero(numero - 1);
  };
  const gerarDoc = (numm) => {
    console.log(numm);
    navigate("/Dload");
  }

  return (
    <section>
      <h2>Quantidade de questões</h2>
      <div className="App">
        <button onClick={diminuirNumero} className="botao2">
          -1
        </button>
        <div className="numero">{numero}</div>
        <button onClick={aumentarNumero} className="botao1">
          +2
        </button>
      </div>
      <div className='button-last' onClick={() => gerarDoc(numero)}>
       Gerar doc.
      </div>
    </section>
  );
}

export default NumberQ;
