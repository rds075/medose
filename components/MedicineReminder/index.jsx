import React from "react";
import { Link } from "react-router-dom";
import "./MedicineReminder.css";

function MedicineReminder(props) {
  const {
    iconIonicMdArrowBack,
    digitalDiary,
    overlapGroup,
    path67,
    path68,
    path69,
    x4154153777_GoogleSearch3DModelChar,
    myHealth,
    activity,
    capsule,
    spanText1,
    spanText2,
    spanText3,
    x1UploadYourPresc,
    group12,
    path82,
    path83,
    path84,
    uploadPrescription,
    or,
    setRemindersManually,
    clickHereToGetReminders,
    path85,
    path86,
    path87,
    path88,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="medicine-reminder screen">
        <div className="overlap-group6-3">
          <div className="rectangle-60 animate-enter86"></div>
          <Link to="/daily-dairy-icon">
            <img className="icon-ionic-md-arrow-back-2 animate-enter87" src={iconIonicMdArrowBack} />
          </Link>
          <div className="digital-diary-2 poppins-semi-bold-black-21px animate-enter88">{digitalDiary}</div>
          <div className="link-bar animate-enter89">
            <div className="overlap-group2-8">
              <div className="rectangle-52-1"></div>
              <div className="ellipse-8-1"></div>
              <div className="overlap-group-8" style={{ backgroundImage: `url(${overlapGroup})` }}>
                <img className="path-67-1" src={path67} />
              </div>
              <div className="path-container-26">
                <img className="path-68-2" src={path68} />
                <img className="path-69-2" src={path69} />
              </div>
              <div className="ellipse-9-1"></div>
              <img className="x415-4153777_google-s-3" src={x4154153777_GoogleSearch3DModelChar} />
            </div>
          </div>
          <div className="rectangle-53-1 animate-enter90"></div>
          <div className="rectangle-54-1 animate-enter91"></div>
          <div className="my-health-1 poppins-normal-black-18px-2 animate-enter92">{myHealth}</div>
          <div className="activity-1 poppins-normal-black-18px-2 animate-enter93">{activity}</div>
        </div>
        <img className="capsule animate-enter100" src={capsule} />
        <div className="get-medicine-reminde animate-enter94">
          <span className="poppins-semi-bold-black-18px">{spanText1}</span>
          <span className="poppins-semi-bold-black-18px">{spanText2}</span>
          <span className="poppins-semi-bold-black-18px">{spanText3}</span>
        </div>
        <p className="x1-upload-your-presc poppins-normal-black-15px-2 animate-enter95">{x1UploadYourPresc}</p>
        <div className="group-12 animate-enter99" style={{ backgroundImage: `url(${group12})` }}>
          <div className="icon-feather-upload">
            <div className="path-container-27">
              <img className="path-82" src={path82} />
              <img className="path-83" src={path83} />
              <img className="path-84" src={path84} />
            </div>
          </div>
          <div className="upload-prescription">{uploadPrescription}</div>
        </div>
        <div className="or poppins-normal-black-15px-2 animate-enter96">{or}</div>
        <div className="et-reminders-container">
          <div className="set-reminders-manually poppins-semi-bold-black-15px-2 animate-enter97">
            {setRemindersManually}
          </div>
          <p className="click-here-to-get-reminders animate-enter98">{clickHereToGetReminders}</p>
        </div>
        <div className="plus-circle animate-enter101">
          <div className="path-container-28">
            <img className="path-85" src={path85} />
            <img className="path-86" src={path86} />
          </div>
        </div>
        <div className="path-container-29">
          <img className="path-87 animate-enter102" src={path87} />
          <img className="path-88-1 animate-enter103" src={path88} />
        </div>
      </div>
    </div>
  );
}

export default MedicineReminder;
