import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Route } from 'react-router-dom';

import ProfilePage from "./ProfilePage"
import HeaderHome from "../HeaderHome"
import FriendPage from "./FriendPage"
import ProductPage from "./ProductPage"
const Styles = {
    login: {
        width: "41.78px",
        height: "17px",
        font_family: "Montserrat",
        font_size: "24px",
        font_weight: 400,
        line_height: "17px",
        text_align: "center",
        letter_spacing: "0.3818184px",
    }
};

class BridePage extends  Component {
  state = {
    isAuthenticated: false
  }

  render() {
    return (
      <ProfilePage/>
      );
    }
}

export default withStyles(Styles)(BridePage);
