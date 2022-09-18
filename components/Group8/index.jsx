import React from "react";
import Group7 from "../Group7";
import "./Group8.css";

function Group8(props) {
  const { path26, group7Props } = props;

  return (
    <div className="group-8">
      <div className="flex-row-3 poppins-semi-bold-black-12px">
        <div className="flex-col-2">
          <img className="d_1-removebg-preview" src="/img/d-1-removebg-preview-1@1x.png" />
          <div className="schizophrenia">SCHIZOPHRENIA</div>
          <img className="d2-removebg-preview" src="/img/d2-removebg-preview-1@1x.png" />
          <div className="anxiety-disorder">ANXIETY DISORDER</div>
        </div>
        <div className="flex-col-3">
          <img className="d4-removebg-preview" src={path26} />
          <div className="depression">DEPRESSION</div>
          <img className="d3-removebg-preview" src="/img/d3-removebg-preview-1@1x.png" />
          <div className="post-traumatic-stress">POST-TRAUMATIC STRESS</div>
        </div>
      </div>
      <Group7 path26={group7Props.path26} />
    </div>
  );
}

export default Group8;
