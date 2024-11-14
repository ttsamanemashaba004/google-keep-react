import React from "react";
import "./SingleNote";

const SingleNote = ({ note, openModal }) => {
  return (
    <div className="note-container" onClick={() => openModal(note)}>
      <span className="material-symbols-outlined tick">check_circle</span>
      <span className="note-titles">{note.title}</span>
      <span className="note-texts">{note.text}</span>
      <div className="note-footer">
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
          <span className="material-symbols-outlined image tooltipmain2">
            more_vert
          </span>
          <span className="tooltip-active-form">More</span>
        </div>
      </div>
    </div>
  );
};

export default SingleNote;
