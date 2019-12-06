import React from 'react'
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import Footer from '../Footer'

class ThankYouPage extends React.Component {
  render() {
    return (
      <div>
        <div className="row" style={{marginRight:'0px'}}>
          <div className="col-md-4 col-5">
            <Link
              to="/home"
              style={{
              textDecoration: 'inherit'
            }}>
              <img className="logo" src="/assets/image/logo.png"></img>
            </Link>
          </div>
        </div>
        <div className="register_title" style={{marginTop:'50px'}}>
          <p>Congratulation!</p>
        </div>
        <p className="thankyou_text">Thank you for creating an account with us! Please verify your email to login to your profile!&nbsp;&nbsp;
        <Link to='/home' style={{fontSize:'16px'}}>
              Back to HomePage
        </Link>
        </p>
        <Footer></Footer>
      </div>
    )
  }
}

export default withRouter(ThankYouPage);