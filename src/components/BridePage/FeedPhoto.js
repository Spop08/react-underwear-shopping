import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import { portfolioService } from '../../_services';

class FeedPhoto extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
        this.toggleHover = this.toggleHover.bind(this);
        this.lolChange = this.lolChange.bind(this);
        this.onDetail = this.onDetail.bind(this);
    }
    componentDidMount(){
        this.setState({lol:this.props.info.lol})
    }

    lolChange(state) {
        console.log(this.props.info.uniq_id);
        if(this.state.lol === 2 && (state === 0 || state === 1))
        {
            portfolioService
            .removeGift({uniq_id: this.props.info.uniq_id})
            .then((response) => {
              console.log("REMOVE GIFT RESPONSE:", response);
            })     
        }
        if(state === 2)
        {
            portfolioService
            .addGift({uniq_id: this.props.info.uniq_id})
            .then((response) => {
              console.log("ADD GIFT RESPONSE:", response);
            })
        }
        this.setState({lol: state});
        this.props.onChangeLOL(this.props.photo_ind, state);
        portfolioService.changeLOL({uniq_id:this.props.info.uniq_id, lol:state})
        
    }
}