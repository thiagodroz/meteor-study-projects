import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlayerComponent from './../../imports/ui/Player';

export default class PlayerListComponent extends Component {
  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Add your first player ;)</p>
        </div>
      );
    }

    return this.props.players.map((player) => {
      return <PlayerComponent key={ player._id } player={ player } />;
    });
  }

  render() {
    return (
      <div>
        { this.renderPlayers() }
      </div>
    );
  }
}

PlayerListComponent.propTypes = {
  players: PropTypes.array.isRequired
};