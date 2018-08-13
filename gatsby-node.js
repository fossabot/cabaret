/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/* eslint-disable */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const resolveEscortUrl = (slug) => `/acompanhante${slug}`

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    createNodeField({
      node,
      name: 'url',
      value: resolveEscortUrl(slug),
    })
  }
}

const slugQuery = `
{
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}`

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve) => {
    graphql(slugQuery).then((result) => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { slug } = node.fields
        createPage({
          path: resolveEscortUrl(slug),
          component: path.resolve('./src/templates/profile.jsx'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug,
          },
        })
      })
      resolve()
    })
  })
}
