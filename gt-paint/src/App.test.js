import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { ProviderApp, store } from './index.js';
import Index from './index.js';

import App from './App.js';
import Nav from './components/Nav.js';

import Menu from './components/Menu.js';
import Canvas from './components/Canvas.js';
import Tail from './components/Tail.js';


describe('<App /> ...', () => {

  // it('renders the root App component', () => {
  //   const tree = renderer.create(<ProviderApp />).toJSON();
  //   //const tree = renderer.create(<App/>).toJSON();
  //   //const tree = renderer.create(<Index/>).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('App component renders Nav component', () => {
    let component = shallow(<App/>);
    expect(component.contains(<Nav/>)).toEqual(true);
  });
  
  it('App component renders Menu component', () => {
    let component = shallow(<App/>);
    expect(component.contains(<Menu/>)).toEqual(true);
  });

  it('App component renders Canvas component', () => {
    let component = shallow(<App/>);
    expect(component.contains(<Canvas/>)).toEqual(true);
  });

  it('App component renders Tail component', () => {
    let component = shallow(<App/>);
    expect(component.contains(<Tail/>)).toEqual(true);
  });
});

