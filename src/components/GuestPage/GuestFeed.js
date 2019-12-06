import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {withRouter} from 'react-router';
import {portfolioService} from '../../_services';
import Photo from './Photo'
import Footer from '../Footer'
import Header from '../Header'
import Checkbox from '@material-ui/core/Checkbox';
import {FormControlLabel} from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import {FlapperSpinner} from "react-spinners-kit";

class GuestFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  gifts: '',
	  loved: false,
    bras: false,
    panties: false,
    lingerie: false,
    victoria: false,
    zaful: false,
    loading: true,
    }
  }

  componentDidMount() {
    console.log(this.props.location.state.account.email);
    portfolioService
    .getBrideList({email: this.props.location.state.account.email})
    .then((response) => {
      const selectedPT1 = [];
      const selectedPT2 = [];
      const selectedPT3 = [];
      const selectedPT4 = [];
      let tCnt = 0;
      let jData = response.data;
      console.log(jData);
      jData.sort((a, b) => b.lol - a.lol);
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
      console.log("I am loading", this.state.loading);
      this.setState({loading:false, portfolios:jData, gifts: response.data, tCnt: tCnt, selectedPT1: selectedPT1, selectedPT2: selectedPT2, selectedPT3: selectedPT3, selectedPT4: selectedPT4})
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
    const {account} = this.props.location.state;
    const {loved, bras, panties, lingerie, victoria, zaful,loading} = this.state;
    console.log("STATE",loading);
    const {gifts} = this.state;
    return (
      <div>
        <div className="Bigcontainer">
          <div className="row">
            <div className="col-md-2 col-5">
				<Link to='/home'>
              		<img className="logo" src="/assets/image/logo.png"></img>
				</Link>
            </div>
            <div className="col-md-7 col-7 row">
              {account !== undefined && <h2 style={{margin:'auto'}}>{account.firstname} {account.lastname}'s Registry</h2>}
            </div>
            <div className="col-md-3 userMark"></div>
          </div>
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
			<div className="col-md-3"></div>

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
            <FlapperSpinner size={50} color="rgb(149, 126, 184)" loading={loading}/> {!loading && <div>
              {gifts && !gifts.length && <div className="mainProduct my-5">
                <h2>There is no gift</h2>
              </div>}
              {gifts && gifts.length && 
              <div className="row">
                <div className="col-md-12 classFlex">
                  <h2 className="text-gift"></h2>
                </div>
        
                
                <div className="desktop-responsive">
                  <div className="col-md-3 col-sm-6 col-12">
                  {this
                    .state
                    .selectedPT1
                    .map((i, index) => <Photo info={i} key={index} is_gift={true} account={account}/>)}
                  </div>
                  <div
                  className="col-md-3 col-sm-6 col-12 photomargin">
                  {this
                    .state
                    .selectedPT2
                    .map((i, index) => <Photo info={i} key={index} is_gift={true} account={account}/>)}
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                  {this
                    .state
                    .selectedPT3
                    .map((i, index) => <Photo info={i} key={index} is_gift={true} account={account}/>)}
                  </div>
                  <div
                  className="col-md-3 col-sm-6 col-12 photomargin">
                  {this
                    .state
                    .selectedPT4
                    .map((i, index) => <Photo info={i} key={index} is_gift={true} account={account}/>)}
                  </div>
                </div>
                <div className='mobile-responsive'>
                  <div className="col-12">
                  {this
                    .state
                    .portfolios
                    .map((i, index) => <Photo info={i} key={index} is_gift={true} account={account}/>)}
                  </div>
                </div>
                </div>}
              </div>}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(GuestFeed);
