import React, { Component } from 'react';
import './ShapeMenu.css';

export default class ShapeMenu extends Component {
  state = {
    shape: 'square'
  }

  handleShapeChange = (event, shape) => {
    event.preventDefault();
    this.setState({shape});
    // call action to set store
  }
  

  render() {
    return (
      <div className='shapeMenu-wrapper'>
        <div className='shapeMenu'>
          <h2> Shape </h2>

          <div className='shape-group'>
            <span>Shape</span>
            <button onClick={event => this.handleShapeChange(event, 'circle')}>Circle</button>
            <button onClick={event => this.handleShapeChange(event, 'square')}>Square</button>
            <button onClick={event => this.handleShapeChange(event, 'triangle')}>Triangle</button>
          </div>
          <p>Stroke</p>
          <p>Fill</p>
          <p>Triangle Sides</p>
          
        </div>
      </div>
    )
  }
}
