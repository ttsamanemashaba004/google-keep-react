import React from 'react'
import './NoteImage.css'

const NoteImage = () => {
  return (
    <div className="notes-that-you-added-appear-hear">
        <div className="note-light">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"
              ></path>
            </svg>
          </div>
          <div className="note-text">
            <span>Notes that you add appear here</span>
          </div>
    </div>
  )
}

export default NoteImage