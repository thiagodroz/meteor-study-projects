import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class SignupComponent extends Component {
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

    if (password.length < 9) {
      return this.setState({ error: 'Password must be more than 8 characters long' });
    }

    Accounts.createUser({ email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', logged: true });
      }
    });
  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Join Short Lnk</h1>

          { this.state.error ? <p>{ this.state.error }</p> : undefined }

          <form onSubmit={ this.onSubmit.bind(this) }  noValidate className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="Email" />
            <input type="password" ref="password" name="password" placeholder="Password" />
            <button className="button">Create Account</button>
          </form>

          <Link to="/">Already have an account?</Link>
        </div>
        { this.state.logged ? <Redirect to="/links" push /> : null }
      </div>
    );
  }
}