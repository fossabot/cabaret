import React from 'react'

import LandingPageContainer from '../components/Containers/LandingPageContainer';

const IndexPage = ({ data: { site: { siteMetadata: metadata } } }) => (
  <div>
    <LandingPageContainer metadata={metadata} />
  </div>
);

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
