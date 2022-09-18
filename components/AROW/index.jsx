import React from "react";
import "./AROW.css";

function AROW(props) {
  const { className } = props;

  return (
    <div className={`arow ${className || ""}`}>
      <img className="icon-ionic-ios-arrow-back-6" src="/img/icon-ionic-ios-arrow-back-3@1x.png" />
    </div>
  );
}

export default AROW;
