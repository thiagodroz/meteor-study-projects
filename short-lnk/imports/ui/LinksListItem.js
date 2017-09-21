import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import Clipboard from 'clipboard';
import moment from 'moment';

export default class LinksListItemComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      justCopied: false
    };
  }

  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard.on('success', () => {
      this.setState({ justCopied: true });
      setTimeout(() => this.setState({ justCopied: false }), 1000);
    }).on('error', () => {
      alert('Unable to copy. Please manually copy the link.');
    });
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  renderStats() {
    const { visitedCount, lastVisitedAt } = this.props;
    const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
    let visitedMessage = null;

    if (typeof lastVisitedAt === 'number') {
      visitedMessage = `(visited ${ moment(lastVisitedAt).fromNow() })`;
    }

    return <p>{ visitedCount } { visitMessage } - { visitedMessage }</p>;
  }

  render() {
    const { _id, url, shortUrl, visible } = this.props;

    return (
      <div>
        <p>{ url }</p>
        <p>{ shortUrl }</p>
        { this.renderStats() }
        <button ref="copy" data-clipboard-text={ shortUrl }>
          { this.state.justCopied ? 'Copied' : 'Copy' }
        </button>
        <button onClick={() => {
            Meteor.call('links.setVisibility', _id, !visible)
          }}>
          { visible ? 'Hide' : 'Unhide' }
        </button>
      </div>
    );
  }
}