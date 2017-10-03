import React from 'react'
import  { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <div className="navbar">
      <Link to="/messages" className="button">Open App</Link>
    </div>
  )
}

export default Navbar