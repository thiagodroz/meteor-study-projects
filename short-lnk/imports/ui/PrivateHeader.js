import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

const PrivateHeaderComponent = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{ props.title }</h1>
        <button className="button button--link-text" onClick={ () => { Accounts.logout(); } }>Logout</button>
      </div>
    </div>  
  );
};

export default PrivateHeaderComponent;