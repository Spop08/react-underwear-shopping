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
    toggleHover() {
        this.setState({hover: !this.state.hover});
        console.log("HOVER!!!!!!!!!!!!!!!");
    }
    onDetail() {
        
        this.props.history.push({
            pathname:'/bride/detail_page',
            state: {lolstate:this.props.info.lol, info:this.props.info, is_gift:0}
        });
    }
    render(){
        const lol = this.state.lol
        const { ...props } = this.props;
        return(
                <Card className="product-list" {...props} >
                    <img src={this.props.info.product_imageurl[0]} style={{width:'100%'}}></img>
                    <div className="product-opac">
                        <p>{this.props.info.product_name}</p>
                        <p>{this.props.info.price}</p>
                    </div>

                    <div className="product-feed">
                        {(lol === 1 ? <img className="product-like hide-hover" src="/assets/image/ULike.png"></img>
                        :(lol === 2 && <img className="product-love hide-hover" src="/assets/image/Love.png"></img>))}
                        {(lol === 1 ? <img className="product-like show-hover" src="/assets/image/ULike.png" onClick ={() => this.lolChange(0)}></img>
                                    : <img className="product-like show-hover" src="/assets/image/Like.png" onClick ={() => this.lolChange(1)}></img>)}
                        {(lol === 2 ? <img className="product-love show-hover" src="/assets/image/Love.png" onClick ={() => this.lolChange(0)}></img>
                                    :<img className="product-love show-hover" src="/assets/image/ULove.png" onClick ={() => this.lolChange(2)}></img>)}
                    </div>
                    <Button
					className='btn_friend details'
					classes={{
					label: "add_friend"
					}}
					style={{
					marginTop: '0px'
                    }}
                    onClick = {this.onDetail}>
                        DETAILS > > >
                    </Button>
                </Card>
        )
    }
}

export default withRouter(FeedPhoto);