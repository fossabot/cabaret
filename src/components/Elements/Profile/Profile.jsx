import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'

import './Profile.scss'

const Profile = ({ profile, slider = false }) => (
  <div className={`profile ${slider ? 'with-zoom' : null}`}>
    <figure className="profile__poster" title={profile.name}>
      <a href={`acompanhante/${profile.url}`} className="profile__link">
        {profile.hasVideo &&
          !slider && <Icon name="youtube-play" className="profile__video" title="Possui video" />}
        <div className="profile__image">
          <img src={profile.cover} className="profile__image-content" alt={profile.name} />
        </div>
      </a>
      <figcaption className="profile__poster-caption" title={profile.name}>
        <h3 className="profile__name">
          <a href={`acompanhante/${profile.url}`}>{profile.name}</a>
        </h3>
        <span className="profile__phone">{profile.phone}</span>
        {profile.hasWhatsapp && (
          <Icon name="whatsapp" className="profile__whatsapp" title="WhatsApp" />
        )}
      </figcaption>
    </figure>
  </div>
)

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default Profile
