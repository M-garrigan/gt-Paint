import React, { Component } from 'react';
import './EraserMenu.css';

export default class EraserMenu extends Component {
  

  render() {
    return (
      <div className='eraserMenu-wrapper'>
        <div className='eraserMenu'>
          <h2> Eraser </h2>

          <p>Shape</p>
          <p>Width</p>
          <p>Clear All</p>
          <p>By Specific Color</p>
        </div>
      </div>
    )
  }
}
