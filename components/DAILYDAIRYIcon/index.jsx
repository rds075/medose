import React from "react";
import { Link } from "react-router-dom";
import AROW from "../AROW";
import IconFeatherBook from "../IconFeatherBook";
import ADD from "../ADD";
import BloodGlucose from "../BloodGlucose";
import "./DAILYDAIRYIcon.css";

function DAILYDAIRYIcon(props) {
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
    connectYourDevices,
    toRecordYourVitalsWithEase,
    iconIonicIosArrowBack1,
    spanText1,
    spanText2,
    pathContainer,
    path74,
    path72,
    path73,
    iconIonicIosFunnel,
    spanText3,
    spanText4,
    path75,
    path76,
    path77,
    path78,
    path79,
    freeHealthAssessments,
    diabetes11,
    diabetes,
    thisToolIsASimpl1,
    iconIonicIosArrowBack2,
    diabetes12,
    depression,
    takeThisPhq9Depr,
    iconIonicIosArrowBack3,
    diabetes13,
    chronicKidney,
    iconIonicIosArrowBack4,
    thisToolIsASimpl2,
    diabetes14,
    spanText5,
    spanText6,
    iconIonicIosArrowBack5,
    thisToolIsASimpl3,
    diabetes15,
    heartDisease,
    iconIonicIosArrowBack6,
    thisToolIsUsedTo,
    myHealthCharts,
    overlapGroup6,
    iconHome,
    place,
    diary,
    iconLight_Bulb,
    healthTips,
    iconMetroMenu,
    menu,
    aROWProps,
    iconFeatherBookProps,
    bloodGlucose1Props,
    bloodGlucose2Props,
    bloodGlucose3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="daily-dairy-icon screen">
        <div className="digital-diary animate-enter31">
          <img className="icon-ionic-md-arrow-back" src={iconIonicMdArrowBack} />
          <div className="digital-diary-1 poppins-semi-bold-black-21px">{digitalDiary}</div>
          <div className="overlap-group2-4">
            <div className="rectangle-52"></div>
            <div className="ellipse-8"></div>
            <div className="overlap-group-4" style={{ backgroundImage: `url(${overlapGroup})` }}>
              <img className="path-67" src={path67} />
            </div>
            <div className="path-container-10">
              <img className="path-68" src={path68} />
              <img className="path-69" src={path69} />
            </div>
            <div className="ellipse-9"></div>
            <img className="x415-4153777_google-s-1" src={x4154153777_GoogleSearch3DModelChar} />
          </div>
          <div className="overlap-group5-1 poppins-normal-black-18px-2">
            <div className="rectangle-53"></div>
            <div className="rectangle-54"></div>
            <div className="my-health">{myHealth}</div>
            <div className="activity">{activity}</div>
          </div>
        </div>
        <div className="connect-your-device animate-enter22">
          <div className="your-container">
            <div className="connect-your-devices poppins-semi-bold-black-15px-2">{connectYourDevices}</div>
            <p className="to-record-your-vitals-with-ease poppins-normal-black-15px-2">{toRecordYourVitalsWithEase}</p>
          </div>
          <img className="icon-ionic-ios-arrow-back" src={iconIonicIosArrowBack1} />
        </div>
        <div className="health-container">
          <div className="upload-your-health-report animate-enter23">
            <AROW />
            <div className="u-pload-yourhealth-reports poppins-normal-black-15px-4">
              <span className="poppins-normal-black-15px-2">{spanText1}</span>
              <span className="poppins-normal-black-15px-2">{spanText2}</span>
            </div>
            <div className="icon">
              <div className="overlap-group1-5">
                <div className="path-container-11" style={{ backgroundImage: `url(${pathContainer})` }}>
                  <img className="path-74" src={path74} />
                  <img className="path-7-1" src={path72} />
                  <img className="path-7-1" src={path73} />
                </div>
                <img className="icon-ionic-ios-funnel" src={iconIonicIosFunnel} />
              </div>
            </div>
          </div>
          <div className="share-health-data animate-enter24">
            <AROW className={aROWProps.className} />
            <p className="share-health-data-with-your-doctor poppins-normal-black-15px-4">
              <span className="poppins-normal-black-15px-2">{spanText3}</span>
              <span className="poppins-normal-black-15px-2">{spanText4}</span>
            </p>
            <div className="path-container-12">
              <img className="path-75" src={path75} />
              <img className="path-76" src={path76} />
              <img className="path-77" src={path77} />
              <img className="path-78" src={path78} />
              <img className="path-79" src={path79} />
            </div>
          </div>
        </div>
        <div className="free-health-assessments poppins-semi-bold-black-21px animate-enter25">
          {freeHealthAssessments}
        </div>
        <div className="scroll-group-3 animate-enter26">
          <div className="diabetes-2">
            <img className="diabetes-1-1" src={diabetes11} />
            <div className="overlap-group1-6">
              <div className="overlap-group-5">
                <div className="diabetes-3 poppins-bold-black-14px">{diabetes}</div>
                <p className="this poppins-normal-black-11px">{thisToolIsASimpl1}</p>
              </div>
              <img className="icon-ionic-ios-arrow-back-1" src={iconIonicIosArrowBack2} />
            </div>
          </div>
          <div className="diabetes-4">
            <img className="diabetes-1-1" src={diabetes12} />
            <div className="flex-row-6">
              <div className="depr-container">
                <div className="depression-1 poppins-bold-black-14px">{depression}</div>
                <p className="this poppins-normal-black-11px">{takeThisPhq9Depr}</p>
              </div>
              <img className="icon-ionic-ios-arrow-back-2" src={iconIonicIosArrowBack3} />
            </div>
          </div>
          <div className="diabetes-5">
            <img className="diabetes-1-1" src={diabetes13} />
            <div className="onic-container">
              <div className="chronic-kidney poppins-bold-black-12px">{chronicKidney}</div>
              <img className="icon-ionic-ios-arrow-back-3" src={iconIonicIosArrowBack4} />
            </div>
            <p className="this-tool-is-asimpl poppins-normal-black-11px">{thisToolIsASimpl2}</p>
          </div>
          <div className="diabetes-6">
            <img className="diabetes-1-1" src={diabetes14} />
            <div className="flex-row-7">
              <div className="anxiety">
                <span className="poppins-bold-black-12px">{spanText5}</span>
                <span className="poppins-bold-black-12px">{spanText6}</span>
              </div>
              <img className="icon-ionic-ios-arrow-back-4" src={iconIonicIosArrowBack5} />
            </div>
            <p className="this-tool-is-asimpl poppins-normal-black-11px">{thisToolIsASimpl3}</p>
          </div>
          <div className="overlap-group4-3">
            <div className="rectangle-57"></div>
            <img className="diabetes-1-2" src={diabetes15} />
            <div className="heart-disease poppins-bold-black-12px">{heartDisease}</div>
            <img className="icon-ionic-ios-arrow-back-5" src={iconIonicIosArrowBack6} />
            <p className="this-tool-is-usedto poppins-normal-black-11px">{thisToolIsUsedTo}</p>
          </div>
        </div>
        <div className="my-health-charts animate-enter27">{myHealthCharts}</div>
        <div className="group-14 animate-enter32">
          <div className="overlap-group6-1" style={{ backgroundImage: `url(${overlapGroup6})` }}>
            <Link to="/iphone-6-7-8-plus-1">
              <div className="home-1">
                <img className="icon-home-1" src={iconHome} />
                <div className="place-1 poppins-normal-star-dust-10px">{place}</div>
              </div>
            </Link>
            <div className="dairy-2">
              <IconFeatherBook path17={iconFeatherBookProps.path17} path18={iconFeatherBookProps.path18} />
              <div className="diary-1 poppins-normal-black-10px">{diary}</div>
            </div>
            <ADD />
            <Link to="/health-tips-icon">
              <div className="health-tip-1">
                <img className="icon-light_bulb-1" src={iconLight_Bulb} />
                <div className="health-tips-2 poppins-normal-star-dust-10px">{healthTips}</div>
              </div>
            </Link>
            <Link to="/menu-icon">
              <div className="menu-2">
                <img className="icon-metro-menu-1" src={iconMetroMenu} />
                <div className="menu-3 poppins-normal-star-dust-10px">{menu}</div>
              </div>
            </Link>
          </div>
        </div>
        <BloodGlucose
          bloodGlucose={bloodGlucose1Props.bloodGlucose}
          x57OfAdultsInInd={bloodGlucose1Props.x57OfAdultsInInd}
          glucoseMeter={bloodGlucose1Props.glucoseMeter}
        />
        <BloodGlucose
          bloodGlucose={bloodGlucose2Props.bloodGlucose}
          x57OfAdultsInInd={bloodGlucose2Props.x57OfAdultsInInd}
          glucoseMeter={bloodGlucose2Props.glucoseMeter}
          className={bloodGlucose2Props.className}
        />
        <BloodGlucose
          bloodGlucose={bloodGlucose3Props.bloodGlucose}
          x57OfAdultsInInd={bloodGlucose3Props.x57OfAdultsInInd}
          glucoseMeter={bloodGlucose3Props.glucoseMeter}
          className={bloodGlucose3Props.className}
        />
      </div>
    </div>
  );
}

export default DAILYDAIRYIcon;
