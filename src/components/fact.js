import React, { Component } from 'react';
import { connect } from 'react-redux';

class Fact extends Component {
  render() {
    const { fact } = this.props;
    return (
      <div className='Fact'>
        {fact ? fact : ''}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  fact: state.fact
})

export default connect(mapStatetoProps, null)(Fact)
