import "./Home.css";
import {Link} from "react-router-dom";
import { BsPatchQuestionFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="div-home">
      <BsPatchQuestionFill className="imgm"/>
      <Link to="/Details" className="animated-button">Start</Link>
    </div>
  )
}

export default Home