import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]')
}

import { Grid, Row, Col } from '../../../../components/Elements/Grid'
import Icon from '../../../Elements/Icon/Icon'
import Link from '../../../Elements/Link/Link'

export default class FeaturedBanner extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { styleCover: {} }
  }

  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      profile: PropTypes.object.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    this.getCoverBackgroundCss()
    window.addEventListener('resize', this.getCoverBackgroundCss)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getCoverBackgroundCss)
  }

  renderContent = ({ name, phone, age, height, weight, feet }) => (
    <Col sm={12} md={6}>
      <div className="featured-banner__title">
        <h1>{name}</h1>
        <p className="h4">{phone}</p>
        <p className="h6">
          {age} anos | {height} m | {weight} kg | Pés {feet}
        </p>
        <p>Ao ligar para ela, diga que viu o anúncio no Cabare Club.</p>
      </div>
    </Col>
  )

  renderLinkButton = () => (
    <Link className="featured-banner__see-profile " to={'#profile-interaction'}>
      VER PERFIL <Icon name="angle-double-down" />
    </Link>
  )

  getCoverBackgroundCss = () => {
    const { image, cover } = this.props.data
    const img = window.innerWidth <= 768 ? image : cover

    this.setState({
      styleCover: { backgroundImage: `url("${img}")` },
    })
  }

  render() {
    const {
      data: {
        name,
        phone,
        profile: { age, feet, height, weight },
      },
    } = this.props

    const { styleCover } = this.state

    return (
      <Grid fluid>
        <Row
          style={styleCover}
          className={`featured-banner justify-content-md-center align-items-center`}>
          {this.renderContent({ name, phone, age, feet, height, weight })}
          {this.renderLinkButton()}
        </Row>
      </Grid>
    )
  }
}
