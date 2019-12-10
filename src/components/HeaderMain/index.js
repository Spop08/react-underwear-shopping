import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Header from "../Header"
import HeaderHome from "../HeaderHome"

const Styles = {
    login: {
        width: "41.78px",
        height: "17px",
        font_family: "Montserrat",
        font_size: "24px",
        font_weight: 400,
        line_height: "1px",
        text_align: "center",
        letter_spacing: "0.3818184px",
    }
};

class HeaderMain extends  Component {
  state = {
    isAuthenticated: false
  }

  render() {
    return (
        <div className="header_main">
            <Header />
            <HeaderHome />
            
        </div>
      );
    }
}



export default withStyles(Styles)(HeaderMain);
