import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';

import SignupComponent from '../imports/ui/Signup';
import LoginComponent from '../imports/ui/Login';
import LinkComponent from '../imports/ui/Link';
import NotFoundComponent from '../imports/ui/NotFound';

const routes = (
  <Router history={ browserHistory }>
    <div>
      <Switch>
        <Route path="/" exact component={ LoginComponent } />
        <Route path="/signup" component={ SignupComponent } />
        <Route path="/links" component={ LinkComponent } />
        <Route component={ NotFoundComponent } />
      </Switch>
    </div>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});