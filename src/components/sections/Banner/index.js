import React from 'react'
import { Grid, Row, Col } from '../../Elements/Grid'
// import Scroll from 'react-scroll-to-element'

import Countdown from '../../Countdown'

import downArrow from '../../../../static/svgs/arrow.svg'

const BannerSection = ({data}) => (
  <section className="section landing__banner-section p-0">
    <Grid>
      <Row className="justify-content-center">
        <Col md={6} className="align-self-start text-center">
          <h1 className="brand__title text-hide">
            <span>Cabaret Acompanhantes de Luxo</span>
            <img src="/img/logo.png" alt="Cabaret Acompanhantes de Luxo." />
          </h1>
          <h2 className="brand__subtitle text-hide">Onde as calcinhas ficam no chão</h2>
        </Col>
        <Col md={12} className="align-self-center">
          <Countdown datetime={data.site.siteMetadata.launchDate} />
        </Col>
        <Col md={6} className="align-self-end text-center">
          {/* <Scroll type="class" element="about-section"> */}
            <button className="btn">
              <img src={downArrow} />
            </button>
          {/* </Scroll> */}
        </Col>
      </Row>
    </Grid>
  </section>
)

export default BannerSection
