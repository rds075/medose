import React from "react";
import "./BloodGlucose.css";

function BloodGlucose(props) {
  const { bloodGlucose, x57OfAdultsInInd, glucoseMeter, className } = props;

  return (
    <div className={`blood-glucose animate-enter28 ${className || ""}`}>
      <div className="blood-glucose-1 poppins-bold-black-18px-2">{bloodGlucose}</div>
      <p className="x57-of-adults-in-ind poppins-normal-star-dust-13px">{x57OfAdultsInInd}</p>
      <div className="add-symbol">
        <div className="icon-feather-plus">
          <div className="path-container-16">
            <img className="path-68-1" src="/img/path-68-1@1x.png" />
            <img className="path-69-1" src="/img/path-69-1@1x.png" />
          </div>
        </div>
      </div>
      <img className="glucose-meter" src={glucoseMeter} />
    </div>
  );
}

export default BloodGlucose;
