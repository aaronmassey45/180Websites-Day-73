import React, { Component } from 'react';

import Fact from './fact'

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
    e.preventDefault();
    this.props.fetchDateFact(this.state.date);
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
            placeholder='ex. 10/9'
          />
          <button type='submit' className="btn btn-block btn-default">Submit</button>
        </form>
        <Fact />
      </div>
    );
  }
}

export default Card;
