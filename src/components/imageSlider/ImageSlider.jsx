import "./ImageSlider.css";
import agraFort from "./Agra Fort.jpg";
import ajantaCaves from "./Ajanta Caves.jpg";
import elephantaCaves from "./Elephanta Caves.jpg";
import elloraCaves from "./Ellora Caves.jpg";
import fatehpurSikri from "./Fatehpur Sikri.jpg";
import sunTemple from "./Sun Temple.jpg";
const ImageSlider = () => {
  const slide1Css = {
    background: `url(${agraFort})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const slide2Css = {
    background: `url(${ajantaCaves})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const slide3Css = {
    background: `url(${elephantaCaves})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const slide4Css = {
    background: `url(${elloraCaves})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const slide5Css = {
    background: `url(${sunTemple})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const slide6Css = {
    background: `url(${fatehpurSikri})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="imageSlider flex">
      <h1>Some iconic heritage sites in India</h1>
      <p>
        Witness the grand Architecture! How about taking your kids on an
        exploration of India heritage this holiday season?
      </p>
      <div className="slides">
        <div className="slide" style={slide1Css}>
          <p>Agra Fort</p>
        </div>
        <div className="slide" style={slide2Css}>
          <p>Ajanta Caves</p>
        </div>
        <div className="slide" style={slide3Css}>
          <p>Elephanta Caves</p>
        </div>
        <div className="slide" style={slide4Css}>
          <p>Ellora Caves</p>
        </div>
        <div className="slide" style={slide5Css}>
          <p>Sun Temple</p>
        </div>
        <div className="slide" style={slide6Css}>
          <p>Fatehpur Sikri</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
