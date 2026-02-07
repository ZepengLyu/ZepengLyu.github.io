import React,{useState}  from "react"
import { Link } from "gatsby"

import  "../styles/components.css"

const Header = () => {
  return (
    <header className="header"> 
      <nav className="nav">
        <menu className="menu">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/blog'>blog</Link></li>
            <li><Link to='/blog'><em>literature</em></Link></li>
            <li><Link to='/blog'><em>repo</em></Link></li>
        </menu>
      </nav>
    </header>
  )
}

export default Header


