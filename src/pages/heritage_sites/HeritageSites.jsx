import "./HeritageSites.css";
import { Link } from "react-router-dom";
import img from './varanasi.jpg'
const HeritageSites = () => {


  
  return (
    <>
    <p className="pageHeading">Heritage Sites</p>
    <div className="heritageWrapper">
  
     <div className="stateCard flex">
     <Link to='/varanasi'>

        <img src={img} alt="" />
        <p>Varanasi</p>
     </Link>
      </div>
    </div>
    </>
  );
};

export default HeritageSites;
