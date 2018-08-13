import React from 'react'

import { Grid, Row, Col } from '../../components/Elements/Grid'
import Page from '../../components/Elements/Page/Page'
import Icon from '../../components/Elements/Icon/Icon'

import './styles.scss'

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

const ProfilePage = () => (
  <Page class="profile-page">
    <div class="profile-page__floating">
      <Icon name="whatsapp" className="profile-page__floating-icon" />
      <div class="profile-page__floating-info">
        <span>{profile.name}</span>
        <span class="phone">{profile.phone}</span>
      </div>
    </div>
    <Grid fluid componentClass="section">
      <Row className="profile-page__cover justify-content-md-center align-items-center">
        <Col sm={6}>
          <div className="profile-page__title">
            <h1>{profile.name}</h1>
            <h3>{profile.phone}</h3>
            <p>Ao ligar para ela, diga que viu o anúncio no Cabare Club.</p>
          </div>
        </Col>
        {/*<Col sm={12}>
          <a href="tel:(31) 99142-2098"><span class="telephone">{profile.phone}</span></a>
        </Col>
        <Col sm={12} className="description">
          <p>Linda ninfeta, sexy e encantadora, rostinho de menininha e corpo de mulher... Gostou? Confira!						<a class="hide-on-mobile jumper" href="#gallery_view" title="Veja mais fotos"> Veja mais fotos </a>
          </p>
          <p>Possui privé (local).</p>
          <p class="last">
            19 Anos | 						1,65 m | 						57 Kg | 						Pés 36																		<a class="hide-on-mobile jumper" href="#services_view" title="Quer saber mais sobre mim?"> Quer saber mais sobre mim? </a>
          </p>
        </Col>*/}
      </Row>
    </Grid>
    <Grid className="profile-page__content">
      <Row>
        <Col sm={4}>
          {photosColumn().left.map((item, index) => (
            <img key={index} src={item} />
          ))}
        </Col>
        <Col sm={4}>
          {photosColumn().right.map((item, index) => (
            <img key={index} src={item} />
          ))}
        </Col>
        <Col sm={4}>
          <h1 className="page__subtitle">{profile.name}</h1>

          <p>
            Olá! Sou sua namoradinha perfeita para momentos de prazer inesquecível, gatinha
            carinhosa mignon 1.53 de altura , tenho 19 anos, com rostinho de anjo safado! Hahaha.
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

export default ProfilePage

// import Lightbox from 'react-images'

// class GalleryImages {
//   constructor(props) {
//     super(props)

//     this.images = props.graphqlData.allFile.edges.map(({ node: { base, childImageSharp: { thumb, original } } }) => ({
//       name: base
//         .replace('soumu', '総務')
//         .replace('kouhou', '広報')
//         .replace('setsumeikai', '説明会')
//         .replace('kizai', '機材')
//         .replace('shuppann', '出版')
//         .replace('jikkouiinn', '実行委員')
//         .replace('ippann', '一般')
//         .replace('katsudou', '活動')
//         .replace('kouenn', '公演')
//         .replace('soushoku', '装飾')
//         .replace('shokuhinn', '食品'),
//       originalSrc: original.src,
//       thumbSrc: thumb.src
//     }))

//     this.thumbs = this.images.map(({ name, thumbSrc }) => ({
//       src: thumbSrc,
//       alt: name
//     }))
//     this.lightboxImages = this.images.map(({ name, originalSrc, thumbSrc }) => ({
//       src: originalSrc,
//       caption: name,
//       thumbnail: thumbSrc
//     }))

//     this.state = {
//       isLightboxOpen: false,
//       currentImage: null
//     }

//     this.openLightbox = this.openLightbox.bind(this)
//     this.closeLightbox = this.closeLightbox.bind(this)
//     this.goPrev = this.goPrev.bind(this)
//     this.goNext = this.goNext.bind(this)
//     this.goTo = this.goTo.bind(this)
//   }

//   openLightbox(i) {
//     this.setState({ isLightboxOpen: true, currentImage: i })
//   }

//   closeLightbox() {
//     this.setState({ isLightboxOpen: false })
//   }

//   goPrev() {
//     this.setState({ currentImage: this.state.currentImage - 1 })
//   }

//   goNext() {
//     this.setState({ currentImage: this.state.currentImage + 1 })
//   }

//   goTo(i) {
//     this.setState({ currentImage: i })
//   }

//   render() {
//     return (
//       <div>
//         <div className={style.images}>
//           {this.thumbs.map((val, i) => (
//             <img
//               key={i}
//               src={val.src}
//               srcSet={val.srcSet}
//               alt={val.alt}
//               onClick={() => { this.openLightbox(i) }}
//             />
//           ))}
//         </div>
//         <Lightbox
//           images={this.lightboxImages}
//           backdropClosesModal
//           showThumbnails
//           isOpen={this.state.isLightboxOpen}
//           currentImage={this.state.currentImage}
//           onClickPrev={this.goPrev}
//           onClickNext={this.goNext}
//           onClickThumbnail={this.goTo}
//           onClose={this.closeLightbox}
//         />
//       </div>
//     )
//   }
// }
