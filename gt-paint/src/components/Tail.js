import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Tail.css';

export class Tail extends Component {
  render() {
    return (
      <div className='tail-element'>
        <h3>{`Canvas Size: height - ${this.props.canvasDimensions.height}  width - ${this.props.canvasDimensions.width}`}</h3>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
  canvasDimensions: state.canvasDimensions
  }
};

export default connect(
  mapStateToProps, null
)(Tail);