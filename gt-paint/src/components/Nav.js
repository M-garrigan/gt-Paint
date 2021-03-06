import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleToolIconCurrentlySelected } from '../actions/navActions.js';
import './Nav.css';

export class Nav extends Component {
  state = {
    toolSelected: 'shape'
  }

  handleToolSelected = (event, toolName) => {
    
    event.preventDefault();
    this.setState({ toolSelected: toolName });
    // call method to update store
    this.props.handleToolIconCurrentlySelected(toolName);
  }
  render() {
    
    return (
      <div className='nav-element'>
        <div className='main-logo'>
          
          <img 
            className='main-logo-img'
            alt='purle' src='./arrows_io.svg' />
        </div>
        <div className='empty-nav'></div>

        <div className='tool-group'>
          <div 
            id='tool-item-select'
            className={this.state.toolSelected === 'select' ? 'tool-item-active' : 'tool-item'}
            onClick={ e => {this.handleToolSelected(e, 'select')} }
          > 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 320 512"
              className="select-icon icon"
              
            >
              <path d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"/></svg>
          </div>
          <div 
            id='tool-item-text'
            className={this.state.toolSelected === 'text' ? 'tool-item-active' : 'tool-item'}
            onClick={ e => {this.handleToolSelected(e, 'text')} }
          > 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512"
              className="text-icon icon"
              
            >
              <path d="M152 416h-24.013l26.586-80.782H292.8L319.386 416H296c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-26.739L275.495 42.746A16 16 0 0 0 260.382 32h-72.766a16 16 0 0 0-15.113 10.746L42.739 416H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm64.353-271.778c4.348-15.216 6.61-28.156 7.586-34.644.839 6.521 2.939 19.476 7.727 34.706l41.335 124.006h-98.619l41.971-124.068z"/>
            </svg>
          </div>
          <div 
            id='tool-item-shape'
            className={this.state.toolSelected === 'shape' ? 'tool-item-active' : 'tool-item'}
            onClick={ e => {this.handleToolSelected(e, 'shape')} }
          > 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              className="shape-icon icon"
            >
              <path d="M512 320v160c0 17.67-14.33 32-32 32H320c-17.67 0-32-14.33-32-32V320c0-17.67 14.33-32 32-32h160c17.67 0 32 14.33 32 32zm-384-64C57.31 256 0 313.31 0 384s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm351.03-32c25.34 0 41.18-26.67 28.51-48L412.51 16c-12.67-21.33-44.35-21.33-57.02 0l-95.03 160c-12.67 21.33 3.17 48 28.51 48h190.06z"/></svg>
          </div>
          <div 
            id='tool-item-bucket'
            className={this.state.toolSelected === 'bucket' ? 'tool-item-active' : 'tool-item'}
            onClick={ e => {this.handleToolSelected(e, 'bucket')} }
          > 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 576 512"
              className="bucket-icon icon"
            >
              <path d="M512 320s-64 92.65-64 128c0 35.35 28.66 64 64 64s64-28.65 64-64-64-128-64-128zm-9.37-102.94L294.94 9.37C288.69 3.12 280.5 0 272.31 0s-16.38 3.12-22.62 9.37l-81.58 81.58L81.93 4.76c-6.25-6.25-16.38-6.25-22.62 0L36.69 27.38c-6.24 6.25-6.24 16.38 0 22.62l86.19 86.18-94.76 94.76c-37.49 37.48-37.49 98.26 0 135.75l117.19 117.19c18.74 18.74 43.31 28.12 67.87 28.12 24.57 0 49.13-9.37 67.87-28.12l221.57-221.57c12.5-12.5 12.5-32.75.01-45.25zm-116.22 70.97H65.93c1.36-3.84 3.57-7.98 7.43-11.83l13.15-13.15 81.61-81.61 58.6 58.6c12.49 12.49 32.75 12.49 45.24 0s12.49-32.75 0-45.24l-58.6-58.6 58.95-58.95 162.44 162.44-48.34 48.34z"/>
            </svg>
          </div>
          <div 
            id='tool-item-eraser'
            className={this.state.toolSelected === 'eraser' ? 'tool-item-active' : 'tool-item'}
            onClick={ e => {this.handleToolSelected(e, 'eraser')} }
          > 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              className="eraser-icon icon"
            >
              <path d="M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"/>
            </svg>
          </div>
          <div 
            id='tool-item-brush'
            className={this.state.toolSelected === 'brush' ? 'tool-item-active' : 'tool-item'}
            onClick={ e => {this.handleToolSelected(e, 'brush')} }
          > 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              className="brush-icon icon"
            >
              <path d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"/>
            </svg>
          </div>
          <div 
            id='tool-item-node-pen'
            className={this.state.toolSelected === 'node-pen' ? 'tool-item-active' : 'tool-item'}
            onClick={ e => {this.handleToolSelected(e, 'node-pen')} }
          > 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              className="node-pen-icon icon"
            >
              <path d="M79.18 282.94a32.005 32.005 0 0 0-20.24 20.24L0 480l4.69 4.69 92.89-92.89c-.66-2.56-1.57-5.03-1.57-7.8 0-17.67 14.33-32 32-32s32 14.33 32 32-14.33 32-32 32c-2.77 0-5.24-.91-7.8-1.57l-92.89 92.89L32 512l176.82-58.94a31.983 31.983 0 0 0 20.24-20.24l33.07-84.07-98.88-98.88-84.07 33.07zM369.25 28.32L186.14 227.81l97.85 97.85 199.49-183.11C568.4 67.48 443.73-55.94 369.25 28.32z"/>
            </svg>
          </div>
          <div 
            id='tool-item-pencil'
            className={this.state.toolSelected === 'pencil' ? 'tool-item-active' : 'tool-item'}
            onClick={ e => {this.handleToolSelected(e, 'pencil')} }
          > 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              className="pencil-icon icon"
            >
            <path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"/>
          </svg>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
  toolIconCurrentlySelected: state.toolIconCurrentlySelected
  }
};

const mapDispatchToProps = dispatch => ({
  handleToolIconCurrentlySelected: toolName => {
    dispatch(handleToolIconCurrentlySelected(toolName));
  }
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Nav);
