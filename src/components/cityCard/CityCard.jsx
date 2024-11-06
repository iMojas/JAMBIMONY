import { useState } from "react";
import "./CityCard.css";
const CityCard = (props) => {
  const { url, name, cityDes } = props;
  const { cityTitle, cityUrl } = props;
  const [isOpen, setIsopen] = useState(false);
  function open360() {
    setIsopen(true);
  }
  function close360() {
    setIsopen(false);
  }
  return (
    <>
      <div className="cityCard" title="click to view 360deg" onClick={open360}>
        <img src={url} alt="city" />
        <div className="name">
          <span>{name}</span>
          <p>{cityDes}</p>
        </div>
      </div>
      {isOpen ? (
        <div className="container360">
          <iframe
            title={cityTitle}
            width="100%"
            height="100%"
            src={cityUrl}
            allowFullScreen
          ></iframe>
          <i
            onClick={close360}
            className="fa-solid fa-circle-xmark"
            id="closeBtn"
          ></i>
        </div>
      ) : null}
    </>
  );
};

export default CityCard;
