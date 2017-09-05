import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Players } from './../../imports/api/players';

export default class PlayerComponent extends Component {
  increasePlayerScore(player, increaseBy) {
    Players.update({_id: player._id}, {$inc: {score: increaseBy}});
  }

  render() {
    const player = this.props.player;

    return (
      <div>
        <div key={player._id} className="item">
          <div className="player">
            <div>
              <h3 className="player__name">{player.name}</h3>
              <p className="player__stats">{player.score}</p>
            </div>
            <div className="player__actions">
              <button className="button button--round" onClick={() => this.increasePlayerScore(player, 1)}>+1</button>
              <button className="button button--round" onClick={() => this.increasePlayerScore(player, -1)}>-1</button>
              <button className="button button--round" onClick={() => Players.remove({ _id: player._id }) }>X</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PlayerComponent.propTypes = {
  player: PropTypes.object.isRequired
};