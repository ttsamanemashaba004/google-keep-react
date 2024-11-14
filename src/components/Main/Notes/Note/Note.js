import React, { useState } from "react";
import "./Note.css";
import SingleNote from "./SingleNote";

const Note = ({ openModal, notes }) => {
  
  return (
    <div className="notes-canvas">
      {notes.map((note) => (
        <SingleNote key={note.id} note={note} openModal={openModal} />
      ))}
    </div>
  );
};

export default Note;
