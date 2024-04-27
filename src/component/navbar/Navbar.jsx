import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Nav' >
        <div className='Nav-link'> 
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Protocol</a>
        <a href="#" className="nav-link">Docs</a> 
        </div>
      </div>
  );
}

export default Navbar;
