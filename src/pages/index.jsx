import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import LandingPageContainer from '../components/Containers/LandingPageContainer'

const IndexPage = ({
  data: {
    site: { siteMetadata: metadata },
  },
}) => (
  <Layout noHeader>
    <LandingPageContainer metadata={metadata} />
  </Layout>
)

export const query = graphql`
  query LaunchDateQuery {
    site {
      siteMetadata {
        launchDate
      }
    }
  }
`

export default IndexPage
