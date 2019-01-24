import React, { Component } from 'react';
import './BrushMenu.css';

export default class BrushMenu extends Component {
  state = {
    tip: 'circle'
  }

  handleBrushTipChange = (event, shape) => {
    event.preventDefault();
    this.setState({shape});
    // call action to set store
  }
  

  render() {
    return (
      <div className='brushMenu-wrapper'>
        <div className='brushMenu'>
          <h2> Brush </h2>

          <div className='brush-group'>
            <span>Brush Tip</span>
            <button onClick={event => this.handleBrushTipChange(event, 'circle')}>Circle</button>
            <button onClick={event => this.handleBrushTipChange(event, 'square')}>Square</button>
            <button onClick={event => this.handleBrushTipChange(event, 'triangle')}>Triangle</button>
          </div>
          <p>Color</p>
          <p>Width</p>
          
        </div>
      </div>
    )
  }
}
