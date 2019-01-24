import React, { Component } from 'react';
import { connect } from 'react-redux';

import BrushMenu from './menu/BrushMenu.js';
import BucketMenu from './menu/BucketMenu.js';
import EraserMenu from './menu/EraserMenu.js';
import NodePenMenu from './menu/NodePenMenu.js';
import PencilMenu from './menu/PencilMenu.js';
import SelectMenu from './menu/SelectMenu.js';
import ShapeMenu from './menu/ShapeMenu.js';
import TextMenu from './menu/TextMenu.js';

import './Menu.css';

const MENUS = {
  brush: <BrushMenu />,
  bucket: <BucketMenu />,
  eraser: <EraserMenu />,
  'node-pen': <NodePenMenu />,
  pencil: <PencilMenu />,
  select: <SelectMenu />,
  shape: <ShapeMenu />,
  text: <TextMenu />
};

class Menu extends Component {
  
  render() {
    //console.log('menuLog: ', MENUS[this.props.toolIconCurrentlySelected])
    return (
      <div className='menu-element'>
        {MENUS[this.props.toolIconCurrentlySelected]}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
  toolIconCurrentlySelected: state.toolIconCurrentlySelected
  }
};

// const mapDispatchToProps = dispatch => ({
//   handleToolIconCurrentlySelected: toolName => {
//     dispatch(handleToolIconCurrentlySelected(toolName));
//   }
// });

export default connect(
  mapStateToProps, null
)(Menu);

