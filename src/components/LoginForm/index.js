import React, { Component } from 'react';
import HomePage from "../HomePage"
import SigninForm from "../SigninForm"

import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import DialogContent from '@material-ui/core/DialogContent';

class LoginForm extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      setOpen: false
    }
  }
  handleClose(){
    this.setState({open:false});
  }
  render() {
    return (
        <div>
            <HomePage />
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose ={this.handleClose}
            >
              <DialogContent style={{margin:"auto", marginTop:"50px"}}>
                <Grid container spacing={24}>
                  <Grid item sm={4} xs={12}></Grid>
                  <Grid item sm = {4} xs={12}>
                    <SigninForm />
                  </Grid>
                  <Grid item sm={4} xs={12}></Grid>
                </Grid>
              </DialogContent>
            </Modal>
        </div>
      );
    }
}

export default LoginForm;
