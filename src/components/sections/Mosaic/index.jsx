import React from 'react'
import { Row, Col } from '../../Elements/Grid'

import './styles.scss'

const models = [
  {
    name: 'Isis Souza',
    location: 'São Paulo',
    img: '/img/acompanhantes/isis-souza.png',
    link: 'https://twitter.com/Julianasaad8',
  },
  {
    name: 'Lara Paes',
    location: 'São Paulo',
    img: '/img/acompanhantes/lara-paes.png',
    link: 'https://twitter.com/KamilaPimenta69',
  },
  {
    name: 'Mariana Rodrigues',
    location: 'São Paulo',
    img: '/img/acompanhantes/mariana-rodrigues.png',
    link: 'https://twitter.com/juliafariaGP',
  },
  {
    name: 'Tais Rodrigues',
    location: 'São Paulo',
    img: '/img/acompanhantes/tais-rodrigues.png',
    link: 'https://twitter.com/lailaribeiro111',
  },
  {
    name: 'Mayumi Sato',
    location: 'São Paulo',
    img: '/img/acompanhantes/mayumi-sato.png',
    link: 'https://twitter.com/athena_jardins',
  },
  {
    name: 'Susana Joy',
    location: 'São Paulo',
    img: '/img/acompanhantes/susana-joy.png',
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
