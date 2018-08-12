import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OwlCarousel from 'react-owl-carousel'

import { Grid, Row, Col } from '../../Elements/Grid'
import Slider from '../../Slider/Slider'
import Profile from '../../Elements/Profile/Profile'

import './BannerWithProfiles.scss'

const classPrefix = 'banner-profile'

export default class BannerWithProfiles extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  renderSlider = () => {
    const slides = this.renderSlides()

    const responsive = {
      0: {
        items: 1,
        dots: false,
      },

      576: {
        items: 3,
      },

      992: {
        items: 5,
      },
    }

    return <Slider loop nav lazyLoad slides={slides} responsive={responsive} />
  }

  renderSlides = () => {
    const { items } = this.props
    return items.map((item, index) => {
      return (
        <Col className={`col ${classPrefix}__item`} key={index}>
          <Profile slider profile={item} />
        </Col>
      )
    })
  }
  render() {
    return (
      <Grid fluid className={classPrefix}>
        <Row className={`${classPrefix}__carousel`}>{this.renderSlider()}</Row>
      </Grid>
    )
  }
}
