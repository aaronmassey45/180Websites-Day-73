import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Navbar from './navbar';
import Card from './card';
import { fetchDateFact } from '../actions';

class App extends Component {
  componentDidMount() {
    //this.props.fetchDateFact('10/10');
  }

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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchDateFact }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
