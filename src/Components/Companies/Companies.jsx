import TowerImage from "../../assets/images/tower.png";
import RealtyImage from "../../assets/images/realty.png";
import Prologis from "../../assets/images/prologis.png";
import Equinix from "../../assets/images/equinix.png";
import "./Companies.css";
function Companies() {
  return (
    <div className='c-wrapper'>
        <div className='wrapper'>
            <div className='c-container'>
                <img src={TowerImage} alt="" />
                <img src={RealtyImage} alt="" />
                <img src={Prologis} alt="" />
                <img src={Equinix} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Companies