import "./FestivalCard.css";
import PropTypes from "prop-types";
const FestivalCard = (props) => {
  return (
    <div className="festCard">
      <div className="imgContainer" title={props.name}>
        <img src={props.img} alt="Festival Image" />
      </div>
      <span className="festName">{props.name}</span>
      <span className="festDate">{props.date}</span>
    </div>
  );
};
FestivalCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default FestivalCard;
