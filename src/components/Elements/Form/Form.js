import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from "gatsby-link";

import Legend from './Legend';
import HelpBlock from './HelpBlock';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { url, name, action } = this.props;
    const form = e.target;
    console.log(form);
    return;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': name,
        ...this.state
      })
    })
      .then(() => navigateTo(action))
      .catch(error => console.error(error));
  }

  render(){
    const {children = null, ...rest} = this.props;

    return (
      <form onSubmit={this.handleSubmit} {...rest}>
        {children}
      </form>
    );
  }
}

Form.Legend = Legend;
Form.HelpBlock = HelpBlock;

Form.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  action: PropTypes.string,
  children: PropTypes.any,
};
