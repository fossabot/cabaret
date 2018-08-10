import React from 'react';
import PropTypes from 'prop-types';

import Page from '../Elements/Page/Page';
import { Grid, Row, Col } from '../Elements/Grid';
import Profile from '../Elements/Profile/Profile';
import getProfileData from '../../utils/getProfileData';
import BannerWithProfiles from '../Composites/BannerWithProfiles/BannerWithProfiles';

const EscortsPageContainer = ({ escorts }) => (
  <Page>
    {console.log('escorts', escorts)}
    <BannerWithProfiles />
    <Grid>
      <Row>
        <Col sm={12}>
          <h2 className="page__subtitle">Gatas da semana</h2>
        </Col>
        {getProfileData(6).map((profile, index) => {
          return (
            <Col xs={6} sm={4} lg={2} key={index}>
              <Profile profile={profile} />
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col sm={12}>
          <h2 className="page__subtitle">Gatas em destaque</h2>
        </Col>
        {getProfileData(12).map((profile, index) => {
          return (
            <Col xs={6} sm={6} md={4} lg={2} key={index}>
              <Profile profile={profile} />
            </Col>
          );
        })}
      </Row>
    </Grid>
  </Page>
)


EscortsPageContainer.propTypes = {
  escorts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default EscortsPageContainer;
