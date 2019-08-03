import React from "react";
import "./Spinner.css";

function Spinner() {
  return (
    <div aria-hidden="true">
      <i className="fas fa-spinner f__r-both--cen spin" />
    </div>
  );
}

export default Spinner;
