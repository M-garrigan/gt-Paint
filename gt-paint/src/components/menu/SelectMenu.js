import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SelectMenu.css';

export class SelectMenu extends Component {
  render() {
    return (
      <div className='selectMenu-wrapper'>
        <div className='selectMenu'>
          <h2> Select </h2>
        </div>
        <p>Canvas Clicked at:</p>
        <p>{`x: ${this.props.canvasClickedCoordinates.x}  y: ${this.props.canvasClickedCoordinates.y}`}</p>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    canvasClickedCoordinates: state.canvasClickedCoordinates
  }
};

export default connect(
  mapStateToProps, null
)(SelectMenu);
