import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginComponent extends Component {
  render() {
    return (
      <div>
        <h1>Login to Short Lnk</h1>
        login form here
        <Link to="/signup">Create an account?</Link>
      </div>
    );
  }
}