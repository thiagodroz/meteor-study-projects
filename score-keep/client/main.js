import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayerPositions } from './../imports/api/players';
import AppComponent from './../imports/ui/App';




Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find({}, {
      sort: {
        score: -1
      }
    }).fetch();

    const positionedPlayers = calculatePlayerPositions(players);
    const title = "Score Keep";

    ReactDOM.render(<AppComponent title={ title } players={ positionedPlayers } />, document.getElementById('app'));
  });
});