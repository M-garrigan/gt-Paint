
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Nav from './Nav.js';

describe('<Nav /> ...', () => {

  it('renders the Nav component', () => {
    const tree = renderer.create(<Nav/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Select tool icon has class "tool-item-select" by default', () => {
    const component = shallow(<Nav/>);
    const selectTool = component.find('#tool-item-select')
    expect(selectTool.hasClass('tool-item-active')).toEqual(true);
  });

  it('Text tool icon has class "tool-item" by default', () => {
    const component = shallow(<Nav/>);
    const textTool = component.find('#tool-item-text')
    expect(textTool.hasClass('tool-item')).toEqual(true);
  });

  it('Shape tool icon has class "tool-item" by default', () => {
    const component = shallow(<Nav/>);
    const shapeTool = component.find('#tool-item-shape')
    expect(shapeTool.hasClass('tool-item')).toEqual(true);
  });

  it('Bucket tool icon has class "tool-item" by default', () => {
    const component = shallow(<Nav/>);
    const bucketTool = component.find('#tool-item-bucket')
    expect(bucketTool.hasClass('tool-item')).toEqual(true);
  });

  it('Eraser tool icon has class "tool-item" by default', () => {
    const component = shallow(<Nav/>);
    const eraserTool = component.find('#tool-item-eraser')
    expect(eraserTool.hasClass('tool-item')).toEqual(true);
  });

  it('Brush tool icon has class "tool-item" by default', () => {
    const component = shallow(<Nav/>);
    const brushTool = component.find('#tool-item-brush')
    expect(brushTool.hasClass('tool-item')).toEqual(true);
  });

  it('Node-Pen tool icon has class "tool-item" by default', () => {
    const component = shallow(<Nav/>);
    const nodePenTool = component.find('#tool-item-node-pen')
    expect(nodePenTool.hasClass('tool-item')).toEqual(true);
  });
  
  it('Pencil tool icon has class "tool-item" by default', () => {
    const component = shallow(<Nav/>);
    const pencilTool = component.find('#tool-item-pencil')
    expect(pencilTool.hasClass('tool-item')).toEqual(true);
  });
});

