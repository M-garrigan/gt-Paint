
const defaultState = {
  currentToolSelected: 'Brush'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'HANDLE_CHANGE_CURRENT_TOOL':
      return Object.assign({}, state, {currentToolSelected: action.tool});
    default: 
      return state;
  }
};