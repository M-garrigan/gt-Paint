import React, { Component } from 'react';
import './BucketMenu.css';

export default class BucketMenu extends Component {

  render() {
    return (
      <div className='bucketMenu-wrapper'>
        <div className='bucketMenu'>
          <h2> Bucket </h2>
          <input type='color' />
          <p>fill color</p>
          <p>select queue</p>
          
        </div>
      </div>
    )
  }
}
