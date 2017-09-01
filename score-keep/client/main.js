import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';
import TitleBarComponent from './../imports/ui/TitleBar';
import AddPlayerComponent from './../imports/ui/AddPlayer';

const title = "Score Keep";

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} points.
        <button onClick={() => increasePlayerScore(player, 1)}>+1</button>
        <button onClick={() => increasePlayerScore(player, -1)}>-1</button>
        <button onClick={() => Players.remove({ _id: player._id }) }>X</button>
      </p>
    );
  });
};

const increasePlayerScore = (player, increaseBy) => {
  Players.update({_id: player._id}, {$inc: {score: increaseBy}});
};

const handleSubmit = (e) => {
  const playerName = e.target.playerName.value;

  e.preventDefault();

  if (playerName) {
    e.target.playerName.value = '';
  }

  Players.insert({
    name: playerName,
    score: 0
  });
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();

    let jsx = (
      <div>
        <TitleBarComponent title={title} />
        {renderPlayers(players)}
        <AddPlayerComponent />
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});