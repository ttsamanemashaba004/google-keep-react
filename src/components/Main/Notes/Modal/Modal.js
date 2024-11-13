import React from "react";
import "./Modal.css";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <form className="take-a-note active-form form-modal" id="modal-form">
          <div className="title-div tooltipmain title-grow">
            <input
              className="title"
              id="modal-title"
              type="text"
              placeholder="Title"
            />
            <span className="material-symbols-outlined tooltipmain2">keep</span>
            <span className="tooltip-pin-note">Pin note</span>
          </div>
          <input
            id="modal-text"
            className="note"
            type="text"
            placeholder="Take a note..."
          />

          <div className="edited-section">
            <span id="time">Edited 19:35</span>
          </div>
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
              <button id="modal-btn">Close</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
