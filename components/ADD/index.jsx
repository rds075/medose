import React from "react";
import "./ADD.css";

function ADD(props) {
  const { className } = props;

  return (
    <div className={`add ${className || ""}`}>
      <img className="icon-ionic-ios-add" src="/img/icon-ionic-ios-add-1@1x.png" />
    </div>
  );
}

export default ADD;
