import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import Footer from '../Elements/Footer/Footer'
import '../../scss/index.scss'

import { isProduction } from '../../utils'

const Debug = () => <span className="debug" />

const Layout = ({ children, noHeader = false }) => (
  <>
    {!isProduction() && <Debug />}
    {!noHeader && <Header />}
    {children}
    <Footer />
  </>
)

export default Layout
