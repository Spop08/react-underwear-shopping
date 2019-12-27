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

}