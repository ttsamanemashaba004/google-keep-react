import React from 'react'
import './Navbar.css'
import Left from './Left/LeftSide'
import Middle from './MiddleSide/MiddleSide'
import Right from './RightSide/RightSide'

const Navbar = ( {onMenuClick}) => {
  return (
    <nav id='navigator'>
      <Left onMenuClick = {onMenuClick}/>
      <Middle />
      <Right />
    </nav>
  )
}

export default Navbar