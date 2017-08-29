import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    let name = 'Mike';
    let title = "Score Keep";
    let jsx = (
        <div>
            <h1>{title}</h1>
            <p>Hello {name}</p>
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});