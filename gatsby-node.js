/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const { graphql } = require('gatsby')

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async ({ graphql, actions  }) => {
  const { createPage } = actions

  // blog post pages
  const blogPostResults=await graphql(`
    query MyQuery {
      allMarkdownRemark(filter: {frontmatter: {category: {eq: "blog post"}}}) {
        nodes {
          id
          frontmatter {
            title
            date
            slug
            category
            hero_image {
              childrenImageSharp {
                gatsbyImageData
              }
            }
            hero_image_alt
          }
        }
      }
    }
  `)

  if (blogPostResults.errors) {
    throw blogPostResults.errors
  }
  
  blogPostResults.data.allMarkdownRemark.nodes.map(({id,frontmatter})=>{
    createPage({
      path: `/blog/${frontmatter.slug}`,
      component: require.resolve("./src/templates/md-layout.js"),
      context: {id:id},
    })
  })
  


  // resume page
  const resumeResult=await graphql(`
    query AllResumePosts {
      markdownRemark(frontmatter: {category: {eq: "resume"}}) {
        id 
        frontmatter {
          title
          date
          slug
          category
        }
        html
      }
    }
  `)
  if (resumeResult.errors) {
    throw result.errors
  }
  
  createPage({
    path: "/about/resume",
    component: require.resolve("./src/templates/md-layout.js"),
    context: {id:resumeResult.data.markdownRemark.id},

  })

  //dsg page
  createPage({
    path: "/using-dsg2",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
