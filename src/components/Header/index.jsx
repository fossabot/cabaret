import React, { Component } from 'react'
import Link from '../Elements/Link/Link'
// import Navigation from '../Navigation';

import './Header.scss'

class Header extends Component {
  render() {
    return (
      <header className="header navbar navbar-expand-md navbar-dark">
        <div className="container">
          <Link to="/">
            <h1 className="navbar-brand mb-0 text-hide">
              <span>Cabaret Acompanhantes de Luxo</span>
              <img src="/img/logo.png" width="120" alt="Cabaret Acompanhantes de Luxo." />
            </h1>
          </Link>
          {/*<Navigation />*/}
        </div>
      </header>
    )
  }
}

export default Header
