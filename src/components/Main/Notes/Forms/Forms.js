import React, { useState } from "react";
import "./Forms.css";
import Inactive from "./Inactive/Inactive";
import Active from "./Active/Active";

const Forms = ({addNote}) => {
  const [isActiveForm, setIsActiveForm] = useState(false); // State used to bring out active form and close active form

  const [title, setTitle] = useState(""); // States used to clear title and text in our active form
  const [text, setText] = useState(""); // States used to clear title and text in our active form

  const clearInputs = () => {
    //Function to clear the inputs of active form
    setTitle("");
    setText("");
  };

  const handleFormClick = () => {
    //Function to show active form when inactive form is clicked
    setIsActiveForm(true);
  };

  const handleClose = (e) => {
    //Function to close active form.
    if(title || text){
      addNote(title, text);
    }
    clearInputs();
    e.preventDefault();
    setIsActiveForm(false);
  };

  return (
    <>
      <Inactive
        onInactiveFormClick={handleFormClick}
        isInactiveFormClick={isActiveForm}
      />
      <Active
        onFormClose={handleClose}
        isActiveFormClosed={isActiveForm}
        setTitle={setTitle}
        setText={setText}
        title={title}
        text={text}
      />
    </>
  );
};

export default Forms;
