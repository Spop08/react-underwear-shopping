import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DialogContent from '@material-ui/core/DialogContent';

import RegisterForm from "../RegisterForm"
import LoginForm from "../LoginForm"
import SigninForm from "../SigninForm"
import Grid from '@material-ui/core/Grid';

import { accountActions } from '../../_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const Styles = theme => ({
    login: {
        width: "41.78px",
        height: "17px",
        font_family: "Montserrat",
        font_size: "24px",
        font_weight: 400,
        line_height: "17px",
        text_align: "center",
        letter_spacing: "0.3818184px",
    },

    paper: {
    
    },
});

class Header extends  Component {
  static defaultProp = {
    user: { loggedIn: false, user: { key: null } },
  }
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      setOpen: false
    }
  }

  componentDidMount() {
    const { user, dispatch } = this.props;
    dispatch(accountActions.me(user));
  }


  render() {
    const {classes, account} = this.props;
    return (
      <div>
        <div className="row">
            <div className="col-md-4 col-5">
                <img className="logo" src="/assets/image/logo.png"></img>
            </div>
            <div className="col-md-5 col-1">
                
            </div>
            <div className="col-md-3 middle col-5 profile_logo">
                {account !== undefined && <p>{account.firstname} {account.lastname} </p>}
                <img className="logo" src="/assets/image/profileicon.png"></img>
            </div>
        </div>
        <div className="row">
          <div className="col-md-1 col-12">
          </div>
          <div className="col-md-8 col-12 size_bar row">
          
              <div className="col-md-3 col-6 profile_logo size_bar_item">
                <p>Top Size:</p>
                {account !== undefined && <p className="size">{account.topsize} </p>}
              </div>
              <div className="col-md-3 col-6 profile_logo size_bar_item">
                <p>Bottom Size:</p>
                {account !== undefined && <p className="size">{account.bottomsize} </p>}
              </div>
              <div className="col-md-3 col-6 profile_logo size_bar_item">
                <p>Panty Size:</p>
                {account !== undefined && <p className="size">{account.pantysize} </p>}
              </div>
              <div className="col-md-3 col-6 profile_logo size_bar_item">
                <p>Bra Size:</p>
                {account !== undefined && <p className="size">{account.brasize} </p>}
              </div>
    
          </div>
          <SideBar />
        </div>
      </div>
      );
    }
}

function mapStateToProps(state) {
  const { authentication, account } = state;
  console.log("user:  ", authentication.user);
  console.log("account:  ", account);
  return { user: authentication.user, account: account.account};
}


export default withRouter(connect(mapStateToProps)(withStyles(Styles)(Header)));
