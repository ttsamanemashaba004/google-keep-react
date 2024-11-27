import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";


const App = () => {

  // State to control the sidebars expanded view
  const [isSidebarExplanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () =>{
    setIsSidebarExpanded((prevState) => !prevState)
  }

  const parentElement = document.querySelector('.notes-canvas');

  if(parentElement){
    console.log(123)
    const numberOfChildren = parentElement.childElementCount;
    console.log(numberOfChildren)
  }
  

  

  return (
    <>
      <Navbar onMenuClick={toggleSidebar} />
      <Main isExpanded={isSidebarExplanded}/>
    </>
  );
};

export default App;
