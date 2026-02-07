import React,{useState}  from "react"
import { Link } from "gatsby"

import  "../styles/components.css"


const Footer = () => {
  return (
    <footer className="footer">
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer


