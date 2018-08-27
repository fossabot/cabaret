import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CollapseItem from './CollapseItem'

export default class Collapse extends Component {
  constructor(props) {
    super(props)

    this.state = { opened: null }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    list: [],
  }

  handleOnClick = (id) => {
    const { opened } = this.state

    if (opened === id) {
      this.setState({ opened: null })
    } else {
      this.setState({ opened: id })
    }
  }

  renderItems = (list) => {
    if (!list) return null

    return list.map((item, key) => (
      <CollapseItem
        key={key}
        isOpen={this.state.opened === key}
        onClick={() => this.handleOnClick(key)}
        title={item.label}>
        {item.description}
      </CollapseItem>
    ))
  }

  render() {
    const { title, list, className } = this.props

    return (
      <div className={`collapse-wrap ${className}`}>
        <h2>{title}</h2>
        {this.renderItems(list)}
      </div>
    )
  }
}
