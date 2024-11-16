import React, { useState } from "react";
import "./SingleNote.css";

const SingleNote = ({ note, openModal, deleteNote }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isTick, setIsTick] = useState(false)

  const handleDelete = (e) => {
    console.log("hekk")
    e.stopPropagation();
    deleteNote(note.id);
    console.log("hekk2")
    setIsMenuOpen(false);
    document.removeEventListener("mousedown", handleDocumentClick);
  };

  const handleDocumentClick = (event) => {
    if (
      !event.target.closest(".popup-menu") &&
      !event.target.closest(".footer-icon")
    ) {
      setIsMenuOpen(false);
      document.removeEventListener("mousedown", handleDocumentClick);
    }
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      document.removeEventListener("mousedown", handleDocumentClick);
    } else {
      setIsMenuOpen(false);
      document.removeEventListener("mousedown", handleDocumentClick);
    }
  };

  const handleMouseOver = () => {
    setIsMouseOver(true)
    setIsTick(true)
  }

  const handleMoveOut = () => {
    setIsMouseOver(false)
    setIsTick(false)
  }

 

  return (
    <div className="note-container" onClick={() => openModal(note)} onMouseEnter={handleMouseOver} onMouseLeave={handleMoveOut}>
      <span className={`material-symbols-outlined tick ${isTick ? "visible" : "hidden"}`}>check_circle</span>
      <span className="note-titles" onMouseEnter={handleMouseOver} onMouseLeave={handleMoveOut}>{note.title}</span>
      <span className="note-texts" onMouseEnter={handleMouseOver} onMouseLeave={handleMoveOut}>{note.text}</span>
      <div className={`note-footer ${isMouseOver ? "visible" : "hidden"}`}>
        <div className=" act tooltipmain">
          <span className="material-symbols-outlined tooltipmain2">
            add_alert
          </span>
          <span className="tooltip-active-form ">Remind me</span>
        </div>
        <div className="act tooltipmain">
          <span className="material-symbols-outlined tooltipmain2">
            person_add
          </span>
          <span className="tooltip-active-form ">Collaborator</span>
        </div>
        <div className=" act tooltipmain">
          <span className="material-symbols-outlined image tooltipmain2">
            palette
          </span>
          <span className="tooltip-active-form">Background options</span>
        </div>
        <div className="act tooltipmain">
          <span className="material-symbols-outlined image tooltipmain2">
            image
          </span>
          <span className="tooltip-active-form">Add image</span>
        </div>
        <div className="act tooltipmain archive">
          <span className="material-symbols-outlined image tooltipmain2">
            archive
          </span>
          <span className="tooltip-active-form">Archive</span>
        </div>
        <div className="act tooltipmain">
          <span
            className="material-symbols-outlined image tooltipmain2"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu(e);
            }}
          >
            more_vert
          </span>
          <span className="tooltip-active-form">More</span>
        </div>
        { isMenuOpen && (
        <div className="popup-menu" >
          <button onClick={handleDelete}>Delete Note</button>
          <button>Add label</button>
          <button>Add drawing</button>
          <button>Make a copy</button>
          <button>Show tick boxes</button>
          <button>Copy to Google Docs</button>
          <button>Version History</button>
        </div>
        )}
      </div>
    </div>
  );
};

export default SingleNote;
