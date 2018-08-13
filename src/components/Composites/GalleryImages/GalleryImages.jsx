import React, { Component, Fragment } from 'react'
import Masonry from 'react-masonry-component'
import Lightbox from 'react-images'

export default class GalleryImages extends Component {
  constructor(props) {
    super(props)

    const images = this.props.images.map((img) => {
      return { src: img }
    })

    this.state = {
      isLightboxOpen: false,
      currentImage: null,
      images,
    }
  }

  renderImageThumbnails = (images) => (
    <Masonry className="row thumbnails">
      {images.map((img, currentImageIndex) => {
        const colSize = images.length % 4 === 0 || images.length > 6 ? 6 : 12
        // const colSize = 6;
        return (
          <div className={`col-lg-${colSize} col-sm-6`} key={currentImageIndex}>
            <a
              href={img.src}
              onClick={(event) => {
                event.preventDefault()
                this.setState({ currentImageIndex, isLightboxOpen: true })
              }}>
              <img src={img.src} />
            </a>
          </div>
        )
      })}
    </Masonry>
  )

  renderLightBox = (images) => (
    <Lightbox
      images={images}
      isOpen={this.state.isLightboxOpen}
      currentImage={this.state.currentImageIndex}
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
