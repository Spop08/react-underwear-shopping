import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Signup from "../Signup"

const Styles = {
    createAcco: {
    
    }
};

class HeaderHome extends  Component {
  state = {
    isAuthenticated: false
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    return token && token.length > 10;
  }

  handleSuccessfulSignup() {
    this.setState( {
      isAuthenticated: true
    });
  }

  render() {
    const isAlreadyAuthenticated = this.isAuthenticated();
    return (
        <div>
            { isAlreadyAuthenticated ? <Redirect to={{
                pathname: '/frontend/main'
            }}/> : (
                <Signup />
            // <Signup onSuccessfulSignup={this.handleSuccessfulSignup.bind(this)}/>
            
            )
            }
        </div>
      );
    }
}



export default withStyles(Styles)(HeaderHome);
