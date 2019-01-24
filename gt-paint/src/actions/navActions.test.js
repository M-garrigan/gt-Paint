import { handleToolIconCurrentlySelected } from './navActions.js';

describe('navActions.js', () => {
  it('should create an action with the correct toolName', () => {
    const name = 'main tool';
    const expectedAction = {
      type: 'UPDATE_TOOL_ICON_SELECTED',
      toolName: name
    };
    expect(handleToolIconCurrentlySelected(name)).toEqual(expectedAction);
  });
});