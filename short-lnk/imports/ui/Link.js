import React, { Component } from 'react';

import LinksListComponent from './LinksList';
import PrivateHeaderComponent from './PrivateHeader';
import AddLinkComponent from './AddLink';
import LinksListFiltersComponent from './LinksListFilters';

export default class LinkComponent extends Component {
  render() {
    return (
      <div>
        <PrivateHeaderComponent title="Your Links" />
        <LinksListFiltersComponent />
        <AddLinkComponent />
        <LinksListComponent />
      </div>
    );
  }
}