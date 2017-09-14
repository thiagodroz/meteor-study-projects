import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import SignupComponent from '../ui/Signup';
import LoginComponent from '../ui/Login';
import LinkComponent from '../ui/Link';
import NotFoundComponent from '../ui/NotFound';

export const onAuthChange = (isAuthenticated) => {
  console.log(isAuthenticated);
};

export const routes = (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={ LoginComponent } />
        <Route path="/signup" component={ SignupComponent } />
        <Route path="/links" component={ requireAuth(LinkComponent) } />
        <Route component={ NotFoundComponent } />
      </Switch>
    </div>
  </Router>
);

function requireAuth(Component) {
  class AuthenticatedComponent extends Component {
    componentWillMount() {
      if (!Meteor.userId()) {
        this.props.history.replace('/');
      }
    }

    render() {
      return !Meteor.userId() ? null : <Component { ...this.props } />;
    }
  }

  return withRouter(AuthenticatedComponent);
}