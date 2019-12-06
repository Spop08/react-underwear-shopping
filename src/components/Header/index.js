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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      setOpen: false
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
    const {classes} = this.props;
    return (
      <div>
        <div className="row" style={{marginRight:'0px'}}>
          <div className="col-md-4 col-5">
            <Link to='/home'>
            <img className="logo" src="/assets/image/logo.png"></img></Link>
          </div>
          <div className="col-md-5 col-1"></div>
          <div className="col-md-3 middle col-5">
            <Button
              classes={{
              label: "btn rectangle login"
            }}
            style={{marginTop:'26px'}}
              onClick={this.handleOpen}>Login</Button>
          </div>

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

export default withStyles(Styles)(Header);
