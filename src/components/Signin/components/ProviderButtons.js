import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {darken} from '@material-ui/core/styles/colorManipulator'
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import {FacebookBox, GithubBox, TwitterBox, Google} from "mdi-material-ui";

const providerColors = {
  github: {
    primary: '#24292e'
  },
  facebook: {
    primary: '#3b5998'
  },
  twitter: {
    primary: '#1da1f2'
  },
  google: {
    primary: '#4285F4'
  }
};


/*
Properties
base color
icon
button label
 */

export class ProviderButton extends Component {
  render() {
    const {
      classes,
      providerIcon, providerLabel,
      login, register,
      provider, // for instance tracking in tests
      ...restOfProps
    } = this.props;

    let label;
    if (login) {
      label = `Log in with ${providerLabel}`
    }
    else if (register) {
      label = `Register with ${providerLabel}`
    }
    else {
      label = providerLabel;
    }
    return (
      <Button {...restOfProps} onClick={this.handleClick} classes={{
        root: classes.root
      }}
      >
        {React.createElement(providerIcon, {className: classes.leftIcon})}
        {label}
      </Button>
  );
}