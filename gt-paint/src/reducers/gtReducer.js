
const defaultState = {
  toolIconCurrentlySelected: 'shape',
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
  },
  shape: 'circle',
  shapeAttributes: {
    sizeHeight: 50,
    sizeWidth: 50,
    fillColor: '',
    strokeWidth: 0,
    strokeColor: ''
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
        {canvasMouseUpCoordinates: action.canvasMouseUpCoordinates});
    case 'SET_SHAPE': 
        return Object.assign(
          {},
          state,
          {shape: action.shape}
        );
    case 'SET_SHAPE_ATTRIBUTES': 
      const { name, value } = action.event.target;
      return Object.assign(
        {},
        state,
        {shapeAttributes: {
          ...state.shapeAttributes,
          [name]: value
        }}
      );
    default: 
      return state;
  }
};