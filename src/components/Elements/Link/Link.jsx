import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { noop } from 'lodash'
import cx from 'classnames'

export default class Link extends Component {
  handleClick = (event) => {
    const { onClick = noop, to, target = null } = this.props

    onClick(event)

    if (!event.defaultPrevented && !target) {
      navigate(to)
    }
  }

  render() {
    const { children, to, className = null } = this.props

    const linkClassNames = cx('link', className)
    return (
      <a href={to} className={linkClassNames} onClick={this.handleClick}>
        {children}
      </a>
    )
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  target: PropTypes.string,
}
