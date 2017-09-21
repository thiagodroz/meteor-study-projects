import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Links } from '../api/links';
import LinksListItemComponent from './LinksListItem';

export default class LinksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    }
  }

  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');

      const links = Links.find().fetch();

      this.setState({ links });
    });
  }

  componentWillUnmount() {
    this.linksTracker.stop();
  }

  renderLinksListItems() {
    return this.state.links.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id);

      return <LinksListItemComponent key={ link._id } shortUrl={ shortUrl } { ...link } />
    });
  }

  render() {
    return (
      <div>
        <p>Links List</p>
        <div>
          { this.renderLinksListItems() }
        </div>
      </div>
    );
  }
}