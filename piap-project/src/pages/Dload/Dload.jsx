import "./Dload.css";
import { BsFillCloudDownloadFill} from 'react-icons/bs';
import {useNavigate} from "react-router-dom"

export const Dload = () => {
    const navigate = useNavigate();

    const clickfim = () => {
        navigate("/");
    }

    return (
    <div className="down">
        <h2>Download PDF</h2>
        <BsFillCloudDownloadFill onClick={clickfim}/>
    </div>
  )
}
