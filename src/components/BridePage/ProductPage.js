import React, {Component} from 'react';
import {accountActions} from '../../_actions';
import {portfolioService} from '../../_services';
import {connect} from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import {FormControlLabel} from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FeedPhoto from './FeedPhoto';
import {FlapperSpinner} from "react-spinners-kit";
import BHeader from '../BHeader'
import {uid} from 'react-uid'
import { MapsZoomOutMap } from 'material-ui/svg-icons';

class ProductPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      open: false,
      setOpen: false,
      loved: false,
      bras: false,
      panties: false,
      lingerie: false,
      victoria: false,
      zaful: false,
      selectedPT1: [],
      selectedPT2: [],
      selectedPT3: [],
      selectedPT4: [],
      tCnt: 0
    }
    this.onChangeLOL = this.onChangeLOL.bind(this);
  }

  componentDidMount() {
    portfolioService
      .list()
      .then((response) => {
        this.setState({portfolios: response.data, loading: false})
        this.setProducts();
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
  }
  setProducts() {
    const selectedPT1 = [];
    const selectedPT2 = [];
    const selectedPT3 = [];
    const selectedPT4 = [];
	var tCnt = 0;
	this.state.portfolios.sort((a, b) => 0.5 - Math.random());
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
  
  handleLearn() {
    const cnt = this.state.Cnt;
    this.setState({
      Cnt: cnt + 12
    });
    this.state.Cnt = cnt + 12;
    this.setProducts();
  }

  onChangeLOL(index, lol) {
	var temp = this.state.portfolios;
	temp[index].lol = lol;
  }

  render() {
    const {loved, bras, panties, lingerie, victoria, zaful} = this.state;
    const {loading} = this.state;
    return (
      <div className="Bigcontainer">

        <BHeader/>
        <div className="row my-5">

			<div className="col-md-3 col-12 order-md-12 class-filter">
				<p className="filters">TYPES</p>
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
			<div className="col-md-9 col-12 order-md-1">
				<FlapperSpinner size={50} color="rgb(149, 126, 184)" loading={loading}/> {!loading && <div>
				<div className='desktop-responsive'>
					<div className="col-md-3 col-sm-6 col-12">
					{this
						.state
						.selectedPT1
						.map((i, index) => <FeedPhoto onChangeLOL={this.onChangeLOL} photo_ind= {4 * index} info={i} key={uid(i)}/>)}
					</div>
					<div
					className="col-md-3 col-sm-6 col-12 photomargin">
					{this
						.state
						.selectedPT2
						.map((i, index) => <FeedPhoto onChangeLOL={this.onChangeLOL} photo_ind= {4 * index + 1} info={i} key={uid(i)}/>)}
					</div>
					<div className="col-md-3 col-sm-6 col-12">
					{this
						.state
						.selectedPT3
						.map((i, index) => <FeedPhoto onChangeLOL={this.onChangeLOL} photo_ind= {4 * index + 2} info={i} key={uid(i)}/>)}
					</div>
					<div
					className="col-md-3 col-sm-6 col-12 photomargin">
					{this
						.state
						.selectedPT4
						.map((i, index) => <FeedPhoto onChangeLOL={this.onChangeLOL} photo_ind= {4 * index + 3} info={i} key={uid(i)}/>)}
					</div>
				</div>
				<div className='mobile-responsive'>
					<div className="col-12">
					{this
					.state
					.portfolios
					.map((i, index) => <FeedPhoto onChangeLOL={this.onChangeLOL} photo_ind= {index} info={i} key={uid(i)}/>)}
					</div>
				</div>
				</div>}

			</div>
          

        </div>
      </div>
    );
  }
}

export default ProductPage;
