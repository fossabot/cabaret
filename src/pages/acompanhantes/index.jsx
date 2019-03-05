import React from 'react'
import { graphql } from 'gatsby'

import EscortsPageContainer from '../../components/Containers/EscortsPageContainer'
import Layout from '../../components/Layout'

const MapData = (data) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  return edges.map((nodes) => {
    const {
      node: {
        frontmatter,
        fields: { url },
      },
    } = nodes
    return {
      ...frontmatter,
      hasWhatsapp: frontmatter.whatsapp,
      hasVideo: frontmatter.video,
      cover: frontmatter.image,
      url,
    }
  })
}

const Acompanhantes = ({ data = {} }) => (
  <Layout>
    <EscortsPageContainer escorts={MapData(data)} />
  </Layout>
)

export default Acompanhantes

export const query = graphql`
  query AllProfiles {
    allMarkdownRemark {
      edges {
        node {
          fields {
            url
          }
          frontmatter {
            name
            phone
            image
            cover
            video
            whatsapp
            vip
            new
            checked
          }
        }
      }
    }
  }
`
