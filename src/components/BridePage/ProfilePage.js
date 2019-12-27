import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DialogContent from '@material-ui/core/DialogContent';

import RegisterForm from "../RegisterForm"
import LoginForm from "../LoginForm"
import SigninForm from "../SigninForm"
import Grid from '@material-ui/core/Grid';

import {accountActions} from '../../_actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {portfolioService} from '../../_services';
import GiftPhoto from './GiftPhoto'
import Footer from '../Footer'
import BHeader from '../BHeader'
import Checkbox from '@material-ui/core/Checkbox';
import {FormControlLabel} from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';

const Styles = theme => ({
  login: {
    width: "41.78px",
    height: "17px",
    font_family: "Montserrat",
    font_size: "24px",
    font_weight: 400,
    line_height: "17px",
    text_align: "center",
    letter_spacing: "0.3818184px"
  },

  paper: {}
});