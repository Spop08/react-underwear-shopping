import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

const Styles = {
    login: {

    }
};

class Footer extends  Component {
  state = {
    isAuthenticated: false
  }

  render() {
    return (
        <div className="classFlex footer-bar">
            <div className="col-md-4 col-5">
                <Link
                 to="/home"
                 style={{textDecoration: 'inherit'}}
                >
                  <img className="logo" src="/assets/image/logo.png" ></img>
                </Link>
            </div>
            <div className="col-md-5 col-12 middle row">
                <div className="col-sm-3 ">
                    <Button classes={{label: "btn rectangle footer-btn"}}>Help</Button>
                    <p>Contact Us</p>
                </div>
                <div className="col-sm-3 ">
                    <Button classes={{label: "btn rectangle footer-btn"}}>Account</Button>
                    <p>My Account</p>
                </div>
                <div className="col-sm-3 ">
                    <Button classes={{label: "btn rectangle footer-btn"}}>Discover</Button>
                    <p>Blog</p>
                </div>
                <div className="col-sm-3 ">
                    <Button classes={{label: "btn rectangle footer-btn"}}>Legal</Button>
                    <p>Terms and Conditions Privacy Policy</p>
                </div>
            </div>
            <div className="col-md-3 col-12 middle">
                <img className="ml-4" src="/assets/image/instagram-logo-button.png"></img>
                <img className="ml-4" src="/assets/image/facebook-logo-button.png"></img>
            </div>
            
            
            
        </div>
      );
    }
}



export default withStyles(Styles)(Footer);
