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
  const [notes, setNotes] = useState([]);

  const addNote = (title, text) => {
    const newNote = {
      id: notes.length + 1,
      title,
      text,
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const updateNote = (id, updatedTitle, updatedText) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) =>
        note.id === id
          ? { ...note, title: updatedTitle, text: updatedText }
          : note
      );
    });
  };

  const deleteNote = (id) => {
    console.log("hekk3");
    console.log("notes now", notes);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    console.log("notes after", notes);
  };

  const openModal = (note) => {
    setIsModalOpen(true);
    setSelectedNote(note);
  };

  const closeModal = (e) => {
    if (e.target.className === "preventsubmit") {
      
      e.preventDefault();
    }
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  

  return (
    <div className="note-section">
      <Forms addNote={addNote} />
      <Note openModal={openModal} notes={notes} deleteNote={deleteNote} />
      <NoteImage />
      {isModalOpen && (
        <Modal
          note={selectedNote}
          closeModal={closeModal}
          updateNote={updateNote}
          
        />
      )}
    </div>
  );
};

export default Notes;
