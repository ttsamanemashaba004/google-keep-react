import React, { useState } from "react";
import "./Note.css";
import SingleNote from "./SingleNote";

const Note = ({ openModal, notes, deleteNote }) => {
  
  return (
    <div className="notes-canvas">
      {notes.map((note) => (
        <SingleNote key={note.id} note={note} openModal={openModal} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default Note;
