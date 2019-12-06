import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import { portfolioService } from '../../_services';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import {withStyles} from '@material-ui/core/styles';
const useStyles = {
  avatar: {
    backgroundColor: '#e9dff8',
    color: '#656f7c9c'
  },
  listitem: {
    marginBottom: '20px'
  },
  dialogCustomizedWidth: {
    'max-width': '450px'
  }
};
class GiftPhoto extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            hover: true,
            lol: this.props.info.lol,
            open: false
        }
        this.removeGift = this.removeGift.bind(this);
        this.onDetail = this.onDetail.bind(this);
        this.handleAgree = this.handleAgree.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    onDetail() {
        this.props.history.push({
            pathname:'/bride/detail_page',
            state: {lolstate:this.props.info.lol, info:this.props.info, is_gift:1}
        });
    }
    removeGift() {
        this.setState({open: true})        
    }
    handleClose() {
        this.setState({open: false})
    }
    handleAgree() {
        this.setState({open: false})
        portfolioService.changeLOL({uniq_id:this.props.info.uniq_id, lol:0})
        portfolioService
        .removeGift({uniq_id: this.props.info.uniq_id})
        .then((response) => {
          console.log("REMOVE GIFT RESPONSE:", response);
          window.location.reload();
        })
    }
    render(){
        const classes = this.props.classes;
        return(
                <Card className="product-list">
                    <img src={this.props.info.product_imageurl[0]} style={{width:'100%'}}></img>
                    <div className="product-opac">
                        <p>{this.props.info.product_name}</p>
                        <p>{this.props.info.price}</p>
                    </div>

                    <div className="product-feed">
                        <img className="product-love show-hover" src="/assets/image/Love.png" onClick ={this.removeGift}></img>
                    </div>
                    <Button
					className='btn_friend details'
					classes={{
					label: "add_friend"
					}}
					style={{
					marginTop: '0px'
					}}
					onClick = {this.onDetail}>DETAILS > > ></Button>
                <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
                classes={{
                paperFullWidth: classes.dialogCustomizedWidth
            }}>
                <DialogTitle id="alert-dialog-title">{"Do you want to remove this Gift?"}</DialogTitle>
                <DialogActions>
                <Button onClick={this.handleAgree} color="primary" autoFocus>
                    Agree
                </Button>
                <Button onClick={this.handleClose} color="primary">
                    Disagree
                </Button>
                </DialogActions>
            </Dialog>
                </Card>
        )
    }
}

export default withRouter(withStyles(useStyles)(GiftPhoto));