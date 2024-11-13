import React from 'react'
import './Notes'
import Forms from './Forms/Forms'
import Note from './Note/Note'
import NoteImage from './NoteImage/NoteImage'
import Modal from './Modal/Modal'

const Notes = () => {
  return (
    <div className='note-section'>
      <Forms />
      <Note />
      <NoteImage />
      <Modal />


    </div>
  )
}

export default Notes