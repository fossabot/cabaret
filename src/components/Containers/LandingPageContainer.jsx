import React from 'react'

import TitleAndMetaTags from '../TitleAndMetaTags';
import BannerSection from '../sections/Banner';
import AboutSection from '../sections/About';
import Newsletter from '../sections/Newsletter';
import ResponsiveSection from '../sections/Responsive';
import FeaturesSection from '../sections/Features';
import MosaicSection from '../sections/Mosaic';
import JoinSection from '../sections/Join';

const LandingPageContainer = ({ metadata: { launchDate } }) => (
  <div className="landing-page">
    <TitleAndMetaTags />
    <BannerSection datetime={launchDate} />
    <AboutSection />
    <Newsletter />
    <ResponsiveSection />
    <MosaicSection />
    <FeaturesSection />
    <JoinSection />
  </div>
);

export default LandingPageContainer;
