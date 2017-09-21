import React, { Component } from 'react';

import LinksListComponent from './LinksList';
import PrivateHeaderComponent from './PrivateHeader';
import AddLinkComponent from './AddLink';

export default class LinkComponent extends Component {
  render() {
    return (
      <div>
        <PrivateHeaderComponent title="Your Links" />
        <LinksListComponent />
        <AddLinkComponent />
      </div>
    );
  }
}