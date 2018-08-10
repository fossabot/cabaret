import React, { Component } from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Grid, Row, Col } from '../../Elements/Grid';
import Profile from '../../Elements/Profile/Profile';
import getProfileData from '../../../utils/getProfileData';

import './BannerWithProfiles.scss';

export default class BannerWithProfiles extends Component {
  renderSlides = () => {
    return getProfileData(6).map((item, index) => {
      return (
        <Col className="col banner-profile__item" key={index}>
          <Profile profile={item} />
        </Col>
      );
    });
  }
  render() {
    return (
      <Grid fluid className="banner-profile">
        <Row className="banner-profile__carousel">
          {this.renderSlides()}
        </Row>
      </Grid>
    );
  }
}
