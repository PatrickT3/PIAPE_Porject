import "./Dload.css";
import { BsFillCloudDownloadFill} from 'react-icons/bs';
import {useNavigate} from "react-router-dom"
import { useEffect, useState, useContext} from 'react';
import { LcContext} from "../../context/LcContext"

export const Dload = () => {
    const navigate = useNavigate();
    const { curso, numQuestion} = useContext(LcContext);
    const chavesTrue = Object.keys(curso).filter(chave => curso[chave] === true);
    console.log(chavesTrue);
    const [dadosJSON, setDadosJSON] = useState([]);
    console.log(dadosJSON);
    const clickfim = () => {
        navigate("/");
    }

    useEffect(() => {
      async function fetchData() {
        try {
          const resposta = await fetch( '../../../public/BANCO DE QUESTÕES - PIAPE.json');
          const dados = await resposta.json();
          setDadosJSON(dados);
          console.log(dados);
        } catch (error) {
          console.error('Erro ao carregar dados JSON:', error);
        }
      }
  
      fetchData();
    }, []);

    return (
      <div>
        <div className="down">
            <h2>Download PDF</h2>
            <BsFillCloudDownloadFill onClick={clickfim}/>
        </div>
        <div className="info">
          <h3>INFO</h3>
          <p>Curso: <span>{chavesTrue[0]} </span></p>
          <p>Numero de Questões escolhidas: <span>{numQuestion}</span></p>
        </div>
      </div>
  )
}
