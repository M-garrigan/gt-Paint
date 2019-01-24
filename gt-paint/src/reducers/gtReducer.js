
const defaultState = {
  toolIconCurrentlySelected: 'select',
  canvasDimensions: {
    height: 0,
    width: 0
  }
};

export default (state = defaultState, action) => {
  
  switch (action.type) {
    case 'UPDATE_TOOL_ICON_SELECTED':
      return Object.assign({}, state, {toolIconCurrentlySelected: action.toolName});
    case 'SET_CANVAS_DIMENSIONS':
      return Object.assign({}, state, {canvasDimensions: action.canvas});
    default: 
      return state;
  }
};