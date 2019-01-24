import React, { Component } from 'react';
import './BucketMenu.css';

export default class BucketMenu extends Component {
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
      <div className='bucketMenu-wrapper'>
        <div className='bucketMenu'>
          <h2> Bucket </h2>

          <p>fill color</p>
          <p>select queue</p>
          
        </div>
      </div>
    )
  }
}
