import React, { Component } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import { Grid, Row, Col } from '../components/Elements/Grid'
import TitleAndMetaTags from '../components/TitleAndMetaTags'
import Page from '../components/Elements/Page/Page'
import Icon from '../components/Elements/Icon/Icon'
import GalleryImages from '../components/Composites/GalleryImages/GalleryImages'

import { multipleValuesBool } from '../utils'
import { translate as t } from '../services/TransateService'

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = { inView: false }
  }

  handleChange = (isVisible) => {
    this.setState({ inView: !isVisible })
  }

  renderImages = (images) => {
    return images.map((item, index) => (
      <Col sm={6} className="profile-page__thumb" key={index}>
        <img src={item} />
      </Col>
    ))
  }

  renderSocialNetwork = (data) => {
    const { social } = data
    // console.log('renderSocialNetwork', social);
    return null
  }

  renderProfile = (data) => {
    const { profile } = data

    const list = Object.entries(profile).map(([key, value]) => (
      <li key={key}>
        <strong>{t(key)}:</strong> {value}
      </li>
    ))

    return <ul>{list}</ul>
  }

  renderServices = (data) => {
    const { services } = data

    const list = Object.entries(services).map(([key, value]) => (
      <li key={key}>
        <strong>{t(key)}:</strong> {multipleValuesBool(value)}
      </li>
    ))

    return <ul>{list}</ul>
  }

  renderAditionalServices = (data) => {
    const { meets, locales, cities } = data

    const list = {
      cities: cities.join(', '),
    }

    list.meets = Object.entries(meets)
      .reduce((acc, [key, valid]) => {
        if (valid) acc.push(t(key))
        return acc
      }, [])
      .join(', ')

    list.locales = Object.entries(locales)
      .reduce((acc, [key, valid]) => {
        if (valid) acc.push(t(key))
        return acc
      }, [])
      .join(', ')

    return (
      <ul>
        <li>
          <strong>Atende:</strong> {list.meets}
        </li>
        <li>
          <strong>Locais:</strong> {list.locales}
        </li>
        <li>
          <strong>Cidades:</strong> {list.cities}
        </li>
      </ul>
    )
  }

  renderPricesAndPayments = (data) => {
    const { prices, payment } = data
    console.log('renderPricesAndPayments', prices, payment)
    const list = {}

    list.prices = Object.entries(prices)
      .reduce((acc, [key, valid]) => {
        if (valid) acc.push(t(key))
        return acc
      }, [])
      .join(', ')

    list.payment = Object.entries(payment)
      .reduce((acc, [key, valid]) => {
        if (valid) acc.push(t(key))
        return acc
      }, [])
      .join(', ')

    return (
      <ul>
        <li>
          <strong>Cache:</strong> {list.prices || 'À Combinar'}
        </li>
        <li>
          <strong>Forma de Pagamento:</strong> {list.payment}
        </li>
      </ul>
    )
  }

  render() {
    const {
      data: {
        markdownRemark: { html: description, frontmatter: profile },
      },
    } = this.props
    // console.log(profile)

    return (
      <Page className="profile-page">
        <TitleAndMetaTags
          title={profile.name}
          description={description}
          location={profile.city}
          cover={profile.cover}
        />
        {this.state.inView && (
          <div className="profile-page__floating">
            <Icon name="whatsapp" className="profile-page__floating-icon" />
            <div className="profile-page__floating-info">
              <span>{profile.name}</span>
              <span className="phone">{profile.phone}</span>
            </div>
          </div>
        )}
        <Grid fluid componentClass="section">
          <Row
            style={{ backgroundImage: `url("${profile.cover}")` }}
            className="profile-page__cover justify-content-md-center align-items-center">
            <Col sm={6}>
              <VisibilitySensor onChange={this.handleChange} partialVisibility scrollThrottle={0}>
                <div className="profile-page__title">
                  <h1>{profile.name}</h1>
                  <h3>{profile.phone}</h3>
                  <p>Ao ligar para ela, diga que viu o anúncio no Cabare Club.</p>
                </div>
              </VisibilitySensor>
            </Col>
          </Row>
        </Grid>
        <Grid className="profile-page__content">
          <Row>
            <Col sm={6}>
              <GalleryImages images={profile.gallery} />
            </Col>
            <Col sm={6}>
              <h1 className="page__subtitle">{profile.name}</h1>

              <div dangerouslySetInnerHTML={{ __html: description }} />

              {this.renderProfile(profile)}

              <h3 className="page__subtitle">O que Faço?</h3>
              {this.renderServices(profile)}

              <h3 className="page__subtitle">Como atendo</h3>
              {this.renderAditionalServices(profile)}

              <h3 className="page__subtitle">Quanto</h3>
              {this.renderPricesAndPayments(profile)}
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="text-center">
              <p>Possuo um total de</p>
              <div className="profile-page__counter">
                <h3>{profile.views}</h3>
                <h6>visitas</h6>
              </div>
            </Col>
          </Row>
        </Grid>
      </Page>
    )
  }
}

export default ProfilePage

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        subtitle
        phone
        image
        cover
        video
        whatsapp
        vip
        new
        views
        checked
        city
        profile {
          age
          height
          weight
          bust
          waist
          hips
          feet
          eyes
          hair
        }
        social {
          twitter
          instagram
          website
        }
        services {
          kiss
          blowjob
          anal
          domination
          inversion
          travel
          friends
        }
        cities
        locales {
          motel
          hotel
          self
        }
        meets {
          man
          woman
          couples
          groups
        }
        prices {
          one
          two
          night
        }
        payment {
          money
          credit
        }
        gallery
      }
    }
  }
`
