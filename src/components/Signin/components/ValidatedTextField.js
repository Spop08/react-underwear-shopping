import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {withFormsy, propTypes as formsyPropTypes} from 'formsy-react';
import PropTypes from 'prop-types'

class ValidatedTextField extends Component {

  static propTypes = {
    ...formsyPropTypes,
    type: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    autoComplete: PropTypes.string
  };
