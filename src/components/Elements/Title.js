import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default class Title extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['h1', 'h2']),
  }

  static defaultProps = {
    className: 'rv-title',
    type: 'h1',
    children: null
  }

  getDashLine() {
    return (<span className="rv-title__dash-line" key={`dash-${Date.now()}`} />);
  }

  getTitle() {
    const { type, children, className } = this.props;
    return React.createElement(type, { className }, [...children]);
  }

  render() {
    return (
      <div>
        {this.getTitle()}
        {this.getDashLine()}
      </div>
    );
  }
}
