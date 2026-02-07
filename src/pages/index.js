import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'
import "../styles/components.css"

const IndexPage=()=>{
  return(
    <Layout>
      <div className="normal-page">
        <h1> This area is for a bulltin which displays the latest posts</h1>
      </div>
     
    </Layout>
  ) 
}


export const Head = () => <Seo title="Home Page" />

export default IndexPage
