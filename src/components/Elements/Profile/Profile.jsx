import React from 'react';
import PropTypes from 'prop-types';

import './Profile.scss';

const Profile = ({profile}) => (
  <div className="profile">
    <figure className="profile__poster" title={profile.name}>
      <div className="profile__placeholder"></div>
      <a href={profile.url} className="profile__link">
        <div className="profile__image">
          <img src={profile.cover} className="profile__image-content" alt={profile.name} />
        </div>
      </a>
      <figcaption className="profile__poster-caption" title={profile.name}>
        <h3 className="profile__name">
          <a href={profile.url}>{profile.name}</a>
        </h3>
        <span className="profile__phone">{profile.phone}</span>
      </figcaption>
    </figure>
  </div>
);

Profile.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Profile;
