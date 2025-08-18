import React from 'react'
import "../components/Navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
        <div>
       <img src="Logo.png" alt="Logo" /> 
       </div>
       <div>Accueil</div>
       <div>A propos</div>
    </nav>
  )
}

export default Navbar;