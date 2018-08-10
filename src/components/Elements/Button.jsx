import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { noop } from 'lodash'

export default class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
  }

  static defaultProps = {
    className: 'btn-lg btn-red',
    children: null,
    disabled: false,
    block: false,
    onClick: noop,
    type: 'button',
  }

  getClassNames() {
    const {
      className,
      disabled,
      block
    } = this.props;

    return cx(className, 'btn', {
      'btn-disabled': disabled,
      'btn-block': block,
    });
  }
  render() {
    const { disabled, onClick, children, type } = this.props;
    return (
      <button
        disabled={disabled}
        className={this.getClassNames()}
        onClick={onClick}
        type={type}>
        {children}
      </button>
    )
  }
}
