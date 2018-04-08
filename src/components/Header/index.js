import React, { Component } from 'react'
import Link from 'gatsby-link'

class Header extends Component {
  isActive(expect) {
    if (typeof window !== 'undefined' && window) {
      return location.pathname === expect ? 'nav-item active' : 'nav-item';
    }
    return 'nav-item';
  }
  render() {
    return (
      <header className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container">
          <Link to="/">
            <h1 className="navbar-brand mb-0">Cabaret</h1>
          </Link>
          {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <nav className="navbar-nav-scroll">
          {/* <nav className="collapse navbar-collapse" id="navbarCollapse"> */}
            <ul className="navbar-nav bd-navbar-nav flex-row mr-auto">
              <li className={this.isActive('/acompanhantes/')}>
                <Link to="/acompanhantes/" className="nav-link">
                  Nossas Gatas
            </Link>
              </li>
              <li className={this.isActive('/regioes/')}>
                <Link to="/cidades/" className="nav-link">
                  Cidades
            </Link>
              </li>
              <li className={this.isActive('/anuncie-aqui/')}>
                <Link to="/anuncie-aqui/" className="nav-link">
                  Anuncie
            </Link>
              </li>
              <li className={this.isActive('/contato/')}>
                <Link to="/contato/" className="nav-link">
                  Contato
            </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
