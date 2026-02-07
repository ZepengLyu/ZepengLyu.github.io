import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import "../../styles/components.css"

const BlogIndexPage = ({ data }) => {
  return (
    
    <Layout>
      <div>
        {
          data.allMarkdownRemark.nodes.map((node)=>(
            <div className="abstract" key={node.id}>
              <h2>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <date>{node.frontmatter.date}</date>
              <p>{node.excerpt}</p>
            </div>
           )
          )
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {category: {eq: "blog post"}}}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
}
`
export const Head = () => <Seo title="Blogs" />

export default BlogIndexPage