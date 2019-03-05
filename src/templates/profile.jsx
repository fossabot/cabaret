import React, { Component } from 'react'
import { graphql } from 'gatsby'
import VisibilitySensor from 'react-visibility-sensor'

import { Grid, Row, Col } from '../components/Elements/Grid'
import TitleAndMetaTags from '../components/TitleAndMetaTags'
import Page from '../components/Elements/Page/Page'
import Icon from '../components/Elements/Icon/Icon'
import GalleryImages from '../components/Composites/Profile/GalleryImages/GalleryImages'
import InformationCard from '../components/Composites/Profile/InformationCard/InformationCard'

import { multipleValuesBool } from '../utils'
import { translate as t } from '../services/TransateService'
import FeaturedBanner from '../components/Composites/Profile/FeaturedBanner/FeaturedBanner'
import Layout from '../components/Layout'

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

  // renderSocialNetwork = (data) => {
  //   const { social } = data
  //   return null
  // }

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
      // eslint-disable-next-line react/prop-types
      data: {
        markdownRemark: { html: description, frontmatter: profile },
      },
    } = this.props

    return (
      <Layout>
        <Page className="profile-page">
          <TitleAndMetaTags
            title={profile.name}
            description={description}
            location={profile.city}
            cover={profile.cover}
          />

          {/* Floating number */}
          {this.state.inView && (
            <div className="profile-page__floating hidden-sm-down">
              <Icon name="whatsapp" className="profile-page__floating-icon" />
              <div className="profile-page__floating-info">
                <span>{profile.name}</span>
                <span className="phone">{profile.phone}</span>
              </div>
            </div>
          )}

          {/* Acompanhante / Destaque */}
          <VisibilitySensor onChange={this.handleChange} partialVisibility scrollThrottle={0}>
            <FeaturedBanner data={profile} />
          </VisibilitySensor>

          {/* Ensaio */}

          {/* Interation bar */}
          <section className="profile-page__interation-bar" id="profile-interaction">
            <Grid>
              <Row>
                <Col md={{ size: 3, offset: 3 }} className="tag">
                  <span>
                    <Icon name="eye" />
                    <span>{profile.views}</span>
                  </span>
                  <p>visualizações</p>
                </Col>
                <Col md={{ size: 3 }} className="tag">
                  <a href="#">
                    <Icon name="share-alt" />
                    <span>compartilhe</span>
                  </a>
                  <p>envie para um amigo</p>
                </Col>
              </Row>
            </Grid>
          </section>

          {/* Content */}
          <section className="profile-page__content">
            <Grid>
              <InformationCard data={profile} description={description} />
            </Grid>
          </section>

          {/* Pricing */}
          <section className="profile-page__pricing">
            <Grid>
              <Row>
                <Col xs={12}>
                  <header>
                    <h2>Vamos marcar?</h2>
                  </header>
                </Col>
                <Col className="text-center" md={3}>
                  <Icon name="clock-o" />
                  <p>1 HORA</p>
                  <hr />
                  <span className="h4">A Combinar</span>
                </Col>
                <Col className="text-center" md={3}>
                  <Icon name="clock-o" />
                  <p>2 HORAS</p>
                  <hr />
                  <span className="h4">A Combinar</span>
                </Col>
                <Col className="text-center" md={3}>
                  <Icon name="moon-o" />
                  <p>PERNOITE</p>
                  <hr />
                  <span className="h4">A Combinar</span>
                </Col>
                <Col className="text-center" md={3}>
                  <Icon name="usd" />
                  <p>PAGAMENTO</p>
                  <hr />
                  <span className="h6">Dinheiro</span> <hr />
                  <span className="h6">Cartão (Débito)</span>
                </Col>
              </Row>
            </Grid>
          </section>

          {/* Gallery */}
          <section className="profile-page__gallery">
            <Grid>
              <GalleryImages images={profile.gallery} />
            </Grid>
          </section>

          {/* Services */}
          <section className="profile-page__services">
            <Grid>
              <Row>
                <Col sm={4} className="service-col">
                  <h3 className="page__subtitle">
                    <strong>O que</strong> faço:
                  </h3>
                  {this.renderServices(profile)}
                </Col>
                <Col sm={4} className="service-col">
                  <h3 className="page__subtitle">
                    <strong>Como</strong> Atendo:
                  </h3>
                  {this.renderAditionalServices(profile)}
                </Col>
                <Col sm={4} className="service-col">
                  <h3 className="page__subtitle">Quanto:</h3>
                  {this.renderPricesAndPayments(profile)}
                </Col>
              </Row>
            </Grid>
          </section>
        </Page>
      </Layout>
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
