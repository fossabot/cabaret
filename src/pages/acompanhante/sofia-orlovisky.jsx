import React, { Component } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import Masonry from 'react-masonry-component'

import { Grid, Row, Col } from '../../components/Elements/Grid'
import Page from '../../components/Elements/Page/Page'
import Icon from '../../components/Elements/Icon/Icon'
import GalleryImages from '../../components/Composites/GalleryImages/GalleryImages'

const profile = {
  name: 'Sofia Orlovisky',
  cover: 'http://placehold.it/362x536',
  isVip: true,
  hasVideo: true,
  hasWhatsapp: true,
  phone: '(00) 12345-6789',
  url: '/acompanhante/sofia-orlovisky',
  social: {
    twitter: 'twitter.com/sofia_ruiva',
  },
  photos: [
    'http://www.rstopmodels.com/media/catalog/product/cache/8/thumbnail/0f396e8a55728e79b48334e699243c07/s/o/sofia_03.jpg',
    'http://www.rstopmodels.com/media/catalog/product/cache/8/thumbnail/0f396e8a55728e79b48334e699243c07/s/o/sofia_08.jpg',
    'http://www.rstopmodels.com/media/catalog/product/cache/8/thumbnail/0f396e8a55728e79b48334e699243c07/s/o/sofia_05.jpg',
    'http://www.rstopmodels.com/media/catalog/product/cache/8/thumbnail/0f396e8a55728e79b48334e699243c07/s/o/sofia_04.jpg',
    'http://www.rstopmodels.com/media/catalog/product/cache/8/thumbnail/0f396e8a55728e79b48334e699243c07/s/o/sofia_06.jpg',
    'http://www.rstopmodels.com/media/catalog/product/cache/8/thumbnail/0f396e8a55728e79b48334e699243c07/s/o/sofia_01.jpg',
    'http://www.rstopmodels.com/media/catalog/product/cache/8/thumbnail/0f396e8a55728e79b48334e699243c07/s/o/sofia_07.jpg',
    'http://www.rstopmodels.com/media/catalog/product/cache/8/thumbnail/0f396e8a55728e79b48334e699243c07/s/o/sofia_09.jpg',
  ],
}

const views = 1578

const photosColumn = () => {
  const pics = [].concat(profile.photos)
  const halfSize = Math.ceil(pics.length / 2)
  const leftSide = pics.splice(0, halfSize)
  return { left: leftSide, right: pics }
}

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = { inView: false }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
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

  render() {
    return (
      <Page className="profile-page">
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
          <Row className="profile-page__cover justify-content-md-center align-items-center">
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
              <GalleryImages images={profile.photos} />
              {/*<Masonry className="profile-page__gallery">
                {this.renderImages(profile.photos)}
              </Masonry>*/}
            </Col>
            <Col sm={6}>
              <h1 className="page__subtitle">{profile.name}</h1>

              <p>
                Olá! Sou sua namoradinha perfeita para momentos de prazer inesquecível, gatinha
                carinhosa mignon 1.53 de altura , tenho 19 anos, com rostinho de anjo safado!
                Hahaha.
              </p>
              <p>
                Faço estilo namoradinha, Uma companhia agradável e descontraída. Vem namorar com a
                gatinha Sofia.
              </p>

              <h3 className="page__subtitle">O que Faço?</h3>
              <ul>
                <li>
                  <strong>Beija</strong>
                  :Sim
                </li>
                <li>
                  <strong>Oral</strong>
                  :Sim
                </li>
                <li>
                  <strong>Anal</strong>
                  :Sim
                </li>
                <li>
                  <strong>Dominação</strong>
                  :Sim
                </li>
                <li>
                  <strong>Viagens</strong>
                  :Sim
                </li>
                <li>
                  <strong>Inversão</strong>
                  :Sim
                </li>
                <li>
                  <strong>Amigas</strong>
                  :Sim
                </li>
              </ul>
              <h3 className="page__subtitle">Como atendo</h3>
              <h3 className="page__subtitle">Quanto</h3>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="text-center">
              <p>Possuo um total de</p>
              <div className="profile-page__counter">
                <h3>{views}</h3>
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
