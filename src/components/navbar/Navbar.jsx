import React, { useState } from 'react'
import './navbar.scss'

const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <nav>
      <div className="left">
        <a href='/' className='logo'>
            <img src="/logo.png" alt="Logo"/>
            <span>LamaEstate </span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div> 
      <div className="right">
        <a href="/">SignIn</a>
        <a className='register' href="/">SignUp</a>


        <div className="menuIcon">
          <img 
            src="/menu.png" 
            alt="" 
            onClick={() => setOpen((prev) => !prev)}
            />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">SignIn</a>
          <a href="/">SignUp</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
