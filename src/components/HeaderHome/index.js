import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import DialogContent from '@material-ui/core/DialogContent';

import SigninForm from "../SigninForm"

const Styles = {
  createAcco: {
    width: '114.33px',
    height: '17px',
    font_family: 'Montserrat',
    font_size: '34px',
    font_weight: '400',
    line_height: '17px',
    text_align: 'center',
    letter_spacing: '0.3818184px'
  }
};

class HeaderHome extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isAuthenticated: false,
      open: false
    }
    this.handleClose = this
      .handleClose
      .bind(this)
    this.handleOpen = this
      .handleOpen
      .bind(this)
  }
  handleClose() {
    this.setState({open: false})
  }
  handleOpen() {
    this.setState({open: true})
  }
  render() {
    return (
      <div className="header_title">
        <p>
          GET WHAT MAKES YOU FEEL SEXY IN
        </p>
        <div className="accountBtn">
          <Link
            to="/frontend/register/"
            style={{
            textDecoration: 'inherit'
          }}>
            <Button
              classes={{
              label: "btn rectangle createAcco"
            }}>Create Account</Button>
          </Link>
          <Link to="/guest" style={{
            textDecoration: 'inherit'
          }}>
            <Button
              classes={{
              label: "btn rectangle findBride"
            }}>Find the Bride</Button>
          </Link>
        </div>
        <div style={{
          marginTop: '50px'
        }}>
          Are you already registered?
          <p onClick={this.handleOpen} style={{display:'inline-block',fontSize:'16px',color:'#00c',marginLeft:'3px',cursor:'pointer'}}>
            Login</p>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose
          ={this.handleClose}>
          <SigninForm/>
        </Modal>

      </div>
    );
  }
}

export default withStyles(Styles)(HeaderHome);
