import React from 'react';
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome';

import 'font-awesome/css/font-awesome.min.css'

const Icon = (props) => {
  const { name = null } = props;
  return (
    <FontAwesome name={name} />
  );
};


Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
