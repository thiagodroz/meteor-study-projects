import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TitleBarComponent from './TitleBar';
import AddPlayerComponent from './AddPlayer';
import PlayerListComponent from './PlayerList';

export default class AppComponent extends Component {
  render() {
    return (
      <div>
        <TitleBarComponent title={ this.props.title } />

        <div className="wrapper">
          <PlayerListComponent players={ this.props.players } />
          <AddPlayerComponent />
        </div>
      </div>
    );
  }
}

AppComponent.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};