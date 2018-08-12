import React from 'react'
import PropTypes from 'prop-types'

import Page from '../Elements/Page/Page'
import { getProfiles, getVipOnly, getFeatured } from '../../constants/profiles'
import BannerWithProfiles from '../Composites/BannerWithProfiles/BannerWithProfiles'
import ProfileGrid from '../Composites/ProfileGrid/ProfileGrid'

const EscortsPageContainer = ({ escorts }) => (
  <Page>
    <BannerWithProfiles items={getFeatured()} />
    <ProfileGrid
      title={
        <h2 className="page__subtitle">
          <strong>Gatas</strong> da semana
        </h2>
      }
      items={getVipOnly()}
    />
    <ProfileGrid
      title={
        <h2 className="page__subtitle">
          <strong>Gatas</strong> em destaque
        </h2>
      }
      items={getProfiles()}
    />
  </Page>
)

EscortsPageContainer.propTypes = {
  escorts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default EscortsPageContainer
