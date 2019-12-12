import React, {Component} from 'react';
import {portfolioService} from '../../_services';
import Checkbox from '@material-ui/core/Checkbox';
import {FormControlLabel} from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FeedPhoto from './FeedPhoto';
import {FlapperSpinner} from "react-spinners-kit";
import BHeader from '../BHeader'
import {uid} from 'react-uid'

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
        
      </div>
    );
  }
}

export default ProductPage;
