import React from "react";
import { OtherProfile } from "./OtherProfile";

const Popup = props => {
  return (
    <div className="PopupBox">
      <div className="PopupData">
        <h1 className="PopupTitle"> Followers </h1>
        <span className="PopupClose" onClick={props.handleClose}></span>
        {/* {props.content} */}
        <OtherProfile/ >
        <OtherProfile/ >
        <OtherProfile/ >
        <OtherProfile/ >
        <OtherProfile/ >
        <OtherProfile/ >
        <OtherProfile/ >
        <OtherProfile/ >
        <OtherProfile/ >
        <OtherProfile/ >
        <OtherProfile/ >
        <OtherProfile/ >
        <OtherProfile/ >
        <OtherProfile/ >
        <OtherProfile/ >
      
      </div>
    </div>
  );
};

export default Popup;