import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import cx from 'classnames'

import 'font-awesome/css/font-awesome.min.css'

const Icon = (props) => {
  const { name = null, className = null } = props
  const classNames = cx('icon', className)
  return <FontAwesome name={name} className={classNames} {...props} />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
