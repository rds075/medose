import React from "react";
import "./Group7.css";

function Group7(props) {
  const { path26, className } = props;

  return (
    <div className={`group-7 ${className || ""}`}>
      <div className="flex-col-4">
        <div className="when-to-consult-a-psychologist poppins-bold-black-18px">When to consult a Psychologist?</div>
        <p className="most-people-experien poppins-normal-black-15px">
          Most people experience some forms of
          <br />
          mental health problems during their life. But
          <br />
          you should know when to seek professional h...
        </p>
        <div className="address-3 poppins-normal-black-15px">08 Sep 2022</div>
      </div>
      <div className="flex-row-4">
        <div className="flex-col-5">
          <img className="icon-heart-1" src="/img/icon-ionic-ios-heart-empty-1@1x.png" />
          <div className="address-4 poppins-normal-black-18px">1354 Likes</div>
        </div>
        <div className="flex-col-6">
          <div className="path-container-8">
            <img className="path-26-1" src={path26} />
            <img className="path-27-1" src="/img/path-27-1@1x.png" />
          </div>
          <div className="address-5 poppins-normal-black-18px">401 Shares</div>
        </div>
        <div className="flex-col-7">
          <img className="icon-bookmark-1" src="/img/path-28-1@1x.png" />
          <div className="save-1 poppins-normal-black-18px">Save</div>
        </div>
      </div>
    </div>
  );
}

export default Group7;
