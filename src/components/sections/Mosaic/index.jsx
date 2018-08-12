import React from 'react'
import { Row, Col } from '../../Elements/Grid'

import './styles.scss'

const models = [
  {
    name: 'Juliana Saad',
    location: 'São Paulo',
    img: '/img/acompanhantes/juliana-saad.jpg',
    link: 'https://twitter.com/Julianasaad8',
  },
  {
    name: 'Kamilinha',
    location: 'São Paulo',
    img: '/img/acompanhantes/kamilinha.jpg',
    link: 'https://twitter.com/KamilaPimenta69',
  },
  {
    name: 'Julia Faria',
    location: 'São Paulo',
    img: '/img/acompanhantes/julia-faria.jpg',
    link: 'https://twitter.com/juliafariaGP',
  },
  {
    name: 'Laila Ribeiro',
    location: 'São Paulo',
    img: '/img/acompanhantes/laila-ribeiro.jpg',
    link: 'https://twitter.com/lailaribeiro111',
  },
  {
    name: 'Athena',
    location: 'São Paulo',
    img: '/img/acompanhantes/athena.jpg',
    link: 'https://twitter.com/athena_jardins',
  },
  {
    name: 'Yumi Inoue',
    location: 'São Paulo',
    img: '/img/acompanhantes/yumi-inoue.jpg',
    link: 'https://twitter.com/yumiinouejapa',
  },
]

const MosaicSection = () => (
  <section className="section landing__section--default mosaic">
    <Row className="m-0">
      {models.map(function(model, i) {
        return (
          <Col md={4} sm={6} className="mosaic__column" key={`model-${i}`}>
            {/* <a
          href={model.link}
          target="link"
          className="mosaic__link"
        title={model.name}> */}
            <figure className="mosaic__overlay">
              <img src={model.img} alt={model.name} className="mosaic__img" />
              <figcaption className="mosaic__metadata row align-items-center">
                <span className="mosaic__model-name">{model.name}</span>
                <span className="mosaic__model-location">{model.location}</span>
              </figcaption>
            </figure>
            {/* </a> */}
          </Col>
        )
      })}
    </Row>
  </section>
)

export default MosaicSection
