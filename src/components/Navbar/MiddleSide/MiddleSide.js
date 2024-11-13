import React from "react";
import './MiddleSide.css';

const Middle = () => {
  return (
    <div className="middle-section">
      <form action="">
        <div className="search-button">
          <button>
            <span className="material-symbols-outlined">search</span>
          </button>
          <span className="tooltip">Search</span>
        </div>
        <div className="search-input">
          <input type="text" placeholder="Search" />
        </div>
      </form>
      <div className="search icons">
        <button>
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      <div className="refresh icons tooltipmain">
        <span className="material-symbols-outlined tooltipmain3">refresh</span>
        <span className="tooltip">Refresh</span>
      </div>
      <div className="list-view icons tooltipmain">
        <span className="material-symbols-outlined tooltipmain3">view_agenda</span>
        <span className="tooltip">List view</span>
      </div>
      <div className="setting icons tooltipmain">
        <span className="material-symbols-outlined tooltipmain3">settings</span>
        <span className="tooltip">Settings</span>
      </div>
    </div>
  );
};

export default Middle;
