import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

const PrivateHeaderComponent = (props) => {
  return (
    <div>
      <h1>{ props.title }</h1>
      <button onClick={ () => { Accounts.logout(); } }>Logout</button>
    </div>  
  );
};

export default PrivateHeaderComponent;