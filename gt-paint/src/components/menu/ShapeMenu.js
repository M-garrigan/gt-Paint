import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setShape, setShapeAttributes } from '../../actions/shapeActions.js';
import './ShapeMenu.css';

export class ShapeMenu extends Component {
  
  render() {
   
    return (
      <div className='shapeMenu-wrapper'>
        <div className='shapeMenu'>
          <h2> Shape </h2>

          <div className='shape-group'>
            <button 
              className={this.props.shape === 'circle' ? 'shape-item-active' : 'shape-item'}
              onClick={() => this.props.setShape('circle')}
            >Circle</button>
            <button 
              className={this.props.shape === 'square' ? 'shape-item-active' : 'shape-item'}
              onClick={() => this.props.setShape('square')}
            >Square</button>
            <button 
              className={this.props.shape === 'triangle' ? 'shape-item-active' : 'shape-item'}
              onClick={() => this.props.setShape('triangle')}>Triangle</button>
          </div>
          <div className='shape-styles'>
            <form onChange={event => this.props.setShapeAttributes(event)}>
              <label htmlFor='size_height'>Height: </label>
              <input type='number' id='size_height' name='sizeHeight' /><br/>
              <label htmlFor='size_width'>Width: </label>
              <input type='number' id='size_width' name='sizeWidth' /><br/>
              <label htmlFor='fill_color'>Fill: </label>
              <input type='color' id='fill_color' name='fillColor' /><br/>
              <label htmlFor='stroke_width'>Stroke Width: </label>
              <input type='number' id='stroke_width' name='strokeWidth' />
              <label htmlFor='stroke_color'>Stroke: </label>
              <input type='color' id='stroke_color' name='strokeColor' />
            </form>
          </div>
          
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
  shape: state.shape,
  shapeAttributes: state.shapeAttributes
  }
};

const mapDispatchToProps = dispatch => ({
  setShape: shape => {
    dispatch(setShape(shape));
  },
  setShapeAttributes: attributes => {
    dispatch(setShapeAttributes(attributes));
  }
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(ShapeMenu);
