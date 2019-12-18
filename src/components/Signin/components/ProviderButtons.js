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