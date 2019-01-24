import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCanvasDimensions, canvasClickCoordinates } from '../actions/canvasActions.js';
import './Canvas.css';

export class Canvas extends Component {
  
  state = {
    canvas: {
      height: 0,
      width: 0,
      x: 0, // upper left coordinate for canvas
      y: 0 // top coordinate for canvas
    }
  }
  
  logCoordinates = event => {
    this.props.canvasClickCoordinates({
      x: (Math.round(event.clientX)) - this.state.canvas.x,
      y: (Math.round(event.clientY)) - this.state.canvas.y
    })
  }

  getCanvasSize = element => {
    this.setState(prevState => ({
      canvas: {
        ...prevState.canvas,
        height: Math.round(element.getBoundingClientRect().height),
        width: Math.round(element.getBoundingClientRect().width),
        x: Math.round(element.getBoundingClientRect().x),
        y: Math.round(element.getBoundingClientRect().y)
      }
    }), () => this.props.setCanvasDimensions(this.state.canvas)
    );

  }

  componentDidMount() {
    if (this.canvasRef)
      this.getCanvasSize(this.canvasRef);

    window.addEventListener('resize', () => this.getCanvasSize(this.canvasRef));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.getCanvasSize(this.canvasRef));
  }

  render() {
    return (
      <div 
        className='canvas-element'
        ref={node => this.canvasRef = node}
        onClick={event => this.logCoordinates(event)}
      >
        
      </div>
    )
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
  null, mapDispatchToProps
)(Canvas);