
const defaultState = {
  toolIconCurrentlySelected: 'select',
  canvasDimensions: {
    height: 0,
    width: 0,
    left: 0,
    top: 0
  },
  canvasMouseDownCoordinates: {
    x: 0,
    y: 0
  },
  canvasMouseUpCoordinates: {
    x: 0,
    y: 0
  }
};

export default (state = defaultState, action) => {
  
  switch (action.type) {
    case 'UPDATE_TOOL_ICON_SELECTED':
      return Object.assign({}, state, {toolIconCurrentlySelected: action.toolName});
    case 'SET_CANVAS_DIMENSIONS':
      return Object.assign({}, state, {canvasDimensions: action.canvas});
    case 'CANVAS_MOUSE_DOWN_COORDINATES':
      return Object.assign(
        {}, 
        state, 
        {canvasMouseDownCoordinates: action.canvasMouseDownCoordinates});
    case 'CANVAS_MOUSE_UP_COORDINATES':
      return Object.assign(
        {}, 
        state, 
        {canvasMouseUpCoordinates: action.canvasMouseUpCoordinates})
    default: 
      return state;
  }
};