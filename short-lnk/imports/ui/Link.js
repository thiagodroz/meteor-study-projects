import React, { Component } from 'react';
import { browserHistory } from 'react-router-dom';

export default class LinkComponent extends Component {
  onLogout() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}