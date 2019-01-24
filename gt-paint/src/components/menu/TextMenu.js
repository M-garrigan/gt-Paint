import React, { Component } from 'react';
import './TextMenu.css';

export default class TextMenu extends Component {
  state = {
    unit: 'px',
    fontSize: 16,
    font: 'times',
    color: 'black'
  }

  handleUnitChange = (event, unit) => {
    event.preventDefault();
    this.setState({unit: unit});
    // call action to set store
  }
  handleFontSizeChange = event => {
    event.preventDefault();
    let value = event.target.value;
    this.setState({fontSize: +value});
    // call action to set store
  }

  render() {
    return (
      <div className='textMenu-wrapper'>
        <div className='textMenu'>
          <h2> Text </h2>

          <div className='unit-group'>
            <span>Unit</span>
            <button onClick={event => this.handleUnitChange(event, 'px')}>px</button>
            <button onClick={event => this.handleUnitChange(event, 'mm')}>mm</button>
            <button onClick={event => this.handleUnitChange(event, 'in')}>in</button>
          </div>
          <div className='font-size'>
            <p>font-size</p>
            <input 
              type='range' min='0' max='100' 
              onChange={element => this.handleFontSizeChange(element)}
            />
            <output>
              {this.state.fontSize}
            </output>
          </div>
          <p>font-color</p>
          <p>font-family</p>
        </div>
      </div>
    )
  }
}
