import "./StateUt.css";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import { useState } from "react";
function StateUt() {
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");

  function onLocationClick(event) {
    setStateCode(event.target.id);
    setStateName(event.target.getAttribute("name"));
    // console.log(event.target);
    console.log("Id", event.target.id);
    console.log("Name", event.target.getAttribute("name"));
  }

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <>
      <h1 className="pageHeading">States & Union Territory</h1>
      <div className="mapDetailsWrapper">
        <div className="mapWrapper">
          <SVGMap map={India} onLocationClick={onLocationClick} />
        </div>
        <div className="stateWrapper">
          {indianStates.map((elem) => {
            return (
              <div className="stateCard" key={elem}>
                <span>{elem}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* <p>{stateName}</p> */}
      {/* <p>{stateCode}</p> */}
    </>
  );
}

export default StateUt;
