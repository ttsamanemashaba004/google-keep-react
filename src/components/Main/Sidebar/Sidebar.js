import React from "react";
import "./Sidebar.css";

const Sidebar = ( {isExpanded }) => {
  console.log('Is expanded?', isExpanded);
  return (
    <div className={`side-bar ${isExpanded ? "expanded sidebar-hover" : ""}`}>
      <div className={`notes icon notes-icons ${isExpanded ? "active-lightbulb" : ""}`}>
        <span className={`material-symbols-outlined ${isExpanded ? "" : "active"}`}>lightbulb</span>
        <span className={`text ${isExpanded ? "" : "text-appear"}`}>Notes</span>
      </div>
      <div className="reminder icon icon-not-active">
        <span className="material-symbols-outlined">notifications</span>
        <span className={`text ${isExpanded ? "" : "text-appear"}`}>Reminders</span>
      </div>
      <div className="edit icon icon-not-active">
        <span className="material-symbols-outlined">edit</span>
        <span className={`text ${isExpanded ? "" : "text-appear"}`}>Edit labels</span>
      </div>
      <div className="archive icon icon-not-active">
        <span className="material-symbols-outlined">archive</span>
        <span className={`text ${isExpanded ? "" : "text-appear"}`}>Archive</span>
      </div>
      <div className="delete icon icon-not-active">
        <span className="material-symbols-outlined">delete</span>
        <span className={`text ${isExpanded ? "" : "text-appear"}`}>Bin</span>
      </div>
    </div>
  );
};

export default Sidebar;
