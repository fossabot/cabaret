import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OwlCarousel from 'react-owl-carousel'

// Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import './Slider.scss'

export default class Slider extends Component {
  static propTypes = {
    slides: PropTypes.array.isRequired,
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
    responsive: {},
    autoplay: false,
    autoplayHoverPause: false,
    lazy: false,
    loop: false,
    nav: false,
    dots: false,
  }

  render() {
    const {
      slides,
      autoplay,
      autoplayHoverPause,
      lazy,
      loop,
      nav,
      dots,
      responsive,
      classes,
    } = this.props

    return (
      <OwlCarousel
        className="slider"
        autoplay={autoplay}
        autoplayHoverPause={autoplayHoverPause}
        loop={loop}
        nav={nav}
        dots={dots}
        lazyLoad={lazy}
        lazyContent={lazy}
        navElement="div"
        navText={[null, null]}
        navContainerClass="slider__nav"
        navClass={['slider__nav-arrow --prev', 'slider__nav-arrow --next']}
        dotsClass="slider__dots"
        dotClass="slider__dot-item"
        responsive={responsive}
        {...classes}>
        {slides}
      </OwlCarousel>
    )
  }
}
