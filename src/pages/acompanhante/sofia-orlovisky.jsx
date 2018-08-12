import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'

import { Grid, Row, Col } from '../../components/Elements/Grid'
// import Profile from '../../components/Elements/Profile';

import './styles.scss'

const data = [
  'http://placehold.it/362x536',
  'http://placehold.it/362x536',
  'http://placehold.it/362x536',
  'http://placehold.it/362x536',
]

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Slider infinite={true} infinity slidesToShow={2} arrows dots>
      {data.map((item, index) => (
        <img key={index} src={item} />
      ))}
    </Slider>
    <Link to="/">Back to home</Link>
  </div>
)

export default NotFoundPage
