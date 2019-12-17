import React, {Component} from 'react'
import {render} from 'react-dom'
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
    disableRegisterProviders: true
  };

  render() {
    const {classes} = this.props;

    const header = (
        <div>
        <div className="row">
            <div className="col-md-4 col-5" href={"/home"}>

                <a href="/home"><img className="logo" src="/assets/image/logo.png" ></img></a>
            </div>
            
        </div>
        <div className="register_title">
            <p>
                Create Your Account
            </p>
        </div>
        </div>
        
    );

    const footer = (
      <div className={classes.footer}>
        <img className="foot_image float-right" src="/assets/image/Bitmap.png"></img>
      </div>
    );
    return (
      <div className={classes.root}>
        <CssBaseline/>
        <LoginRegister header={header} footer={footer}
                       onLogin={this.handleLogin}
                       onLoginWithProvider={this.handleLoginWithProvider}
                       onRegister={this.handleRegister}
                       onRegisterWithProvider={this.handleRegisterWithProvider}
                       disableLocal={this.state.disableLocal}
                       disableRegister={this.state.disableRegister}
                       disableRegisterProviders={this.state.disableRegisterProviders}
        />
       
      </div>
    );
  }