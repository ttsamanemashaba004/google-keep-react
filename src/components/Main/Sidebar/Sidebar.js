import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ isExpanded }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div
      className={`side-bar ${
        isExpanded || isSidebarOpen ? "expanded sidebar-hover" : ""
      }`}
      onMouseEnter={openSidebar}
      onMouseOut={closeSidebar}
    >
      <div
        className={`notes icon notes-icons ${
          isExpanded || isSidebarOpen ? "active-lightbulb" : ""
        }`}
      >
        <span
          className={`material-symbols-outlined ${
            isExpanded || isSidebarOpen ? "" : "active"
          }`}
        >
          lightbulb
        </span>
        <span
          className={`text ${isExpanded || isSidebarOpen ? "" : "text-appear"}`}
        >
          Notes
        </span>
      </div>
      <div className="reminder icon icon-not-active">
        <span className="material-symbols-outlined">notifications</span>
        <span
          className={`text ${isExpanded || isSidebarOpen ? "" : "text-appear"}`}
        >
          Reminders
        </span>
      </div>
      <div className="edit icon icon-not-active">
        <span className="material-symbols-outlined">edit</span>
        <span
          className={`text ${isExpanded || isSidebarOpen ? "" : "text-appear"}`}
        >
          Edit labels
        </span>
      </div>
      <div className="archive icon icon-not-active">
        <span className="material-symbols-outlined">archive</span>
        <span
          className={`text ${isExpanded || isSidebarOpen ? "" : "text-appear"}`}
        >
          Archive
        </span>
      </div>
      <div className="delete icon icon-not-active">
        <span className="material-symbols-outlined">delete</span>
        <span
          className={`text ${isExpanded || isSidebarOpen ? "" : "text-appear"}`}
        >
          Bin
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
