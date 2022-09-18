import React from "react";
import "./HealthManagement.css";

function HealthManagement(props) {
  const { iconAwesomeArrowLeft, buyNowForRs0Only, path90, path91, requestACallback, iconCall, path88 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="health-management screen">
        <img className="icon-awesome-arrow-left animate-enter85" src={iconAwesomeArrowLeft} />
        <div className="overlap-group1-9">
          <div className="rectangle-73 animate-enter77"></div>
          <div className="rectangle-74 animate-enter78"></div>
          <p className="buy-now-for-rs-0-only poppins-semi-bold-royal-heath-15px animate-enter79">{buyNowForRs0Only}</p>
          <div className="icon-ionic-ios-arrow-dropleft animate-enter80">
            <div className="path-container-25">
              <img className="path-90" src={path90} />
              <img className="path-91" src={path91} />
            </div>
          </div>
        </div>
        <div className="overlap-group2-7">
          <div className="rectangle-75 animate-enter81"></div>
          <div className="rectangle-76 animate-enter82"></div>
          <div className="request-a-callback poppins-semi-bold-royal-heath-15px animate-enter83">
            {requestACallback}
          </div>
          <img className="icon-call animate-enter84" src={iconCall} />
        </div>
        <img className="path-88 animate-enter76" src={path88} />
      </div>
    </div>
  );
}

export default HealthManagement;
