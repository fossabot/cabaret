import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]')
}

import { Grid, Row, Col } from '../../../../components/Elements/Grid'
import Icon from '../../../Elements/Icon/Icon'
import Link from '../../../Elements/Link/Link'

export default class FeaturedBanner extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      profile: PropTypes.object.isRequired,
    }).isRequired,
  }

  render() {
    const {
      data: {
        cover,
        name,
        phone,
        profile: { age, feet, height, weight },
      },
    } = this.props

    return (
      <Grid fluid>
        <Row
          style={{ backgroundImage: `url("${cover}")` }}
          className="featured-banner justify-content-md-center align-items-center">
          <Col sm={6}>
            <div className="featured-banner__title">
              <h1>{name}</h1>
              <h3>{phone}</h3>
              <p className="h6">
                {age} anos | {height} m | {weight} kg | Pés {feet}
              </p>
              <p>Ao ligar para ela, diga que viu o anúncio no Cabare Club.</p>
            </div>
          </Col>
          <Link className="featured-banner__see-profile" to={'#profile-interaction'}>
            VER PERFIL <Icon name="angle-double-down" />
          </Link>
        </Row>
      </Grid>
    )
  }
}
