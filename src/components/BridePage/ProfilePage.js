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

import {accountActions} from '../../_actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {portfolioService} from '../../_services';
import GiftPhoto from './GiftPhoto'
import Footer from '../Footer'
import BHeader from '../BHeader'
import Checkbox from '@material-ui/core/Checkbox';
import {FormControlLabel} from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';

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

class ProfilePage extends Component {
  static defaultProp = {
    user: {
      loggedIn: false,
      user: {
        key: null
      }
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      setOpen: false,
      loved: false,
      bras: false,
      panties: false,
      lingerie: false,
      victoria: false,
      zaful: false
    }
  }

  componentDidMount() {

    var jData = [];
    const {user, dispatch} = this.props;
    dispatch(accountActions.me(user));
    portfolioService
      .getGiftList()
      .then((response) => {
        const selectedPT1 = [];
        const selectedPT2 = [];
        const selectedPT3 = [];
        const selectedPT4 = [];
        let tCnt = 0;
        jData = response.data;
        jData.map(i => {
          switch (tCnt % 4) {
            case 0:
              selectedPT1.push(i);
              break;
            case 1:
              selectedPT2.push(i);
              break;
            case 2:
              selectedPT3.push(i);
              break;
            case 3:
              selectedPT4.push(i);
              break;
          }
          tCnt++;
        })
        
        this.setState({
          portfolios: jData,
          gifts: response.data,
          tCnt: tCnt,
          selectedPT1: selectedPT1,
          selectedPT2: selectedPT2,
          selectedPT3: selectedPT3,
          selectedPT4: selectedPT4
        })
      })
  }
  handleChange = name => event => {
    this.setState({[name]: event.target.checked});
    if (name === "loved") {
      this.state.loved = event.target.checked;
    }
    if (name === "bras") {
      this.state.bras = event.target.checked;
    }
    if (name === "panties") {
      this.state.panties = event.target.checked;
    }
    if (name === "lingerie") {
      this.state.lingerie = event.target.checked;
    }
    if (name === "victoria") {
      this.state.victoria = event.target.checked;
    }
    if (name === "zaful") {
      this.state.zaful = event.target.checked;
    }
    this.setProducts();
    console.log(this.state);
  }
  setProducts() {
    const selectedPT1 = [];
    const selectedPT2 = [];
    const selectedPT3 = [];
    const selectedPT4 = [];
    var tCnt = 0;
    this
      .state
      .portfolios
      .map(i => {
        if (
            ((i.brand_name === 'Zaful' && this.state.zaful) ||
             (i.brand_name !== 'Zaful' && this.state.victoria) ||
             (!this.state.zaful && !this.state.victoria)) &&
            ((i.lol === 2 && this.state.loved === true) ||
            (i.product_category === "Bras" && this.state.bras === true) ||
            (i.product_category === "Panties" && this.state.panties === true) ||
            (i.product_category === "Lingerie" && this.state.lingerie === true) ||
            (this.state.loved === false && this.state.bras === false && this.state.panties === false && this.state.lingerie === false))) {
          switch (tCnt % 4) {
            case 0:
              selectedPT1.push(i);
              break;
            case 1:
              selectedPT2.push(i);
              break;
            case 2:
              selectedPT3.push(i);
              break;
            case 3:
              selectedPT4.push(i);
              break;
          }
          tCnt++;
        }
      })
    this.setState({tCnt: tCnt, selectedPT1: selectedPT1, selectedPT2: selectedPT2, selectedPT3: selectedPT3, selectedPT4: selectedPT4})
  }
  render() {
    const {account} = this.props;
    const {gifts} = this.state;
    const {loved, bras, panties, lingerie, victoria, zaful} = this.state;
    return (
      <div>
        <div className="Bigcontainer">
          <BHeader></BHeader>
          <div className="row my-5">
			<div className="col-md-9">
				<div className="size_bar row">
					<div className="col-md-3 col-6 profile_logo size_bar_item">
					<p>Top Size:</p>
					{account !== undefined && <p className="size">{account.topsize}
					</p>}
					</div>
					<div className="col-md-3 col-6 profile_logo size_bar_item">
					<p>Bottom Size:</p>
					{account !== undefined && <p className="size">{account.bottomsize}
					</p>}
					</div>
					<div className="col-md-3 col-6 profile_logo size_bar_item">
					<p>Panty Size:</p>
					{account !== undefined && <p className="size">{account.pantysize}
					</p>}
					</div>
					<div className="col-md-3 col-6 profile_logo size_bar_item">
					<p>Bra Size:</p>
					{account !== undefined && <p className="size">{account.brasize}
					</p>}
					</div>
				</div>
			</div>
			<div className="sidebar_button col-md-3">
				<div className="buttonmargin">
				<Link
					to="/bride/add_friend"
					style={{
					textDecoration: 'inherit'
				}}>
					<Button
					className='btn_friend'
					classes={{
					label: "add_friend"
					}}
					style={{
					marginTop: '0px'
					}}
					type="submit">Add Friends
					<img
						style={{
						marginLeft: "20px"
					}}
						src="/assets/image/addfriend.png"></img>
					</Button>
				</Link>
				<Link
					to="/bride/product_page"
					style={{
					textDecoration: 'inherit'
				}}>
					<Button
					className='btn_friend'
					classes={{
					label: "add_friend"
					}}
					type="submit">Add Gifts
					<img
						style={{
						marginLeft: "20px"
					}}
						src="/assets/image/lingerie.png"></img>
					</Button>
				</Link>
				</div>
			</div>
		  <div className="col-md-3 col-12 order-md-12">
				
              <div className="class-filter">
                <p className="filters-spec">TYPES</p>
                <FormGroup>
                  <FormControlLabel
                    className="Ifilters"
                    control={< Checkbox className = "IAM" checked = {
                    loved
                  }
                  onChange = {
                    this.handleChange('loved')
                  }
                  style = {{color:'rgb(149, 126, 184)'}}/>}
                    label="Loved"
                    labelPlacement="start"></FormControlLabel>
                  <FormControlLabel
                    className="Ifilters"
                    control={< Checkbox className = "IAM" checked = {
                    bras
                  }
                  onChange = {
                    this.handleChange('bras')
                  }
                  style = {{color:'rgb(149, 126, 184)'}}/>}
                    label="Bras"
                    labelPlacement="start"></FormControlLabel>
                  <FormControlLabel
                    className="Ifilters"
                    control={< Checkbox className = "IAM" checked = {
                    panties
                  }
                  onChange = {
                    this.handleChange('panties')
                  }
                  style = {{color:'rgb(149, 126, 184)'}}/>}
                    label="Panties"
                    labelPlacement="start"></FormControlLabel>
                  <FormControlLabel
                    className="Ifilters"
                    control={< Checkbox className = "IAM" checked = {
                    lingerie
                  }
                  onChange = {
                    this.handleChange('lingerie')
                  }
                  style = {{color:'rgb(149, 126, 184)'}}/>}
                    label="Lingerie"
                    labelPlacement="start"></FormControlLabel>
                </FormGroup>

                <p className="filters-spec">BRANDS</p>
                <FormGroup>
                  <FormControlLabel
                    className="Ifilters"
                    control={< Checkbox className = "IAM" checked = {
                    victoria
                  }
                  onChange = {
                    this.handleChange('victoria')
                  }
                  style = {{color:'rgb(149, 126, 184)'}}/>}
                    label="Victoria Secret"
                    labelPlacement="start"></FormControlLabel>
                  <FormControlLabel
                    className="Ifilters"
                    control={< Checkbox className = "IAM" checked = {
                    zaful
                  }
                  onChange = {
                    this.handleChange('zaful')
                  }
                  style = {{color:'rgb(149, 126, 184)'}}/>}
                    label="Zaful"
                    labelPlacement="start"></FormControlLabel>
                </FormGroup>
              </div>

            </div>

            <div className="col-md-9 col-12 order-md-1">
              
              {gifts && (gifts.length === 0 ? 
              (<div className="mainProduct my-5">
                <h2>Your registry is empty!</h2>
                <h2>Remember!</h2>
                <div className="empty-subtitle">
                  <div className="row empty-detail">
                    <div className="col-md-3">
                    <img src="/assets/image/Love.png"></img>
                    </div>
                    <h5 className="col-md-9">Click the heart<br></br>for no surprises, only<br></br>get what you want! </h5>
                  </div>
                  <div className="row empty-detail">
                    <div className="col-md-3">
                    <img src="/assets/image/Like.png"></img>
                    </div>
                    <h5 className="col-md-9">Click the Like Banner to create a<br></br>list of similar items - keeping the surprise but<br></br>still to your style!</h5>
                  </div>
                </div>
              </div>)
              :(<div className="row">
                <div className="col-md-12 classFlex">
                  <h2 className="text-gift">ITEMS YOU LOVED</h2>
                </div>

                <div className="col-md-3 col-sm-6 col-12">
                  {this
                    .state
                    .selectedPT1
                    .map((i, index) => <GiftPhoto info={i} key={index}/>)}
                </div>
                <div
                  className="col-md-3 col-sm-6 col-12 photomargin">
                  {this
                    .state
                    .selectedPT2
                    .map((i, index) => <GiftPhoto info={i} key={index}/>)}
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  {this
                    .state
                    .selectedPT3
                    .map((i, index) => <GiftPhoto info={i} key={index}/>)}
                </div>
                <div
                  className="col-md-3 col-sm-6 col-12 photomargin">
                  {this
                    .state
                    .selectedPT4
                    .map((i, index) => <GiftPhoto info={i} key={index}/>)}
                </div>
              </div>))}

            </div>
            

          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {account} = state;
  console.log("account:  ", account);
  return {account: account.account};
}

export default withRouter(connect(mapStateToProps)(withStyles(Styles)(ProfilePage)));
