import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col } from '../../Elements/Grid'
import Slider from '../../Slider/Slider'
import Profile from '../../Elements/Profile/Profile'

import './ProfileGrid.scss'

const classPrefix = 'profile-grid'

export default class ProfileGrid extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.any,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
  }

  static defaultProps = {
    title: undefined,
    xs: 6,
    sm: 4,
    md: 3,
    lg: 2,
  }

  renderTitle = () => {
    const { title } = this.props
    if (!title) return null

    return <Col sm={12}>{title}</Col>
  }

  renderProfiles = () => {
    const { items, ...rest } = this.props

    return items.map((profile, index) => {
      return (
        <Col className={`${classPrefix}__item`} {...rest} key={index}>
          <Profile profile={profile} />
        </Col>
      )
    })
  }

  render() {
    return (
      <Grid className={classPrefix}>
        <Row>
          {this.renderTitle()}
          {this.renderProfiles()}
        </Row>
      </Grid>
    )
  }
}
