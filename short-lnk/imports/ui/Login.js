import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      logged: false
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const email = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();

    Meteor.loginWithPassword({ email }, password, (err) => {
      if (err) {
        this.setState({ error: 'Unable to login. Check email and password.' });
      } else {
        this.setState({ error: '', logged: true });
      }
    });
  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Short Lnk</h1>

          { this.state.error ? <p>{ this.state.error }</p> : undefined }

          <form onSubmit={ this.onSubmit.bind(this) } noValidate className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="Email" />
            <input type="password" ref="password" name="password" placeholder="Password" />
            <button className="button">Login</button>
          </form>

          <Link to="/signup">Need an account?</Link>
        </div>
        { this.state.logged ? <Redirect to="/links" push /> : null }
      </div>
    );
  }
}