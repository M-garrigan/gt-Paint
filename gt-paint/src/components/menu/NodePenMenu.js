import React, { Component } from 'react';
import './NodePenMenu.css';

export default class NodePenMenu extends Component {
  
  

  render() {
    return (
      <div className='nodePenMenu-wrapper'>
        <div className='nodePenMenu'>
          <h2> Node Pen </h2>

          <p>Fill</p>
          <p>Stroke</p>
          <p>Color</p>
          <p>Width</p>
          
        </div>
      </div>
    )
  }
}
