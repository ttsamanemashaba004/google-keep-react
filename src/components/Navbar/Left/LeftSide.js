import React from "react";
import './LeftSide.css';

const Left = ( {onMenuClick}) => {
  return (
    <div className="left-side">
      <div className="main-menu tooltipmain">
        <span className="material-symbols-outlined menu tooltipmain2" onClick={onMenuClick}>
          menu
        </span>
        <span className="tooltip">Main menu</span>
        <img
          className="note"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          srcSet="
    https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x,
    https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x
  "
          alt=""
          aria-hidden="true"
          role="presentation"
          style={{ width: "40px", height: "40px" }}
        />

        <span className="keep">Keep</span>
      </div>
    </div>
  );
};

export default Left;
