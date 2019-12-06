import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles';

class SHeader extends Component {

  render() {
    return (
      <div className="row" style={{marginRight:'0px'}}>
        <div className="col-md-4 col-5">
          <Link to="/home">
            <img className="logo" src="/assets/image/logo.png"></img>
          </Link>
        </div>
        <div className="col-md-5 col-1"></div>
        <div className="col-md-3 middle col-5"></div>
      </div>
    );
  }
}

export default SHeader;
