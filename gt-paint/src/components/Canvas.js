import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCanvasDimensions } from '../actions/canvasActions.js';
import './Canvas.css';

export class Canvas extends Component {
  
  state = {
    canvas: {
      height: 0,
      width: 0
    }
  }
  
  logCoordinates = event => {
    console.log('coord: ', event.screenX, event.screenY);
    console.log('coord: ', event.clientX, event.clientY)
  }

  getCanvasSize = element => {
    this.setState(prevState => ({
      canvas: {
        ...prevState.canvas,
        height: Math.round(element.getBoundingClientRect().height),
        width: Math.round(element.getBoundingClientRect().width)
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
  }
});

export default connect(
  null, mapDispatchToProps
)(Canvas);