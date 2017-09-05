import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleBarComponent extends Component {
    render() {
        return (
          <div className="title-bar">
            <div className="wrapper">
              <h1>{ this.props.title }</h1>
            </div>
          </div>
        );
    }
}

TitleBarComponent.propTypes = {
    title: PropTypes.string.isRequired
};

TitleBarComponent.defaultProps = {

};