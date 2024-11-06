import "./Map.css";
const Map = () => {
  return (
    <div className="mapContainer flex">
      <h2 className="textCenter">Locate top heritage sites in India!</h2>
      <h4 className="textCenter">
        This map depicts the top ten historical sites in India in terms of their
        geographical location. Click on any pointer to learn more about the
        place and to appreciate the diversity!
      </h4>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1D5JJH_B1nysKHLOMmpgxuKgQPaDLiEQ&ehbc=2E312F"
        width="60%"
        height="480"
      ></iframe>
    </div>
  );
};

export default Map;
