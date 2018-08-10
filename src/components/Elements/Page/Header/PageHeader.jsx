import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title';
import './Header.scss';

const Header = ({ title, children = null }) => {
  {/*const classes = `page-header ${alignment === 'center'
    ? 'text-center'
: '' }`;*/}

  return (
    <header className="page-header text-center">
      <Title className="page-header__title">{title}</Title>
      {children}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
