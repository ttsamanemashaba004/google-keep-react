import React, { useState } from "react";
import "./Forms.css";
import Inactive from "./Inactive/Inactive";
import Active from "./Active/Active";

const Forms = ({ addNote }) => {
  const [isActiveForm, setIsActiveForm] = useState(false); // State used to bring out active form and close active form

  const [title, setTitle] = useState(""); // States used to clear title and text in our active form
  const [text, setText] = useState(""); // States used to clear title and text in our active form

  const clearInputs = () => {
    //Function to clear the inputs of active form
    setTitle("");
    setText("");
  };

  const handleFormClick = () => {
    setIsActiveForm(true);

    setTimeout(() => {
      const titleInput = document.getElementById("note-title");
      if (titleInput) {
        titleInput.focus();
      }
    }, 0);
    document.addEventListener("mousedown", handleDocumentClick);
  };

  const handleDocumentClick = (event) => {
    console.log("heard event");
    if (!event.target.closest(".active-form")) {
      handleClose();
    }
  };

  const handleCloseButton = (event) => {
    event.preventDefault();
    const currentTitle = document.getElementById("note-title")?.value || "";
    const currentText = document.getElementById("note-text")?.value || "";

    if (currentTitle || currentText) {
      addNote(currentTitle, currentText);
    }
    clearInputs();

    setIsActiveForm(false);

    document.removeEventListener("mousedown", handleDocumentClick);
  };

  const handleClose = () => {
    const currentTitle = document.getElementById("note-title")?.value || "";
    const currentText = document.getElementById("note-text")?.value || "";

    if (currentTitle || currentText) {
      addNote(currentTitle, currentText);
    }
    clearInputs();

    setIsActiveForm(false);

    document.removeEventListener("mousedown", handleDocumentClick);
  };

  return (
    <>
      <Inactive
        onInactiveFormClick={handleFormClick}
        isInactiveFormClick={isActiveForm}
      />
      <Active
        isActiveFormClosed={isActiveForm}
        setTitle={setTitle}
        setText={setText}
        title={title}
        text={text}
        handleClose={handleClose}
        handleCloseButton = {handleCloseButton}
      />
    </>
  );
};

export default Forms;
