import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Row, Col } from '../../../Elements/Grid'
import Icon from '../../../Elements/Icon/Icon'

const TABLE_VALUES = ['eyes', 'hair', 'height', 'weight', 'bust', 'hips', 'waist', 'feet']

import { translate as t } from '../../../../services/TransateService'

export default class ProfileInformationCard extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      profile: PropTypes.object.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
  }

  renderPhoto = () => {
    const { image, name } = this.props.data
    return (
      <figure className="profile-card__image">
        <img src={image} alt={name} />
      </figure>
    )
  }

  renderHeading = () => {
    const {
      name,
      phone,
      profile: { age },
    } = this.props.data
    return (
      <div>
        <h2>{t('profile.greetings', { name })}</h2>
        <h3 className="h6">{t('profile.age', { age })}</h3>
        <div className="profile-card__phone">
          <a href="#">
            {phone} <Icon name="whatsapp" />
          </a>
        </div>
      </div>
    )
  }

  renderInformationTable = () => {
    const { profile } = this.props.data
    return (
      <Row className="profile-card__table">
        {TABLE_VALUES.map((key) => (
          <Col xs={6} lg={3} className="profile-card__table-item" key={key}>
            <label>{t(key)}</label>
            <div className="tag">{profile[key] || '--'}</div>
          </Col>
        ))}
      </Row>
    )
  }

  render() {
    const { description } = this.props
    return (
      <Row className="profile-card">
        <Col xs={0} sm={3} className="d-none d-md-block">
          {this.renderPhoto()}
        </Col>
        <Col md={9} className="profile-card__information">
          {this.renderHeading()}
          <p dangerouslySetInnerHTML={{ __html: description }} />
          {this.renderInformationTable()}
        </Col>
      </Row>
    )
  }
}
