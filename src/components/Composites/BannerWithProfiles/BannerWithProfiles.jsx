import React, { Component } from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

import Profile from '../../Elements/Profile/Profile'

import './BannerWithProfiles.scss'

const classPrefix = 'banner-profile'

export default class BannerWithProfiles extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  getSettings = () => {
    const responsive = [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 922,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ]

    return {
      className: 'banner-profile',
      infinite: true,
      lazyLoad: true,
      arrows: true,
      dots: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive,
    }
  }

  renderSlides = () => {
    const { items } = this.props
    return items.map((item, index) => {
      return <Profile slider profile={item} key={index} />
    })
  }
  render() {
    const settings = this.getSettings()
    return <Slider {...settings}>{this.renderSlides()}</Slider>
  }
}
