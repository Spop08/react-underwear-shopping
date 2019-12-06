import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Formsy from 'formsy-react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import ValidatedTextField from './components/ValidatedTextField';
import LoginRegisterError from "./components/LoginRegisterError";

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "70%",
    margin: 'auto',
    marginTop: theme.spacing.unit * 8
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  field: {
    marginTop: theme.spacing.unit
  },
  actions: {
    marginTop: theme.spacing.unit * 2
  }
});

class LocalUserRegister extends Component {
  static propTypes = {
    onRegister: PropTypes.func,
    registerFailed: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false
    }
    this.brasizeChange = this
      .brasizeChange
      .bind(this);
    this.pantysizeChange = this
      .pantysizeChange
      .bind(this);
    this.bottomsizeChange = this
      .bottomsizeChange
      .bind(this);
    this.topsizeChange = this
      .topsizeChange
      .bind(this);
  }
  componentDidMount() {
    this.setState({brasize: '', pantysize: '', bottomsize: '', topsize: ''});
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
  render() {
    const {classes, registerFailed, errors} = this.props;
    const {canSubmit} = this.state;
    const {brasize, pantysize, bottomsize, topsize} = this.state;
    return (
      <div className={classes.root}>
        <Formsy
          className={classes.form}
          onValid={this.enableSubmit}
          onInvalid={this.disableSubmit}
          onValidSubmit={this.submit}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={4}>
              <div>
                <ValidatedTextField
                  name="firstname"
                  autoComplete="firstname"
                  validations="minLength:2"
                  validationErrors={{
                  minLength: "Too short"
                }}
                  required
                  className={classes.field}
                  label="First Name"/>

                <ValidatedTextField
                  name="lastname"
                  autoComplete="lastname"
                  validations="minLength:2"
                  validationErrors={{
                  minLength: "Too short"
                }}
                  required
                  className={classes.field}
                  label="Last Name"/>

                <ValidatedTextField
                  name="email"
                  autoComplete="email"
                  validations="minLength:2"
                  validationErrors={{
                  minLength: "Too short"
                }}
                  required
                  className={classes.field}
                  label="Email"/>

              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl className={classes.formControl} required fullWidth>
                <InputLabel htmlFor="bra-size">Bra Size</InputLabel>
                <Select
                  onChange={this.brasizeChange}
                  value={brasize}
                  inputProps={{
                  id: 'bra-size'
                }}>
                  <MenuItem value={'XS'}>XS</MenuItem>
                  <MenuItem value={'S'}>S</MenuItem>
                  <MenuItem value={'M'}>M</MenuItem>
                  <MenuItem value={'L'}>L</MenuItem>
                  <MenuItem value={'XL'}>XL</MenuItem>
                  <MenuItem value={'32A'}>32A</MenuItem>
                  <MenuItem value={'32B'}>32B</MenuItem>
                  <MenuItem value={'32C'}>32C</MenuItem>
                  <MenuItem value={'32D'}>32D</MenuItem>
                  <MenuItem value={'32DD'}>32DD</MenuItem>
                  <MenuItem value={'32DDD'}>32DDD</MenuItem>
                  <MenuItem value={'34A'}>34A</MenuItem>
                  <MenuItem value={'34B'}>34B</MenuItem>
                  <MenuItem value={'34C'}>34C</MenuItem>
                  <MenuItem value={'34D'}>34D</MenuItem>
                  <MenuItem value={'34DD'}>34DD</MenuItem>
                  <MenuItem value={'34DDD'}>34DDD</MenuItem>
                  <MenuItem value={'36A'}>36A</MenuItem>
                  <MenuItem value={'36B'}>36B</MenuItem>
                  <MenuItem value={'36C'}>36C</MenuItem>
                  <MenuItem value={'36D'}>36D</MenuItem>
                  <MenuItem value={'36DD'}>36DD</MenuItem>
                  <MenuItem value={'36DDD'}>36DDD</MenuItem>
                  <MenuItem value={'38A'}>38A</MenuItem>
                  <MenuItem value={'38B'}>38B</MenuItem>
                  <MenuItem value={'38C'}>38C</MenuItem>
                  <MenuItem value={'38D'}>38D</MenuItem>
                  <MenuItem value={'38DD'}>38DD</MenuItem>
                  <MenuItem value={'38DDD'}>38DDD</MenuItem>

                </Select>
              </FormControl>

              <FormControl className={classes.formControl} required fullWidth>
                <InputLabel htmlFor="panty-size">Panty Size</InputLabel>
                <Select
                  onChange={this.pantysizeChange}
                  value={pantysize}
                  inputProps={{
                  id: 'panty-size'
                }}>
                  <MenuItem value={'XS'}>XS</MenuItem>
                  <MenuItem value={'S'}>S</MenuItem>
                  <MenuItem value={'M'}>M</MenuItem>
                  <MenuItem value={'L'}>L</MenuItem>
                  <MenuItem value={'XL'}>XL</MenuItem>
                </Select>
              </FormControl>

              <FormControl className={classes.formControl} required fullWidth>
                <InputLabel htmlFor="bottom-size">Bottom Size</InputLabel>
                <Select
                  onChange={this.bottomsizeChange}
                  value={bottomsize}
                  inputProps={{
                  id: 'bottom-size'
                }}>
                  <MenuItem value={'XS'}>XS</MenuItem>
                  <MenuItem value={'S'}>S</MenuItem>
                  <MenuItem value={'M'}>M</MenuItem>
                  <MenuItem value={'L'}>L</MenuItem>
                  <MenuItem value={'XL'}>XL</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl className={classes.formControl} required fullWidth>
                <InputLabel htmlFor="top-size">Top Size</InputLabel>
                <Select
                  onChange={this.topsizeChange}
                  value={topsize}
                  inputProps={{
                  id: 'top-size'
                }}>
                  <MenuItem value={'XS'}>XS</MenuItem>
                  <MenuItem value={'S'}>S</MenuItem>
                  <MenuItem value={'M'}>M</MenuItem>
                  <MenuItem value={'L'}>L</MenuItem>
                  <MenuItem value={'XL'}>XL</MenuItem>
                </Select>
              </FormControl>
              <ValidatedTextField
                type="password"
                name="password"
                autoComplete="new-password"
                validations="minLength:2"
                validationErrors={{
                minLength: "Too short"
              }}
                required
                className={classes.field}
                label="Create a password"/>

              <ValidatedTextField
                type="password"
                name="repeated_password"
                autoComplete="new-password"
                validations="equalsField:password"
                validationErrors={{
                equalsField: "Needs to be the same password as above"
              }}
                required
                className={classes.field}
                label="Enter password again"/>
            </Grid>

          </Grid>

          {registerFailed && <LoginRegisterError message={errors.email}/>
}

          {registerFailed && <LoginRegisterError message={errors.password1}/>
}

          <div className="header_title">
            <Button
              classes={{
              label: "createAccoSub"
            }}
              type="submit">Create Account</Button>

          </div>

        </Formsy>
      </div>
    );
  }

  disableSubmit = () => {
    this.setState({canSubmit: false})
  };

  enableSubmit = () => {
    this.setState({canSubmit: true})
  };

  submit = model => {
    console.log("MODEL:", model);
    model.brasize = this.state.brasize;
    model.pantysize = this.state.pantysize;
    model.bottomsize = this.state.bottomsize;
    model.topsize = this.state.topsize;
    if (this.props.onRegister) {
      this
        .props
        .onRegister(model);
    }
  }

}

function mapStateToProps(state) {
  const {registering, errors} = state.registration;
  console.log("Register Error:", state.registration);
  return {loading: registering, errors: errors};
}

export default connect(mapStateToProps)(withStyles(styles)(LocalUserRegister));
