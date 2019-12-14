import React, {Component} from 'react';
import {accountActions} from '../../_actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Footer from '../Footer'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import BHeader from '../BHeader'
import Button from '@material-ui/core/Button';
import {portfolioService} from '../../_services';

import {withStyles} from '@material-ui/core/styles';

const useStyles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
	minWidth: 120,
	marginBottom:'10px'
  },
});

class EditProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
    this.cancelEdit = this
      .cancelEdit
      .bind(this);

    this.firstnameChange = this
      .firstnameChange
      .bind(this);
    this.lastnameChange = this
      .lastnameChange
      .bind(this);
    this.brasizeChange = this
      .brasizeChange
      .bind(this);
    this.bottomsizeChange = this
      .bottomsizeChange
      .bind(this);
    this.pantysizeChange = this
      .pantysizeChange
      .bind(this);
    this.topsizeChange = this
      .topsizeChange
      .bind(this);
  }
  componentDidMount() {
    console.log(this.props.account);
    const account = this.props.location.state.account;
    this.setState({
      firstname: account.firstname,
      lastname: account.lastname,
      brasize: account.brasize,
      pantysize: account.pantysize,
      bottomsize: account.bottomsize,
      topsize: account.topsize
    });
  }
  firstnameChange(event) {
    this.setState({firstname: event.target.value});
  }

  lastnameChange(event) {
    this.setState({lastname: event.target.value});
  }

  brasizeChange(event) {
    this.setState({brasize: event.target.value});
  }

  pantysizeChange(event) {
    this.setState({pantysize: event.target.value});
  }

  bottomsizeChange(event) {
    this.setState({bottomsize: event.target.value});
  }

  topsizeChange(event) {
    this.setState({topsize: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const {
      firstname,
      lastname,
      brasize,
      bottomsize,
      topsize,
      pantysize
    } = this.state;
    console.log(this.state);
    portfolioService
      .editProfile({
      firstname: firstname,
      lastname: lastname,
      brasize: brasize,
      pantysize: pantysize,
      bottomsize: bottomsize,
      topsize: topsize
    })
      .then((response) => {
        if(response.status === 200)
          this.props.history.push('/portfolio')
      })

  }
}