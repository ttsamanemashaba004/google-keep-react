import React from 'react'
import './Main.css'
import Sidebar from './Sidebar/Sidebar'
import Notes from './Notes/Notes'

const Main = () => {
  return (
    <div className='main-section'>
      <Sidebar />
      <Notes />


    </div>
  )
}

export default Main