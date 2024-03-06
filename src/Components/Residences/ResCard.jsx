
import "./ResCard.css";
import { FaDollarSign } from "react-icons/fa";

function ResCard(props) {
  return (
    <div className='rs-container'>
        <img src={props.image} alt="home" />
        <span><FaDollarSign color={"yellow"} /> {props.price}</span>
        <h3>{props.heading}</h3>
        <span>{props.desc}</span>
    </div>
  )
}

export default ResCard