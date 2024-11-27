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
        onMouseEnter={openSidebar}
        onMouseOut={closeSidebar}
      >
        <span
          className={`material-symbols-outlined ${
            isExpanded || isSidebarOpen ? "" : "active"
          }`}
          onMouseEnter={openSidebar}
          onMouseOut={closeSidebar}
        >
          lightbulb
        </span>
        <span
          className={`text ${isExpanded || isSidebarOpen ? "" : "text-appear"}`}
          onMouseEnter={openSidebar}
          onMouseOut={closeSidebar}
        >
          Notes
        </span>
      </div>
      <div
        className="reminder icon icon-not-active"
        onMouseEnter={openSidebar}
        onMouseOut={closeSidebar}
      >
        <span
          className="material-symbols-outlined"
          onMouseEnter={openSidebar}
          onMouseOut={closeSidebar}
        >
          notifications
        </span>
        <span
          className={`text ${isExpanded || isSidebarOpen ? "" : "text-appear"}`}
          onMouseEnter={openSidebar}
          onMouseOut={closeSidebar}
        >
          Reminders
        </span>
      </div>
      <div
        className="edit icon icon-not-active"
        onMouseEnter={openSidebar}
        onMouseOut={closeSidebar}
      >
        <span
          className="material-symbols-outlined"
          onMouseEnter={openSidebar}
          onMouseOut={closeSidebar}
        >
          edit
        </span>
        <span
          className={`text ${isExpanded || isSidebarOpen ? "" : "text-appear"}`}
          onMouseEnter={openSidebar}
          onMouseOut={closeSidebar}
        >
          Edit labels
        </span>
      </div>
      <div
        className="archive icon icon-not-active"
        onMouseEnter={openSidebar}
        onMouseOut={closeSidebar}
      >
        <span
          className="material-symbols-outlined"
          onMouseEnter={openSidebar}
          onMouseOut={closeSidebar}
        >
          archive
        </span>
        <span
          className={`text ${isExpanded || isSidebarOpen ? "" : "text-appear"}`}
          onMouseEnter={openSidebar}
          onMouseOut={closeSidebar}
        >
          Archive
        </span>
      </div>
      <div
        className="delete icon icon-not-active"
        onMouseEnter={openSidebar}
        onMouseOut={closeSidebar}
      >
        <span
          className="material-symbols-outlined"
          onMouseEnter={openSidebar}
          onMouseOut={closeSidebar}
        >
          delete
        </span>
        <span
          className={`text ${isExpanded || isSidebarOpen ? "" : "text-appear"}`}
          onMouseEnter={openSidebar}
          onMouseOut={closeSidebar}
        >
          Bin
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
