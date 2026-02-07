import * as React from "react"

import Header from "./header"
import Footer from "./footer"
import  "../styles/components.css"

const Layout = ({children }) => {
  return (
    <>
      <Header/>
      <div className="main-div">
        <main className="main">{children}</main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
