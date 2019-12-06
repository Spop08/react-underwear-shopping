import React, {Component} from 'react';
import './App.css';
import * as firebase from 'firebase';

import Header from './components/Header';
import HomePage from './components/HomePage';
import SignupForm from './components/SignupForm';
import RegisterForm from './components/RegisterForm';
import SigninForm from './components/SigninForm';
import LoginForm from './components/LoginForm';
import BridePage from './components/BridePage';
import ProductPage from './components/BridePage/ProductPage';
import DetailPage from './components/BridePage/DetailPage'
import FriendPage from './components/BridePage/FriendPage'
import GuestPage from './components/GuestPage'
import GuestFeed from './components/GuestPage/GuestFeed'
import GuestDetail from './components/GuestPage/DetailPage'
import EditProfilePage from './components/BridePage/EditProfilePage'
import ThankYouPage from './components/ThankYouPage'
import {Router, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {history} from './_helpers';
import EditFriendsPage from './components/BridePage/EditFriendsPage';

class App extends Component {
  constructor(props) {
    super(props);

    const {dispatch} = this.props;
    history.listen((location, action) => {
      // clear alert on location change dispatch(alertActions.clear());
    });
  }
  render() {
    const {user} = this.props;
    return (
      <Router history={history} basename={process.env.SUBDIRECTORY}>
        <div className="page">
          <Route
            exact
            path="/"
            render={() => (user
            ? <Redirect to="/portfolio"/>
            : <HomePage/>)}/>
          <Route path="/portfolio" component={BridePage}/>
          <Route path="/frontend/login" component={LoginForm}/>
          <Route path='/home' component={HomePage}/>
          <Route path='/guest' component={GuestPage}/>
          <Route path='/guest_feed' component={GuestFeed}/>
          <Route path='/guest_detail' component={GuestDetail}/>
          <Route path="/frontend/register" component={RegisterForm}/>
          <Route path="/frontend/thankyou" component={ThankYouPage}/>
          <Route path="/bride/product_page" component={ProductPage}/>
          <Route path="/bride/detail_page" component={DetailPage}/>
          <Route path="/bride/add_friend" component={FriendPage}/>
          <Route path="/bride/edit_profile" component={EditProfilePage}/>
          <Route path="/bride/edit_friends" component={EditFriendsPage}/>
          
          
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const {authentication} = state;
  return {user: authentication.user};
  
}

export default connect(mapStateToProps)(App);
