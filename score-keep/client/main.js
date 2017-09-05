import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';
import AppComponent from './../imports/ui/App';


const title = "Score Keep";

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find({}, {
      sort: {
        score: -1
      }
    }).fetch();

    ReactDOM.render(<AppComponent title={ title } players={ players } />, document.getElementById('app'));
  });
});