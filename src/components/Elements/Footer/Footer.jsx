import React, { Component } from 'react'
import { Link } from 'gatsby'

import './Footer.scss'

const footerNavigation = [
  { path: '/', label: 'Inicio' },
  { path: '/anuncie/', label: 'Anuncie' },
  { path: '/perguntas-frequentes/', label: 'Perguntas Frequentes' },
]

const Footer = () => (
  <footer className="footer">
    <ul className="footer-list">
      {footerNavigation.map(function(item, i) {
        return (
          <li className="footer-list__item" key={`footer-link-${i}`}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        )
      })}
    </ul>
    <span className="footer-copy">&copy; Cabaret 2018 - Red Velvet Inc.</span>
  </footer>
)

export default Footer
