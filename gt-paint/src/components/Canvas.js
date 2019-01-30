import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCanvasDimensions, canvasClickCoordinates } from '../actions/canvasActions.js';
import './Canvas.css';

export class Canvas extends Component {
  
  
  logCoordinates = event => {
    this.props.canvasClickCoordinates({
      x: (Math.round(event.clientX)) - this.props.canvasDimensions.left,
      y: (Math.round(event.clientY)) - this.props.canvasDimensions.top
    });
    
    console.log('canvas: ', this.props.canvasDimensions.left, this.props.canvasDimensions.top)
    let relX = (Math.round(event.clientX)) - this.props.canvasDimensions.left;
    let relY = (Math.round(event.clientY)) - this.props.canvasDimensions.top;
    console.log('rel: ', relX, relY);
    let ctx = this.canvasRef.getContext('2d');
    ctx.fillRect(relX, relY, 100, 100);
    
    
  }

  mouseDown = event => {
    console.log('canvas-mouseDown: ', event.clientX, event.clientY);
    
  }

  mouseUp = event => {
    console.log('canvas-mouseUp: ', event.clientX, event.clientY)
    
  }

  mouseMove = event => {
    //console.log('canvas-mouseMove: ', event.clientX, event.clientY)
    
  }

  getCanvasSize = element => {
    this.props.setCanvasDimensions({
      height: Math.round(element.getBoundingClientRect().height),
      width: Math.round(element.getBoundingClientRect().width),
      left: Math.round(element.getBoundingClientRect().x),
      top: Math.round(element.getBoundingClientRect().y)
    });
  }

  componentDidMount() {
    this.getCanvasSize(this.canvasWrapper);

    window.addEventListener('resize', () => this.getCanvasSize(this.canvasWrapper));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.getCanvasSize(this.canvasWrapper));
  }

  render() {
    return (
      <div 
        className='canvas-element'
        ref={node => this.canvasWrapper = node}
      >
      <canvas 
        ref={node => this.canvasRef = node}
        onClick={event => this.logCoordinates(event)}
        onMouseDown={event => this.mouseDown(event)}
        onMouseUp={event => this.mouseUp(event)}
        onMouseMove={event => this.mouseMove(event)}
        height={this.props.canvasDimensions.height}
        width={this.props.canvasDimensions.width}
      />
      </div>
        
      
    )
  }
};

const mapStateToProps = state => {
  return {
  canvasDimensions: state.canvasDimensions
  }
};

const mapDispatchToProps = dispatch => ({
  setCanvasDimensions: canvas => {
    dispatch(setCanvasDimensions(canvas));
  },
  canvasClickCoordinates: canvas => {
    dispatch(canvasClickCoordinates(canvas));
  }
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Canvas);