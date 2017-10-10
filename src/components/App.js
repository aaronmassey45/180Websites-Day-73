import React, { Component } from 'react';

import Navbar from './navbar';
import Card from './card';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar brand='On This Day' />
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
