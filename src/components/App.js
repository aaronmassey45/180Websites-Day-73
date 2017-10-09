import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Navbar from './navbar';
import Fact from './fact';
import { fetchDateFact } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchDateFact('10/10');
  }

  render() {
    return (
      <div className='App'>
        <Navbar brand='On This Day' />
        <Fact />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchDateFact }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
