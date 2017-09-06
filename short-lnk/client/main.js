import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import SignupComponent from '../imports/ui/Signup';
import LoginComponent from '../imports/ui/Login';
import LinkComponent from '../imports/ui/Link';
import NotFountComponent from '../imports/ui/NotFound';

const routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={ LoginComponent } />
    <Route path="/signup" component={ SignupComponent } />
    <Route path="/links" component={ LinkComponent } />
    <Route path="*" component={ NotFountComponent } />
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});