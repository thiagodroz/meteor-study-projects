import React, { Component } from 'react';
import Modal from 'react-modal';
import { Meteor } from 'meteor/meteor';

export default class AddLinkComponent extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      url: '',
      isOpen: false
    };
  }

  onSubmit(e) {
    const { url } = this.state;

    e.preventDefault();

    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
        if (!err) {
          this.setState({ url: '', isOpen });
        }
      });
    }
  }

  onChange(e) {
    this.setState({
      url: e.target.value.trim()
    });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ isOpen: true })}>+ Add Link</button>
        <Modal isOpen={ isOpen } contentLabel="Add link">
          <p>Add Link</p>
          <form onSubmit={ this.onSubmit }>
            <input
              type="text"
              ref="url"
              placeholder="URL"
              value={ this.state.url }
              onChange={ this.onChange } />
            <button>Add Link</button>
          </form>
          <button onClick={() => {this.setState({ isOpen: false, url: '' })}}>Cancel</button>
        </Modal>
      </div>
    );
  }
}