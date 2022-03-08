import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <div id="nav-bar" >
        <div id="all-nav-links">
            <Link className="nav-link" to="/" >Home</Link>
            <Link className="nav-link" to="/services">Our Services</Link>
            <Link className="nav-link" to="/research">Our Reseaerch</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
        </div>
        
    </div>
  )
}
