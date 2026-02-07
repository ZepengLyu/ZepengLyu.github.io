import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const HeroImage=({image,imageAlt})=>{
  if (image){
    return(  
      <>
        <GatsbyImage
          image={image}
          alt={imageAlt} />
        <br/>
      </>
    )
  }
  return (
    <></>
  )
}

const MdLayout=({ data: { markdownRemark } })=> {
    const { frontmatter, html } = markdownRemark;
    const image = getImage(frontmatter.hero_image)

    return (
      <Layout>
        <div className="md">
        <HeroImage image={image} imageAlt={frontmatter.imageAlt}></HeroImage>
        <h1>{frontmatter.title}</h1>
        <date>{frontmatter.date}</date>
        <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      </Layout>
    );   
}

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
      }
      html
   }
  }
`

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />

export default MdLayout