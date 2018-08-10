import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import cx from 'classnames';

const links = [
  {
    label: 'Nossas Gatas',
    path: '/acompanhantes',
    type: 'link'
  },
  {
    label: 'Cidades',
    path: '/cidades',
    type: 'dropdown',
    links: [
      {label: 'São Paulo', path: '/acompanhantes/sao-paulo'},
      {label: 'Rio de Janeiro', path: '/acompanhantes/rio-de-janeiro'},
      {label: 'Porto Alegre', path: '/acompanhantes/porto-alegre'},
    ]
  },
  {
    label: 'Anuncie',
    path: '/anuncie',
    type: 'link'
  },
  {
    label: 'Contato',
    path: '/contato',
    type: 'link'
  },
]

export default class Navigation extends Component {
  getNavItemClass = (path) => {
    return cx('nav-item', {
      active: location.pathname === path
    });
  }

  isActive = (path) => location.pathname === path;

  renderLink = (link, key) => {
    return (
      <NavItem eventKey={key} href={link.path} key={key} className={this.getNavItemClass(link.path)}>
        {link.label}
      </NavItem>
    );
  }

  renderDropDown = (link, key) => {
    return (
      <NavDropdown title={link.label} eventKey={key} key={key} id="main-navigation" className={this.getNavItemClass(link.path)}>
        {link.links.length && link.links.map((item, index) => {
          return (
            <MenuItem href={item.path} eventKey={`${key}.${index}`} key={index}>{item.label}</MenuItem>
          );
        })}
      </NavDropdown>
    );
  }

  renderNavigation = () => {
    let nav = null;

    nav = links.map((link, index) => {
      switch (link.type) {
        case 'link':
          return this.renderLink(link, index);
        case 'dropdown':
          return this.renderDropDown(link, index);
        default:
          throw new Error(`Navigation of type: ${link.type || 'undefined'} is not allowed.`);
      }
      if (link.type === 'link') {

      }
    });

    return nav;
  }

  render() {
    return (
      <Nav>
        <ul className="navbar-nav bd-navbar-nav flex-row mr-auto">
          {this.renderNavigation()}
        </ul>
      </Nav>
    );
  }
}
