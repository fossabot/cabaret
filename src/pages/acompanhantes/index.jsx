import React from 'react'

import EscortsPageContainer from '../../components/Containers/EscortsPageContainer'

const MapData = (data) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  return edges.map((nodes) => {
    console.log(nodes)
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

const Acompanhantes = ({ data }) => <EscortsPageContainer escorts={MapData(data)} />

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
