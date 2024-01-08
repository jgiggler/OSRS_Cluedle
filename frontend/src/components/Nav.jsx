import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  
  
  return (
    <nav className='NavBar'>
        
        <Link to="/" className='NavBarChild child-1' onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/item" className='NavBarChild child-2' onClick={() => setIsOpen(false)}>Items</Link>
        {/* <Link to="/items">Items</Link>
        <Link to="/monsters">Monsters</Link> */}
    </nav>
  );
}

export default Nav;
