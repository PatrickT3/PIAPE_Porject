import "./Details.css";
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import { LcContext} from "../../context/LcContext"

function Details() {
  const navigate = useNavigate();
  const { setCurso } = useContext(LcContext);
  const [interesses, setInteresses] = useState({
    redesComputadores: false,
    realidadeVirtual: false,
    inteligenciaArtificial: false
  });

  const handleCheckboxChange = event => {
    const { name, checked } = event.target;
    setInteresses(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(interesses);
    setCurso(interesses);
    navigate("/NumberQ");
    // Faça algo com os interesses selecionados
  };

  return (
    <div className="div-details">
      <h2>Curos</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input 
            type="checkbox"
            name="redesComputadores"
            checked={interesses.redesComputadores}
            onChange={handleCheckboxChange}
          />
          Redes de Computadores
        </label>
        
        <label>
          <input 
            type="checkbox"
            name="realidadeVirtual"
            checked={interesses.realidadeVirtual}
            onChange={handleCheckboxChange}
          />
          Realidade Virtual
        </label>
        
        <label>
          <input 
            type="checkbox"
            name="inteligenciaArtificial"
            checked={interesses.inteligenciaArtificial}
            onChange={handleCheckboxChange}
          />
          Inteligência Artificial
        </label>
        <button type="submit" id="buttonn">
          <BsFillArrowRightCircleFill/>
        </button>
      </form>
    </div>
  );
}

export default Details;
