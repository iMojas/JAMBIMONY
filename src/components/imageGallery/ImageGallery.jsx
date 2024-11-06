import "./ImageGallery.css";
import image1 from "./diving1.jpg";
import image2 from "./diving2.jpg";
import image3 from "./diving3.jpg";
import image4 from "./f2.jpg";
import image5 from "./g1.jpg";
import image6 from "./h3.jpg";
import image7 from "./nature1.jpg";
import image8 from "./nature2.jpg";
import image9 from "./nature3.jpg";
import image10 from "./p1.jpg";
import image11 from "./p2.jpg";
import image12 from "./p3.jpg";
const ImageGallery = () => {
  return (
    <div className="imageGallery">
      <div className="imageCard">
        <img src={image1} alt="" />
        <span className="textCenter">Some Food here</span>
      </div>
      <div className="imageCard">
        <img src={image2} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image3} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image4} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image5} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image6} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image7} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image8} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image9} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image10} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image11} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image12} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
    </div>
  );
};

export default ImageGallery;
