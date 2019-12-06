import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import Formsy from 'formsy-react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

import {withRouter} from 'react-router';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
		flexGrow: 1,
		width: "70%",
		margin: 'auto',
		marginTop: theme.spacing.unit * 8
	},
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  field: {
    marginTop: theme.spacing.unit
  },
  actions: {
    marginTop: theme.spacing.unit * 2
  }
});


class MainBody extends Component {
  static propTypes = {
    onRegister: PropTypes.func,
    registerFailed: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.createAccount = this.createAccount.bind(this)

    this.state = {
      canSubmit: false
    }
  }
  createAccount(){
    this.props.history.push('/frontend/register');
  }
  render() {
    const {
      classes,
      registerFailed
    } = this.props;
    const {canSubmit} = this.state;
    return (
        <div className={classes.root}>
          <Formsy className={classes.form}
                  onValid={this.enableSubmit} onInvalid={this.disableSubmit}
                  onValidSubmit={this.submit}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={7}>
                    <div className="main-content">
                        <p className="mainbody_title">Start liking items to personalize your registry feed!</p>
                        <p className="mainbody_text">Like items by clicking the ‘like’ bookmark when scrolling through products to create a personalized registry for you! Your guests will be able to view and purchase from this list curated to your style! With this you will be able to still get what you like, but still get surprised!</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <img className="group_image" src="/assets/image/Group.png"></img>
                </Grid>

            </Grid>
            
            <Grid container spacing={24} className="web-based-item">
                
                <Grid item xs={12} sm={5}>
                    <img className="group_image" src="/assets/image/Group1.png"></img>
                </Grid>

                <Grid item xs={12} sm={7}>
                    <div className="main-content">
                        <p className="mainbody_title">Love items you must have!</p>
                        <p className="mainbody_text">Want to know exactly what you’re getting? Love items by clicking the heart icon on the product, these exact items will go onto your registry for guests to purchase! Loving the item shows your guest that this is an item you personally have selected!</p>
                    </div>
                </Grid>

            </Grid>
            <Grid container spacing={24}  className="mobile-based-item">
                <Grid item xs={12} sm={7}>
                    <div className="main-content">
                        <p className="mainbody_title">Love items you must have!</p>
                        <p className="mainbody_text">Want to know exactly what you’re getting? Love items by clicking the heart icon on the product, these exact items will go onto your registry for guests to purchase! Loving the item shows your guest that this is an item you personally have selected!</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <img className="group_image" src="/assets/image/Group1.png"></img>
                </Grid>

            </Grid>

            

          </Formsy>
            <div style={{borderTop: "solid 1px #d7d7d7", margin:"auto", marginTop: "50px"}}>
                <Formsy className={classes.form}>
                    <div className="main-content" style={{textAlign:"center", marginTop:"80px"}}>
                        <p className="mainbody_title">Invite your guests by text or email on your account page!</p>
                        <p className="mainbody_text">You can invite your friends by sending a secure link to their email or phone. If your more traditional and want to send a card out. Your friends can find your registry by entering in your email! To keep your registry private only those with matching emails and phone numbers from your invites will be allowed to see your registry!</p>
                    </div>

                    <div className="header_title">
                        <Button classes={{label:"createAccoSub"}} onClick={this.createAccount}
                                >Get Started Now!</Button>
                    </div>
                            
                </Formsy>
          </div>
        </div>
    );
  }

}

export default withRouter(withStyles(styles)(MainBody));
