import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Fact from './fact'
import { fetchDateFact } from '../actions';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      date: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ date: e.target.value });
  }

  handleSubmit = (e) => {
    const { date } = this.state;
    e.preventDefault();
    if (date !== '') {
      this.props.fetchDateFact(this.state.date);
    }
  }

  render() {
    return (
      <div className='card bg-primary text-white mt-5 p-4'>
        <h1>On This Day</h1>
        <p>Enter a date and get a random fact!</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control form-control-lg"
            onChange={this.handleChange}
            value={this.state.date}
            placeholder='ex. 10/9 or 123'
          />
          <button type='submit' className="btn btn-block btn-default">Submit</button>
        </form>
        <Fact />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchDateFact }, dispatch);
}

export default connect(null, mapDispatchToProps)(Card);
