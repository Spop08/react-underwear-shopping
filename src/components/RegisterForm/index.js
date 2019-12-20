import React, {Component} from 'react'
import {render} from 'react-dom'
import { Link, Redirect } from 'react-router-dom';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import LoginRegister from '../Register';
import Button from '@material-ui/core/Button'
import superagent from "superagent";
import APIPath from '../Api';
import { accountActions } from '../../_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    // padding: 20
  },
  footer: {
    padding: '10px'
  },
  controls: {
    margin: [[theme.spacing.unit * 2, 0]],
    padding: theme.spacing.unit
  }
});

class RegisterForm extends Component {
  state = {
    disableLocal: false,
    disableRegister: true,
    disableRegisterProviders: true,
    registerFailed: '',
    submitted: false
  };

  constructor(props) {
    super(props);

  }
  render() {
    const {classes, loading, errors} = this.props;

    const header = (
        <div>
        <div className="row">
            <div className="col-md-4 col-5">
                <Link
                 to="/home"
                 style={{textDecoration: 'inherit'}}
                >
                  <img className="logo" src="/assets/image/logo.png" ></img>
                </Link>
            </div>
        </div>
        <div className="register_title">
            <p>Create Your Account</p>
        </div>
        </div>
        
    );