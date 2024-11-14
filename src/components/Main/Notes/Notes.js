import React, { useState } from "react";
import "./Notes";
import Forms from "./Forms/Forms";
import Note from "./Note/Note";
import NoteImage from "./NoteImage/NoteImage";
import Modal from "./Modal/Modal";
import "./Notes.css";

const Notes = () => {
  // State to control the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState([
    { id: 1, title: "Sample title 1", text: "Sample text 1" },
    { id: 2, title: "Sample title 2", text: "Sample text 2" },
  ]);

  const addNote = (title, text) => {
    const newNote = {
      id: notes.length + 1,
      title,
      text
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }

  const openModal = (note) => {
    setIsModalOpen(true);
    setSelectedNote(note);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains("preventsubmit")) {
      e.preventDefault();
    }
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  return (
    <div className="note-section">
      <Forms addNote={addNote}/>
      <Note openModal={openModal} notes={notes} />
      <NoteImage />
      {isModalOpen && <Modal note={selectedNote} closeModal={closeModal} />}
    </div>
  );
};

export default Notes;
