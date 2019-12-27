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

class ProfilePage extends Component {
  static defaultProp = {
    user: {
      loggedIn: false,
      user: {
        key: null
      }
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      setOpen: false,
      loved: false,
      bras: false,
      panties: false,
      lingerie: false,
      victoria: false,
      zaful: false
    }
  }
  componentDidMount() {

    var jData = [];
    const {user, dispatch} = this.props;
    dispatch(accountActions.me(user));
    portfolioService
      .getGiftList()
      .then((response) => {
        const selectedPT1 = [];
        const selectedPT2 = [];
        const selectedPT3 = [];
        const selectedPT4 = [];
        let tCnt = 0;
        jData = response.data;
        jData.map(i => {
          switch (tCnt % 4) {
            case 0:
              selectedPT1.push(i);
              break;
            case 1:
              selectedPT2.push(i);
              break;
            case 2:
              selectedPT3.push(i);
              break;
            case 3:
              selectedPT4.push(i);
              break;
          }
          tCnt++;
        })
        
        this.setState({
          portfolios: jData,
          gifts: response.data,
          tCnt: tCnt,
          selectedPT1: selectedPT1,
          selectedPT2: selectedPT2,
          selectedPT3: selectedPT3,
          selectedPT4: selectedPT4
        })
      })
  }
}