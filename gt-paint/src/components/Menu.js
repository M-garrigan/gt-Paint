import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectMenu from './menu/SelectMenu.js';
import TextMenu from './menu/TextMenu.js';
import './Menu.css';

const MENUS = {
  select: <SelectMenu />,
  text: <TextMenu />
};

class Menu extends Component {
  
  render() {
    console.log('menuLog: ', MENUS[this.props.toolIconCurrentlySelected])
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

