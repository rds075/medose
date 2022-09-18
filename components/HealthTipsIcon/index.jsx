import React from "react";
import { Link } from "react-router-dom";
import Group7 from "../Group7";
import IconFeatherBook from "../IconFeatherBook";
import ADD from "../ADD";
import "./HealthTipsIcon.css";

function HealthTipsIcon(props) {
  const {
    iconIonicMdArrowBack,
    price,
    saved,
    covid19,
    advancement,
    diet,
    exercise,
    medicines,
    sleepAndRelaxation,
    awarness,
    lifestyle,
    selfCare,
    healthTips1,
    d4RemovebgPreview,
    d_1RemovebgPreview,
    d2RemovebgPreview,
    d3RemovebgPreview,
    schizophrenia,
    depression,
    anxietyDisorder,
    postTraumaticStress,
    overlapGroup12,
    iconHome,
    place,
    diary,
    iconLight_Bulb,
    healthTips2,
    iconMetroMenu,
    menu,
    overlapGroup1,
    canAlprazolamHelpDepression,
    alprazolamCommonly,
    address1,
    iconHeart,
    path26,
    path27,
    iconBookmark,
    address2,
    address3,
    save,
    tablet1,
    group7Props,
    iconFeatherBookProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="health-tips-icon screen">
        <div className="health-tips-3 animate-enter35">
          <div className="overlap-group11-1">
            <div className="rectangle-72"></div>
            <img className="icon-ionic-md-arrow-back-1" src={iconIonicMdArrowBack} />
            <div className="group-11">
              <div className="overlap-group1-7">
                <div className="rectangle-61"></div>
                <div className="price-1">{price}</div>
              </div>
              <div className="overlap-group2-5">
                <div className="rectangle-62"></div>
                <div className="saved poppins-normal-onyx-10px">{saved}</div>
              </div>
              <div className="overlap-group-6">
                <div className="rectangle"></div>
                <div className="covid-19 poppins-normal-onyx-10px">{covid19}</div>
              </div>
              <div className="overlap-group7-1">
                <div className="rectangle-64"></div>
                <div className="advancement poppins-normal-onyx-10px">{advancement}</div>
              </div>
              <div className="overlap-group8-1">
                <div className="rectangle-65"></div>
                <div className="diet poppins-normal-onyx-10px">{diet}</div>
              </div>
              <div className="overlap-group-6">
                <div className="rectangle"></div>
                <div className="exercise poppins-normal-onyx-10px">{exercise}</div>
              </div>
              <div className="overlap-group9-1">
                <div className="rectangle-6"></div>
                <div className="medicines-1 poppins-normal-onyx-10px">{medicines}</div>
              </div>
              <div className="overlap-group-7">
                <div className="rectangle-68"></div>
                <div className="sleep-and-relaxation poppins-normal-onyx-10px">{sleepAndRelaxation}</div>
              </div>
              <div className="overlap-group5-2">
                <div className="rectangle-6"></div>
                <div className="awarness poppins-normal-onyx-10px">{awarness}</div>
              </div>
              <div className="overlap-group6-2">
                <div className="rectangle"></div>
                <div className="lifestyle poppins-normal-onyx-10px">{lifestyle}</div>
              </div>
              <div className="overlap-group3-3">
                <div className="rectangle-71"></div>
                <div className="self-care poppins-normal-onyx-10px">{selfCare}</div>
              </div>
            </div>
            <div className="health-tips-4 poppins-semi-bold-black-21px">{healthTips1}</div>
          </div>
        </div>
        <div className="group-8-1 poppins-semi-bold-black-12px animate-enter33">
          <img className="d4-removebg-preview-1" src={d4RemovebgPreview} />
          <img className="d_1-removebg-preview-1" src={d_1RemovebgPreview} />
          <img className="d2-removebg-preview-1" src={d2RemovebgPreview} />
          <img className="d3-removebg-preview-1" src={d3RemovebgPreview} />
          <div className="schizophrenia-1">{schizophrenia}</div>
          <div className="depression-2">{depression}</div>
          <div className="anxiety-disorder-1">{anxietyDisorder}</div>
          <div className="post-traumatic-stress-1">{postTraumaticStress}</div>
          <Group7 path26={group7Props.path26} className={group7Props.className} />
        </div>
        <div className="group-15 animate-enter36">
          <div className="overlap-group12-1" style={{ backgroundImage: `url(${overlapGroup12})` }}>
            <Link to="/iphone-6-7-8-plus-1">
              <div className="home-2">
                <img className="icon-home-2" src={iconHome} />
                <div className="place-2 poppins-normal-star-dust-10px">{place}</div>
              </div>
            </Link>
            <Link to="/daily-dairy-icon">
              <div className="dairy-3">
                <IconFeatherBook path17={iconFeatherBookProps.path17} path18={iconFeatherBookProps.path18} />
                <div className="diary-2 poppins-normal-star-dust-10px">{diary}</div>
              </div>
            </Link>
            <ADD />
            <div className="health-tip-2">
              <img className="icon-light_bulb-2" src={iconLight_Bulb} />
              <div className="health-tips-5 poppins-normal-black-10px">{healthTips2}</div>
            </div>
            <Link to="/menu-icon">
              <div className="menu-4">
                <img className="icon-metro-menu-2" src={iconMetroMenu} />
                <div className="menu-5 poppins-normal-star-dust-10px">{menu}</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="group-9-1 animate-enter34">
          <div className="overlap-group1-8" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <div className="can-alprazolam-help-depression-1 poppins-bold-black-18px">
              {canAlprazolamHelpDepression}
            </div>
            <p className="alprazolam-commonly-1 poppins-normal-black-15px">{alprazolamCommonly}</p>
            <div className="address-9 poppins-normal-black-15px">{address1}</div>
            <div className="flex-row-8">
              <img className="icon-heart-3" src={iconHeart} />
              <div className="path-container-17">
                <img className="path-26-3" src={path26} />
                <img className="path-27-3" src={path27} />
              </div>
              <img className="icon-bookmark-3" src={iconBookmark} />
            </div>
            <div className="flex-row-9 poppins-normal-black-18px">
              <div className="address-10">{address2}</div>
              <div className="address-11">{address3}</div>
              <div className="save-3">{save}</div>
            </div>
          </div>
          <img className="tablet-1-1" src={tablet1} />
        </div>
      </div>
    </div>
  );
}

export default HealthTipsIcon;
