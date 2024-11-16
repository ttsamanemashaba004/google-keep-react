import React from "react";
import "./Active.css";

const Active = ({
  isActiveFormClosed,
  setTitle,
  setText,
  title,
  text,
  handleClose,
  handleCloseButton
}) => {
  return (
    <form
      className={`take-a-note active-form ${
        isActiveFormClosed ? "appear" : ""
      }`}
      id="active-form"
    >
      <div className="title-div tooltipmain">
        <input
          id="note-title"
          className="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span className="material-symbols-outlined tooltipmain2">keep</span>
        <span className="tooltip-pin-note">Pin note</span>
      </div>
      <input
        id="note-text"
        className="note"
        type="text"
        placeholder="Take a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="bottom-section">
        <div className="bottom-icons">
          <div className="act tooltipmain">
            <span className="material-symbols-outlined tooltipmain2">
              add_alert
            </span>
            <span className="tooltip-active-form">Remind me</span>
          </div>
          <div className="act tooltipmain">
            <span className="material-symbols-outlined tooltipmain2">
              person_add
            </span>
            <span className="tooltip-active-form">Collaborator</span>
          </div>
          <div className="act tooltipmain">
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
          <div className="act tooltipmain">
            <span className="material-symbols-outlined image tooltipmain2">
              archive
            </span>
            <span className="tooltip-active-form">Archive</span>
          </div>
          <div className="act tooltipmain">
            <span className="material-symbols-outlined image tooltipmain2">
              more_vert
            </span>
            <span className="tooltip-active-form">More</span>
          </div>
          <div className="act tooltipmain">
            <span className="material-symbols-outlined image tooltipmain2">
              undo
            </span>
            <span className="tooltip-active-form">Undo</span>
          </div>
          <div className="act tooltipmain">
            <span className="material-symbols-outlined image tooltipmain2">
              redo
            </span>
            <span className="tooltip-active-form">Redo</span>
          </div>
        </div>
        <div className="close-btn">
          <button id="closebtn" onClick={handleCloseButton}>Close</button>
        </div>
      </div>
    </form>
  );
};

export default Active;
