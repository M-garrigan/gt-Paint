import React, { Component } from 'react';
import './PencilMenu.css';

export default class PencilMenu extends Component {
  state = {
    tip: 'circle'
  }

  handlePencilTipChange = (event, shape) => {
    event.preventDefault();
    this.setState({shape});
    // call action to set store
  }
  

  render() {
    return (
      <div className='pencilMenu-wrapper'>
        <div className='pencilMenu'>
          <h2> Pencil </h2>

          <div className='pencil-group'>
            <span>Pencil Tip</span>
            <button onClick={event => this.handlePencilTipChange(event, 'circle')}>Circle</button>
            <button onClick={event => this.handlePencilTipChange(event, 'square')}>Square</button>
            <button onClick={event => this.handlePencilTipChange(event, 'triangle')}>Triangle</button>
          </div>
          <p>Color</p>
          <p>Width</p>
          
        </div>
      </div>
    )
  }
}
