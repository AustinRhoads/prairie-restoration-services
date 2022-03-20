import React from 'react'
import { Link } from 'react-router-dom'

export default function MainDropDown(props) {


  return (
    <div id="main-drop-down" className='preloaded'>
            <Link id="menu-home-link" onClick={() => props.select_i_ching()} className="menu-link" to="/" >Home</Link>
            <Link onClick={() => props.select_i_ching()} className="menu-link" to="/services">Services</Link>
            <Link onClick={() => props.select_i_ching()} className="menu-link" to="/research">Research</Link>
            <Link onClick={() => props.select_i_ching()} className="menu-link" to="/news">In the News</Link>
            <Link onClick={() => props.select_i_ching()} className="menu-link" to="/contact">Contact</Link>    
    </div>
  )
}
