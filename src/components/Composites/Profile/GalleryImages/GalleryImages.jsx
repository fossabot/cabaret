import React, { Component, Fragment } from 'react'
import Lightbox from 'react-images'

import { Row, Col } from '../../../Elements/Grid'
import Icon from '../../../Elements/Icon/Icon'

// TODO: Refactor with Translate and profile name

export default class GalleryImages extends Component {
  constructor(props) {
    super(props)

    const images = this.props.images.map((img) => {
      return { src: img, caption: 'Profile name', alt: 'Profile name' }
    })

    this.state = {
      isLightboxOpen: false,
      currentImage: null,
      images,
    }
  }

  renderImageThumbnails = (images) => (
    <Row noGutters className="image-gallery">
      {images.map((img, currentImageIndex) => {
        return (
          <Col xs={12} sm={6} md={4} key={currentImageIndex}>
            <a
              className="image-gallery__cover d-none d-sm-block"
              href={img.src}
              title="name"
              onClick={(event) => {
                event.preventDefault()
                this.setState({ currentImageIndex, isLightboxOpen: true })
              }}>
              <div className="image-gallery__image" style={{ backgroundImage: `url(${img.src})` }}>
                <Icon name="search" />
              </div>
            </a>
            <img src={img.src} alt="Profile Name" className="d-block d-sm-none" />
          </Col>
        )
      })}
    </Row>
  )

  renderLightBox = (images) => (
    <Lightbox
      images={images}
      isOpen={this.state.isLightboxOpen}
      currentImage={this.state.currentImageIndex}
      className="d-block d-sm-none"
      onClickPrev={() => {
        this.setState({ currentImageIndex: this.state.currentImageIndex - 1 })
      }}
      onClickNext={() => {
        this.setState({ currentImageIndex: this.state.currentImageIndex + 1 })
      }}
      onClose={() => this.setState({ isLightboxOpen: false })}
      onClickThumbnail={(currentImageIndex) => {
        this.setState({ currentImageIndex })
      }}
      imageCountSeparator=" / "
      showThumbnails
    />
  )

  render() {
    const { images } = this.state

    return (
      <Fragment>
        {this.renderImageThumbnails(images)}
        {this.renderLightBox(images)}
      </Fragment>
    )
  }
}
