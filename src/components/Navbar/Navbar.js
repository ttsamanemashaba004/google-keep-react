import React from 'react'
import './Navbar.css'
import Left from './Left/LeftSide'
import Middle from './Middle/MiddleSide'
import Right from './RightSide/RightSide'

const Navbar = () => {
  return (
    <nav id='navigator'>
      <Left />
      <Middle />
      <Right />
    </nav>
  )
}

export default Navbar