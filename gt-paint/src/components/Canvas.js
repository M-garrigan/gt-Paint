import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../index.js';
import { 
  setCanvasDimensions, 
  setMouseDownCoordinates, 
  setMouseUpCoordinates} from '../actions/canvasActions.js';
import { drawSquare } from '../drawHelpers/drawSquare.js';
import './Canvas.css';

export class Canvas extends Component {

  

  evaluateClickBeforeDraw = () => {
    let snapshot = store.getState();
    
    if (snapshot.toolIconCurrentlySelected === 'shape') {
      if (snapshot.shape === 'square') {
        drawSquare(snapshot, this.canvasRef);
      }
    }
    if (snapshot.toolIconCurrentlySelected === 'select') {
      let ctx = this.canvasRef.getContext('2d');
      console.log('st: ', store.getState())
      console.log('isInBound: ', ctx.getImageData(this.props.canvasMouseDownCoordinates.x, this.props.canvasMouseDownCoordinates.y,
        1,1
      // this.props.canvasDimensions.height,
      // this.props.canvasDimensions.width
      ))
      console.log('isInBound: ', ctx.isPointInPath(this.props.canvasMouseDownCoordinates.x, this.props.canvasMouseDownCoordinates.y,
       
      ))
    }
  }

  mouseDown = event => {
    this.props.setMouseDownCoordinates({
      x: (Math.round(event.clientX)) - this.props.canvasDimensions.left,
      y: (Math.round(event.clientY)) - this.props.canvasDimensions.top
    });
  }

  mouseUp = event => {
    const xUp = (Math.round(event.clientX)) - this.props.canvasDimensions.left;
    const yUp = (Math.round(event.clientY)) - this.props.canvasDimensions.top;

    this.props.setMouseUpCoordinates({
      x: xUp,
      y: yUp
    });
    
    //store.dispatch(thunkMe())
    this.evaluateClickBeforeDraw();
  }

  mouseMove = event => {
    //console.log('canvas-mouseMove: ', event.clientX, event.clientY)
    
  }

  getCanvasSize = element => {
    const { height, width, x, y } = element.getBoundingClientRect();

    this.props.setCanvasDimensions({
      height: Math.round(height),
      width: Math.round(width),
      left: Math.round(x),
      top: Math.round(y)
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
  canvasDimensions: state.canvasDimensions,
  canvasMouseDownCoordinates: state.canvasMouseDownCoordinates,
  canvasMouseUpCoordinates: state.canvasMouseUpCoordinates,
  toolIconCurrentlySelected: state.toolIconCurrentlySelected
  }
};

const mapDispatchToProps = dispatch => ({
  setCanvasDimensions: canvas => {
    dispatch(setCanvasDimensions(canvas));
  },
  setMouseDownCoordinates: mouseDown => {
    dispatch(setMouseDownCoordinates(mouseDown));
  },
  setMouseUpCoordinates: mouseUp => {
    dispatch(setMouseUpCoordinates(mouseUp))
  }
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Canvas);