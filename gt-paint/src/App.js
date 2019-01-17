import React, { Component } from 'react';
import Nav from './components/Nav.js';
import Menu from './components/Menu.js';
import Canvas from './components/Canvas.js';
import Tail from './components/Tail.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Menu />
        <Canvas />
        <Tail />
      </div>
    );
  }
}

export default App;
