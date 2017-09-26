import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class PrivateHeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);

    this.state = { logout: false };
  }

  logout() {
    Accounts.logout();
    this.setState({ logout: true });
  }

  render () {
    return (
      <div className="header">
        <div className="header__content">
          <h1 className="header__title">{ this.props.title }</h1>
          <button className="button button--link-text" onClick={ this.logout }>Logout</button>
        </div>
        { this.state.logout ? <Redirect to="/" push /> : null }
      </div>  
    );
  }
};