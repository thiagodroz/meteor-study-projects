import React, { Component } from 'react';
import Modal from 'react-modal';
import { Meteor } from 'meteor/meteor';

export default class AddLinkComponent extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);

    this.state = {
      url: '',
      isOpen: false,
      error: ''
    };
  }

  onSubmit(e) {
    const { url } = this.state;

    e.preventDefault();

    Meteor.call('links.insert', url, (err, res) => {
      if (!err) {
        this.handleModalClose();
      } else {
        this.setState({ error: err.reason });
      }
    });
  }

  onChange(e) {
    this.setState({
      url: e.target.value.trim()
    });
  }

  handleModalClose() {
    this.setState({
      isOpen: false,
      url: '',
      error: ''
    });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <button className="button" onClick={() => this.setState({ isOpen: true })}>+ Add Link</button>
        <Modal 
          isOpen={ isOpen }
          contentLabel="Add link"
          onAfterOpen={ () => this.refs.url.focus() }
          onRequestClose={ this.handleModalClose }>
          <h1>Add Link</h1>
          { this.state.error ? <p>{ this.state.error }</p> : undefined }
          <form onSubmit={ this.onSubmit }>
            <input
              type="text"
              ref="url"
              placeholder="URL"
              value={ this.state.url }
              onChange={ this.onChange } />
            <button>Add Link</button>
          </form>
          <button onClick={ this.handleModalClose }>Cancel</button>
        </Modal>
      </div>
    );
  }
}