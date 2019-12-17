import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Formsy from 'formsy-react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import ValidatedTextField from './components/ValidatedTextField';
import LoginRegisterError from "./components/LoginRegisterError";

const styles = theme => ({
  root: {},
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  field: {
    marginTop: theme.spacing.unit
  },
  actions: {
    marginTop: theme.spacing.unit * 2
  }
});


class LocalUserLogin extends Component {
  static propTypes = {
    onLogin: PropTypes.func,
    loginFailed: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false
    }
  }