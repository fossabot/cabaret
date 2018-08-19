import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import Footer from '../components/Elements/Footer/Footer'
import '../scss/index.scss'

const TemplateWrapper = ({ children, location: { pathname }, ...rest }) => (
  <Fragment>
    {/* Only renders the Header if isn't the LandingPage route */}
    {console.log(`Current pathname is: ${pathname}`, ...rest)}
    {pathname !== '/' && <Header />}
    {children()}
    <Footer />
  </Fragment>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
