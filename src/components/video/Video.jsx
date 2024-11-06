import videoLink from "./v2.mp4";
import "./Video.css";
import Typewriter from "typewriter-effect";

const Video = () => {
  return (
    <div className="video flex">
      <video id="video" autoPlay loop muted>
        <source type="video/mp4" src={videoLink} />
      </video>

      <div className="textContainer ">
        <Typewriter
          options={{
            strings: [
              "Vasudeva Kutumbakam ",
              "Padharo Mharo Desh",
              "Incredible India !",
              "The heart of India beats in its rich heritage.",
              "Explore Indian Culture",
              "In India, every corner tells a story.",
              "India’s culture: A mosaic of traditions, beliefs, and customs.",
            ],
            autoStart: true,
            loop: true,
          }}
          className="typewriter"
        />
        <p className="pText">
          India is a vast and diverse country in South Asia, known for its rich
          cultural heritage, history, and vibrant traditions. It is the
          world&apos;s largest democracy and the second-most populous nation,
          with over 1.4 billion people. India is home to a variety of languages,
          religions, and ethnic groups, making it a melting pot of cultures.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default Video;
