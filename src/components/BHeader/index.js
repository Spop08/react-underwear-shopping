import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {accountActions} from '../../_actions';
import {accountService} from '../../_services'
import {Link} from 'react-router-dom';

class BHeader extends React.Component {
  constructor(props)
  {
    super(props)
    this.signOut = this
      .signOut
      .bind(this)
    this.handleProfile = this
      .handleProfile
      .bind(this)
    this.handleFriends = this
      .handleFriends
      .bind(this)
      this.settings = this
        .settings
        .bind(this)
  }

  componentDidMount() {
    const {user, dispatch} = this.props;
    dispatch(accountActions.me(user));
  }
  handleProfile() {
    this
      .props
      .history
      .push('/portfolio');
    
  }
  handleFriends() {
    this
      .props
      .history
      .push({pathname: '/bride/edit_friends', state: {}})
  }
  signOut() {
    accountService.logout();
    this
      .props
      .history
      .push('/home');
  }
  settings() {
    this
      .props
      .history
      .push({
        pathname: '/bride/edit_profile',
        state: {
          account: this.props.account
        }
      });
  }

  render() {
    const {account} = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-5">
          <Link to="/portfolio">
            <img className="prologo" src="/assets/image/logo.png"></img>
          </Link>
        </div>
        <div className="col-md-5 col-1"></div>
        <div className="col-md-3 userMark col-6">
          <div class="dropdown-toggle" data-toggle="dropdown">
            {account !== undefined && <p className="userName">{account.firstname} {account.lastname}
            </p>}
            <img className="prouser" src="/assets/image/profileicon.png"></img>
          </div>
          <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button" onClick={this.handleProfile}>Profile</button>
            <button class="dropdown-item" type="button" onClick={this.handleFriends}>Friends</button>
            <button class="dropdown-item" type="button" onClick={this.settings}>Settings</button>
            <button class="dropdown-item" type="button" onClick={this.signOut}>Sign Out</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {account: state.account.account};
}

export default withRouter(connect(mapStateToProps)(BHeader));
