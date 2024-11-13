import React from "react";
import './RightSide.css';

const RightSide = () => {
  return (
    <div className="right-side">
      <div className="apps right tooltipmain">
        <span className="material-symbols-outlined">apps</span>
        <span className="tooltip-google">Google apps</span>
      </div>
      <div className="profile right">
        <span className="material-symbols-outlined">account_circle</span>
      </div>
    </div>
  );
};

export default RightSide;
