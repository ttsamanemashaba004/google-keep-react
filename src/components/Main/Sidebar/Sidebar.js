import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="notes icon notes-icons">
        <span className="material-symbols-outlined active">lightbulb</span>
        <span className="text text-appear">Notes</span>
      </div>
      <div className="reminder icon icon-not-active">
        <span className="material-symbols-outlined menu">notifications</span>
        <span className="text text-appear">Reminders</span>
      </div>
      <div className="edit icon icon-not-active">
        <span className="material-symbols-outlined menu">edit</span>
        <span className="text text-appear">Edit labels</span>
      </div>
      <div className="archive icon icon-not-active">
        <span className="material-symbols-outlined menu">archive</span>
        <span className="text text-appear">Archive</span>
      </div>
      <div className="delete icon icon-not-active">
        <span className="material-symbols-outlined menu">delete</span>
        <span className="text text-appear">Bin</span>
      </div>
    </div>
  );
};

export default Sidebar;
