import React, { Component } from 'react';

import Navbar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar brand='On This Day' />
      </div>
    );
  }
}
