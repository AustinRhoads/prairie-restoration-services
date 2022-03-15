import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <div id="nav-bar" >
      <Link id="home-link" className="" to="/" ><span>TEXAS</span><span className="make-it-green">HORNS</span></Link>
        <div id="all-nav-links">
            
            <Link className="nav-link" to="/services">Services</Link>
            <Link className="nav-link" to="/research">Research</Link>
            <Link className="nav-link" to="/news">In the News</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
        </div>
        
    </div>
  )
}
