import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class FormField extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    name: '',
    label: '',
    placeholder: '',
    disabled: false,
    type: 'text',
  }

  getLabel() {
    const { label, name } = this.props;
    if (!label) return;

    return (<label htmlFor={`input-${name}`}>{label}</label>)
  }

  getClassNames() {
    const {
      className,
    } = this.props;

    return cx(className, 'form-control');
  }
  render() {
    const { name, disabled, placeholder, type } = this.props;
    return (
      <div className="form-group">
        {this.getLabel()}
        <input
          type={type}
          className={this.getClassNames()}
          id={`input-${name}`}
          name={name}
          disabled={disabled}
          placeholder={placeholder} />
      </div>
    )
  }
}

export default FormField
