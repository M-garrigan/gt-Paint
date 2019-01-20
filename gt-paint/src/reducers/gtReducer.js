
const defaultState = {
  toolIconCurrentlySelected: 'select'
};

export default (state = defaultState, action) => {
  
  switch (action.type) {
    case 'UPDATE_TOOL_ICON_SELECTED':
      return Object.assign({}, state, {toolIconCurrentlySelected: action.toolName});
    default: 
      return state;
  }
};