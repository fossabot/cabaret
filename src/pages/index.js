import React from 'react'

import TitleAndMetaTags from '../components/TitleAndMetaTags';
import BannerSection from '../components/sections/Banner'
import AboutSection from '../components/sections/About'
import Newsletter from '../components/sections/Newsletter'
import ResponsiveSection from '../components/sections/Responsive'
import MosaicSection from '../components/sections/Mosaic'
import FeaturesSection from '../components/sections/Features'
import JoinSection from '../components/sections/Join'

const IndexPage = ({data}) => (
  <div className="landing-page">
    <TitleAndMetaTags />
    <BannerSection data={data} />
    <AboutSection/>
    <Newsletter />
    <ResponsiveSection />
    <MosaicSection />
    <FeaturesSection />
    <JoinSection />
  </div>
)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        launchDate
      }
    }
  }
`

export default IndexPage
