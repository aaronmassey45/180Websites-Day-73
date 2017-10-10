import React, { Component } from 'react';
import { connect } from 'react-redux';

class Fact extends Component {
  render() {
    let { fact } = this.props;
    return (
      <div className='Fact card-body' style={{ display: fact ? 'block' : 'none' }}>
        <h4 className="card-title">Date Fact</h4>
        <p className='card-text'>{fact ? fact : ''}</p>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  fact: state.date_fact.fact
})

export default connect(mapStatetoProps, null)(Fact)
