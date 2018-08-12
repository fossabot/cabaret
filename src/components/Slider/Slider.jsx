import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SlickSlider from 'react-slick'

const data = [
  'http://placehold.it/362x536',
  'http://placehold.it/362x536',
  'http://placehold.it/362x536',
  'http://placehold.it/362x536',
]

import { Grid, Row, Col } from '../Elements/Grid'
// import './Slider.scss'

export default class Slider extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    classes: PropTypes.shape({
      navContainerClass: PropTypes.string,
      navClass: PropTypes.string,
      dotClass: PropTypes.string,
      dotsClass: PropTypes.string,
    }),
    responsive: PropTypes.object,
    autoplay: PropTypes.bool,
    autoplayHoverPause: PropTypes.bool,
    lazy: PropTypes.bool,
    loop: PropTypes.bool,
    nav: PropTypes.bool,
    dots: PropTypes.bool,
  }

  static defaultProps = {
    responsive: [],
    autoplay: false,
    autoplayHoverPause: false,
    lazy: false,
    loop: false,
    nav: false,
    dots: false,
  }

  render() {
    const { children, responsive } = this.props

    const settings = {
      className: 'slider row',
      infinite: true,
      responsive: responsive,
    }

    return <SlickSlider {...settings}>{children}</SlickSlider>
  }
}
