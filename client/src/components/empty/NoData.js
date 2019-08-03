import React from "react";
import "./NoData.css";

const NoData = ({ icon, title, text }) => (
  <div className="NoData">
    <i className={`${icon} f__r-both--cen`} />
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

export default NoData;
