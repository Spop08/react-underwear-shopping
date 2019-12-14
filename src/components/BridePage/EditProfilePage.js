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
