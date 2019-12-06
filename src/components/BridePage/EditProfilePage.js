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
  cancelEdit() {
    this
      .props
      .history
      .go(-1);
  }
  render() {
    const {
      firstname,
      lastname,
      brasize,
      pantysize,
      bottomsize,
      topsize
    } = this.state;
    const {classes} = this.props;
    return (
      <div>
        <div className="Bigcontainer">
          <BHeader></BHeader>
          <div className="row" style={{
            marginTop: '50px'
          }}>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h2
                style={{
                marginBottom: '60px',
                display: 'flex',
                justifyContent: 'center'
              }}>Profile</h2>
              <form onSubmit={e => this.handleSubmit(e)}>
                <FormControl className='class-input'>
                  <InputLabel htmlFor="firstname">First Name*</InputLabel>
                  <Input
                    required
                    className="inputEmail"
                    id="firstname"
                    value={firstname}
                    defaultValue='Hello'
                    onChange={this.firstnameChange}/>
                </FormControl>

                <FormControl className='class-input'>
                  <InputLabel htmlFor="lastname">Last Name*</InputLabel>
                  <Input
                    required
                    className="inputEmail"
                    id="lastname"
                    value={lastname}
                    defaultValue='Hello'
                    onChange={this.lastnameChange}/>
                </FormControl>

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

                <div className="classFlex">
                  <Button className='col-md-5 pinkButton1' type="submit">Save
                  </Button>
                  <div className='col-md-2'></div>
                  <Button className='col-md-5 pinkButton1' onClick={this.cancelEdit}>Cancel
                  </Button>
                </div>
              </form>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )

  }
}
function mapStateToProps(state) {

  return {account: state.account.account};
}

export default withRouter(connect(mapStateToProps)(withStyles(useStyles)(EditProfilePage)));
// export default withRouter(connect(mapStateToProps)(EditProfilePage));