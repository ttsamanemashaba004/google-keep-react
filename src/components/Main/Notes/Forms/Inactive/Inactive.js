import React from "react";
import "./Inactive.css";

const Inactive = ( {onInactiveFormClick, isInactiveFormClick}) => {
  
  return (
    <form className={`take-a-note inactive-form ${isInactiveFormClick? "disappear": ""}`}>
      <input type="text" placeholder="Take a note..." onClick={onInactiveFormClick} />
      <div className="material-symbols-outlineds take tooltipmain">
        <span className="material-symbols-outlined">check_box</span>
        <span className="tooltip-inactive-form">New list</span>
      </div>
      <div className="material-symbols-outlineds take tooltipmain">
        <span className="material-symbols-outlined">brush</span>
        <span className="tooltip-inactive-form-with-drawing">
          New note with drawing
        </span>
      </div>
      <div className="material-symbols-outlineds images take tooltipmain">
        <span className="material-symbols-outlined image">image </span>
        <span className="tooltip-inactive-form-with-drawing">
          New note with image
        </span>
      </div>
    </form>
  );
};

export default Inactive;
