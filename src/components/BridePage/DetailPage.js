import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import {portfolioService} from '../../_services';
import BHeader from '../BHeader'

import DeleteIcon from "@material-ui/icons/Delete";
class DetailPage extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      index_img: 0,
	  lolstate: this.props.location.state.lolstate,
	  clicked:0
    }
    this.leftChange = this
      .leftChange
      .bind(this);
    this.rightChange = this
      .rightChange
      .bind(this);
    this.addGift = this
      .addGift
      .bind(this);
    this.likeChange = this
      .likeChange
      .bind(this)
  }
  leftChange() {
    var ind = this.state.index_img;
    if (ind == 0) 
      ind = this.props.location.state.info.product_imageurl.length;
    ind--;
    this.setState({index_img: ind})
  }
  rightChange() {
    var ind = this.state.index_img;
    if (ind == this.props.location.state.info.product_imageurl.length - 1) 
      ind = -1;
    ind++;
    this.setState({index_img: ind})
  }
  addGift() {
    portfolioService
      .addGift({uniq_id: this.props.location.state.info.uniq_id})
      .then((response) => {
        console.log("ADD GIFT RESPONSE:", response);
      })
  }
  removeGift() {
    portfolioService
      .removeGift({uniq_id: this.props.location.state.info.uniq_id})
      .then((response) => {
        console.log("REMOVE GIFT RESPONSE:", response);
      })
  }
  likeChange(ind) {
    if (ind === 2) 
      this.addGift();
    if ((ind === 0 || ind === 1) && this.state.lolstate === 2) 
      this.removeGift();
    portfolioService.changeLOL({uniq_id: this.props.location.state.info.uniq_id, lol: ind})
    this.setState({lolstate: ind})
  }

  onClick(index){
	  console.log("adfads");
	  this.setState({clicked:index, index_img:index})
  }

  onBack(){
    this.props.history.go(-1);
  }

  render() {
    const {info, is_gift} = this.props.location.state;
    const {lolstate} = this.state;
    const {index_img} = this.state;
    console.log(lolstate);
    return (
      <div className="Bigcontainer">
        <BHeader/>
        <div className="row" style={{marginTop:'3rem'}}>
			<div className="col-md-1 col-3">
			{
				info.product_imageurl.map((i, index) =>
					(index === this.state.clicked) ?
					<label className="label-active">
						<img className='detail-img' src={i}/>
					</label>:
					<label className="label-inactive" onClick={this.onClick.bind(this,index)}>
					 	<img className='detail-img' src={i} />
					</label>
				)
			}
			</div>
          <Card className="col-md-7 col-9" style={{display: 'flex', marginBottom:'40px'}}>
            <img src={info.product_imageurl[index_img]} className="detail-product1"></img>
            {!is_gift && (lolstate === 1
              ? <img
                  className="product-like"
                  src="/assets/image/ULike.png"
                  onClick
                  ={() => this.likeChange(0)}></img>
              : <img
                className="product-like"
                src="/assets/image/Like.png"
                onClick
                ={() => this.likeChange(1)}></img>)}
            {!is_gift && (lolstate === 2
              ? <img
                  className="product-love"
                  src="/assets/image/Love.png"
                  onClick
                  ={() => this.likeChange(0)}></img>
              : <img
                className="product-love"
                src="/assets/image/ULove.png"
                onClick
                ={() => this.likeChange(2)}></img>)}
          </Card>
          <div className="col-md-3 col-12 product-container">
            <div  onClick={this.onBack.bind(this)} style={{cursor:'pointer'}}>
            <img style={{marginLeft:'-10px',marginTop:'-1px'}} src="/assets/image/back1.png"></img>
            <p style={{display:'inline', fontSize:'14px'}}>Back to Browsing</p>
            </div>
            <p className="product-brand">{info.brand_name}</p>
            <p className="product-name">{info.product_name}</p>
            <p className="product-price">{info.price}</p>
            <p className="product-color">Color</p>
            <div className="classFlex">
              <div className="product-thumb1">
                <img className="product-thumb" src={info.color_thumbnail}></img>
              </div>
            </div>
            <p className="product-size2">Size</p>
            <div className="classFlex product-size1">
              	{info
					.available_size
					.map(i => {
					return <p className="product-size">{i}</p>
                })
				}
			</div>
            {/* color_thumbnail */}
            <p className="product-description">Description</p>
            <div dangerouslySetInnerHTML={{ __html: info.description }}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {account: state.account.account};
}

export default withRouter(connect(mapStateToProps)(DetailPage));
